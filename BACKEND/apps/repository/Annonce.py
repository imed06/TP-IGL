from fastapi import HTTPException,status
import Schemas,models
from sqlalchemy.orm import Session

def CreerAnnonce(request:Schemas.blogbase,db:Session):

    Nouvelle_annonce =models.Annonce(Titre=request.Titre,Type_annonce=request.Type_annonce,
    Type_bien=request.Type_bien,Surface=request.Surface,Description=request.Description,
    Prix=request.Prix,Nom=request.Nom,Prenom=request.Prenom,Adresse=request.Adresse,Email=request.Email,
    Tel=request.Tel,Localisation=request.Localisation,user_id =1,dateInsertion=request.dateInsertion)
    db.add(Nouvelle_annonce)
    db.commit()
    db.refresh(Nouvelle_annonce)

    #sauvgarde des photos dans la bdd
    for element in request.photo:
        pht = models.Photo(lien = element.lien,id_annonce = Nouvelle_annonce.id)
        db.add(pht)
        db.commit()
        db.refresh(pht)
        

    return Nouvelle_annonce