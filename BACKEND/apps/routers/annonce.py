from fastapi import APIRouter,Depends,status,File,UploadFile,HTTPException
from typing import List
from datetime import date,datetime
from sqlalchemy.orm import Session
from starlette.responses import JSONResponse
import secrets
from fastapi.staticfiles import StaticFiles
from PIL import Image
import os
# -----local imports --------------------------------
from db import Database
from models import models
from schemas import Schemas
from authentication.valid import get_current_user_email


router = APIRouter(
    prefix='/annonce',
    tags=['Annonces']
)

get_db=Database.get_db


@router.get('/',response_model=List[Schemas.showannonce])

def getAll(page:int,db :Session = Depends(get_db)):
    Annonces=db.query(models.Annonce).order_by(models.Annonce.Date).all()[(page-1)*10:page*10]
    return Annonces



@router.get('/keyword',response_model=List[Schemas.showannonce])

def getResult(db :Session = Depends(get_db),keyword:str=''):
    Annonces=db.query(models.Annonce).filter(models.Annonce.description.contains(keyword)).order_by(models.Annonce.Date).all()
    return Annonces

@router.get('/filtered',response_model=List[Schemas.showannonce])
def getAll(keyword:str='',wilaya:str='',commune:str='',date1:date=None,date2:date=None,db :Session = Depends(get_db)):

    if date1==None and date2== None:
        Annonces=db.query(models.Annonce).filter(models.Annonce.description.contains(keyword) , models.Annonce.localisation.contains(wilaya) ,models.Annonce.localisation.contains(commune) ).order_by(models.Annonce.Date).all()
    else : 
        date1 = datetime.combine(date1,datetime.min.time())
        date2 = datetime.combine(date2, datetime.max.time())
        # return db.query(models.Annonce).filter(models.Annonce.Date.between(date1,date2)).order_by(models.Annonce.Date).all()
        return db.query(models.Annonce).filter(models.Annonce.description.contains(keyword) , models.Annonce.localisation.contains(wilaya) ,models.Annonce.localisation.contains(commune),models.Annonce.Date >= date1,models.Annonce.Date <=date2).order_by(models.Annonce.Date).all()

    return Annonces


@router.get('/own',response_model=List[Schemas.showannonce])

def getOwn(userid:int,db :Session = Depends(get_db)):

    Annonces=db.query(models.Annonce).filter(models.Annonce.user_id == userid).order_by(models.Annonce.Date).all()
    return Annonces

# router.mount('/Users/mac/Desktop/TP/BACKEND/apps/routers/static',StaticFiles(directory='/Users/mac/Desktop/TP/BACKEND/apps/routers/static'),name='static')
    

async def create_upload_files(file: List[UploadFile]):
    FILEPATH= './routers/static/images/'
    nameslist= []
    for file in file:
        filename=file.filename
        extension = 'png'

        token_name= secrets.token_hex(10)+'.'+extension
        generatename = FILEPATH + token_name
        file_content = await file.read()

        with open(generatename, 'wb+') as f:
            f.write(file_content)
        
        img = Image.open(generatename)
        img.save(generatename)
        await file.close()
        nameslist.append(token_name)
    return nameslist




# creer une anonnce
@router.post('/',response_model=Schemas.showannonce,status_code=status.HTTP_201_CREATED)
async def create(request :Schemas.Annonce,db :Session = Depends(get_db),userid:int=3):
    new_annonce= models.Annonce(titre=request.titre,categories=request.categories,typeDuBien=request.typeDuBien,user_id=userid,Date = request.Date,
                                surfaces=request.surfaces,description=request.description,localisation=request.localisation ,prix=request.prix  )
    db.add(new_annonce)
    db.commit()
    db.refresh(new_annonce)

    return new_annonce


# endpoint pour attacher les images a l'annonce 
@router.post('/images',status_code=status.HTTP_201_CREATED)
async def create(new_annonce:int,file: List[UploadFile],db :Session = Depends(get_db)):
    Myfiles = await create_upload_files(file)
    for myname in Myfiles :
        new_image = models.image(name = myname,annonce_id=new_annonce)
        db.add(new_image)
        db.commit()
        db.refresh(new_image)

    return 'images uploaded'



# endpoint pour supprimer une annonce 
@router.delete('/{id}')
def delete_Annonce(id:int,user_id:int,db :Session = Depends(get_db)):
    # db.query(models.image).filter(models.image.annonce_id == id).delete()
    annonce = db.query(models.Annonce).filter(models.Annonce.id == id).first()
    if not annonce: return JSONResponse({"result": 'already deleted'})
    images = db.query(models.image).filter(models.image.annonce_id ==id).all()
    for image in images:
        os.remove("./routers/static/images/"+image.name)
        db.query(models.image).filter(models.image.id == image.id).delete()
    db.query(models.Annonce).filter(models.Annonce.id == id).delete()
    db.commit()
    return JSONResponse({"result": True})

