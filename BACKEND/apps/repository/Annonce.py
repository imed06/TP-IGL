from fastapi import HTTPException,status
import Schemas,models
from sqlalchemy.orm import Session

def CreerAnnonce(response:Schemas.blogbase,db:Session):
    Nouvelle_annonce =models.Annonce(Type_annonce=response.Type_annonce,
    Type_bien=response.Type_bien,Surface=response.Surface,Description=response.Description,
    Prix=response.Prix,Nom=response.Nom,Prenom=response.Prenom,Adresse=response.Adresse,Email=response.Email,
    Tel=response.Tel,Localisation=response.Localiastion)
    db.add(Nouvelle_annonce)
    db.commit()
    db.refresh(Nouvelle_annonce)
    return Nouvelle_annonce