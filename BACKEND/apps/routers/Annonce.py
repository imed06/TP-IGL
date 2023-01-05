from fastapi import APIRouter,Depends
from sqlalchemy.orm import Session
import Schemas,models
from Database import get_db
from repository import Annonce


router =APIRouter(prefix="/Annonce",
tags=['Annonces'])

@router.post('/',response_model=Schemas.blogbase)
def CreerAnnonce(request:Schemas.blogbase,db : Session=Depends(get_db)):
    return Annonce.CreerAnnonce(request,db)



@router.delete('/{id}')
def delete_Annonce(id:int,user_id:int,db :Session = Depends(get_db)):
    # db.query(models.image).filter(models.image.annonce_id == id).delete()
    annonce = db.query(models.Annonce).filter(models.Annonce.id == id).first()
    if not annonce: return " deja supprimé"
    images = db.query(models.Photo).filter(models.Photo.id_annonce ==id).all()
    for image in images:
        db.query(models.Photo).filter(models.Photo.id == image.id).delete()
        #db.commit()
    db.query(models.Annonce).filter(models.Annonce.id == id).delete()
    db.commit()
    return "supprimé"