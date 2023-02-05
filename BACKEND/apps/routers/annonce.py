from fastapi import APIRouter,Depends,status ,HTTPException, Query
from typing import List,Optional
from datetime import date,datetime
from sqlalchemy.orm import Session
from sqlalchemy import or_
from starlette.responses import JSONResponse
from typing import Union
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

# recuperer les annonces selon le numero de page

@router.get('/',response_model=List[Schemas.showannonce])

def getAll(page:int,db :Session = Depends(get_db)):
    Annonces=db.query(models.Annonce).order_by(models.Annonce.Date.desc()).limit(24).offset((page - 1) * 24).all()
    return Annonces


# recuperer une annonces selon son id
@router.get('/{id}',response_model=Schemas.showannonce)

def get(id:int,db :Session = Depends(get_db)):
    Annonce=db.query(models.Annonce).filter(models.Annonce.id == id).first()
    return Annonce

# recuperer les annonces qui contiennent le mot 'keyword' dans la description et le titre

@router.get('/keyword/',response_model=List[Schemas.showannonce])

def getResult( db :Session = Depends(get_db),keyword:str=''):
    Annonces=db.query(models.Annonce).filter(or_(models.Annonce.description.contains(keyword),models.Annonce.titre.contains(keyword))).order_by(models.Annonce.Date.desc()).all()
    return Annonces



# filtrer les annonces selon les 4 champs du filtre  
@router.get('/filtered/',response_model=List[Schemas.showannonce])
def getAll(wilaya:str='',commune:str='',typeDuBien:str='',date1:date=None,date2:date=None,db :Session = Depends(get_db)):

    if date1==None and date2== None:
        Annonces=db.query(models.Annonce).filter( models.Annonce.localisation.contains(wilaya) ,models.Annonce.localisation.contains(commune),models.Annonce.typeDuBien.contains(typeDuBien) ).order_by(models.Annonce.Date.desc()).all()
    else : 
        date1 = datetime.combine(date1,datetime.min.time())
        date2 = datetime.combine(date2, datetime.max.time())
        return db.query(models.Annonce).filter( models.Annonce.localisation.contains(wilaya) ,models.Annonce.localisation.contains(commune),models.Annonce.typeDuBien.contains(typeDuBien),models.Annonce.Date >= date1,models.Annonce.Date <=date2).order_by(models.Annonce.Date.desc()).all()

    return Annonces

# recuperer les annonces d'un utilisateur a travers son id 
@router.get('/own',response_model=List[Schemas.showannonce])

def getOwn(userid:int,db :Session = Depends(get_db)):

    Annonces=db.query(models.Annonce).filter(models.Annonce.user_id == userid).order_by(models.Annonce.Date).all()
    return Annonces

# router.mount('/Users/mac/Desktop/TP/BACKEND/apps/routers/static',StaticFiles(directory='/Users/mac/Desktop/TP/BACKEND/apps/routers/static'),name='static')

    





# creer une anonnce avec les liens de ses images comme params paths --paths est une liste de chaine de caractère--
@router.post('/',response_model=Schemas.showannonce,status_code=status.HTTP_201_CREATED)
async def create(request :Schemas.Annonce,db :Session = Depends(get_db),userid:Optional[int]=0,paths: Union[List[str], None] = Query(default=None)):
    date_actuelle = datetime.now()
    new_annonce= models.Annonce(titre=request.titre,categories=request.categories,typeDuBien=request.typeDuBien,user_id=userid,Date = date_actuelle,
                                surfaces=request.surfaces,description=request.description,localisation=request.localisation ,prix=request.prix  )
    db.add(new_annonce)
    db.commit()
    db.refresh(new_annonce)

    for element in paths:
        New_Photo = models.image(lien = element,annonce_id = new_annonce.id)
        db.add(New_Photo)
        db.commit()
        db.refresh(New_Photo)

    return new_annonce





# endpoint pour supprimer une annonce 
@router.delete('/{id}')
def delete_Annonce(id:int,db :Session = Depends(get_db)):
    annonce = db.query(models.Annonce).filter(models.Annonce.id == id).first()
    if not annonce: return JSONResponse({"result": 'already deleted'})
    images = db.query(models.image).filter(models.image.annonce_id ==id).all()
    for image in images:
        db.query(models.image).filter(models.image.id == image.id).delete()
    db.query(models.Message).filter(models.Message.id_annonce == id).delete()
    db.query(models.Annonce).filter(models.Annonce.id == id).delete()
    db.commit()
    return JSONResponse({"result": True})
