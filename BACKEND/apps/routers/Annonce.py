from fastapi import APIRouter,Depends,status,Query
from sqlalchemy.orm import Session
import Schemas,models
from Database import get_db
from repository import Annonce
from starlette.responses import JSONResponse

from typing import List, Optional,Union
from datetime import datetime


router =APIRouter(prefix="/Annonce",
tags=['Annonces'])
"""
@router.post('/',response_model=Schemas.showAnnonce,status_code=status.HTTP_201_CREATED)
def CreerAnnonce(request:Schemas.blogbase,db :Session=Depends(get_db)):
    return Annonce.CreerAnnonce(request,db)  """

@router.post('/',response_model=Schemas.showannonce,status_code=status.HTTP_201_CREATED)
async def create(request :Schemas.Annonce,db :Session = Depends(get_db),userid:Optional[int]=0,paths: Union[List[str], None] = Query(default=None)):
    new_annonce= models.Annonce(titre=request.titre,categories=request.categories,typeDuBien=request.typeDuBien,user_id=userid,Date = request.Date,
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

"""@router.get('/',response_model=Schemas.blogbase,status_code=status.HTTP_200_OK)
def CreerAnnonce():
    return {"result":"ceci est un test"} """
"""
@router.post('/',response_model=Schemas.blogbase,status_code=status.HTTP_201_CREATED)
def CreerAnnonce(request:Schemas.blogbase,db :Session=Depends(get_db)):
    Nouvelle_annonce =models.Annonce(Titre=request.Titre,Type_annonce=request.Type_annonce,
    Type_bien=request.Type_bien,Surface=request.Surface,Description=request.Description,
    Prix=request.Prix,Nom=request.Nom,Prenom=request.Prenom,Adresse=request.Adresse,Email=request.Email,
    Tel=request.Tel,Localisation=request.Localisation,user_id =1,dateInsertion=request.dateInsertion)

    db.add(Nouvelle_annonce)
    db.commit()
    db.refresh(Nouvelle_annonce)
    return Nouvelle_annonce
""" 

# suppression d'une annonce
@router.delete('/{id}',status_code=status.HTTP_200_OK)
def delete_Annonce(id:int,db :Session = Depends(get_db)):
    annonce = db.query(models.Annonce).filter(models.Annonce.id == id).first()
    if not annonce: return JSONResponse({"result": 'already deleted'})
    images = db.query(models.Photo).filter(models.Photo.id_annonce ==id).all()
    for image in images:
        db.query(models.Photo).filter(models.Photo.id == image.id).delete()
        #db.commit()
    db.query(models.Annonce).filter(models.Annonce.id == id).delete()
    db.commit()
    return JSONResponse({"result": True})

#J'ai besoin de recherche par ID

# recuperer une annonces selon son id
@router.get('/{id}',response_model=Schemas.showAnnonce)
def get(id:int,db :Session = Depends(get_db)):
    Annonce=db.query(models.Annonce).filter(models.Annonce.id == id).first()
    if not Annonce: return JSONResponse({"result": 'not exist'})
    return Annonce




"""
@router.delete('/{id}')
def delete_Annonce(id:int,db :Session = Depends(get_db)):
    annonce = db.query(models.Annonce).filter(models.Annonce.id == id).first()
    if not annonce: return JSONResponse({"result": 'already deleted'})
    images = db.query(models.image).filter(models.image.annonce_id ==id).all()
    for image in images:
        db.query(models.image).filter(models.image.id == image.id).delete()
    db.query(models.Annonce).filter(models.Annonce.id == id).delete()
    db.commit()
    return JSONResponse({"result": True}) """