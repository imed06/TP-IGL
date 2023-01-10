from fastapi import HTTPException,status
import Schemas,models
from sqlalchemy.orm import Session

def create(request:Schemas.createuser,db :Session):
    new_user = models.user(name=request.name,email=request.email,numeroDeTelephone = request.numeroDeTelephone,adresse=request.adresse,token=request.token)
    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    return new_user

def get_user(id:int,db :Session):
    user=db.query(models.user).filter(models.user.id == id).first()
    if not user: 
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,detail=f'user with id {id} not found')
    return user

def delete_user(id:int,db :Session):
    user=db.query(models.user).filter(models.user.id == id).delete()
    db.commit()
    return 'user deleted'

def send_message(message:str,user_id :int,annonce_id:int,db :Session):
    annonce =db.query(models.Annonce).filter(models.Annonce.id == annonce_id).first() #annonce trouvée
    user =db.query(models.user).filter(models.user.id == annonce.user_id).first() #distinataire trouvé
    message = models.Message(id_expediteur= user_id,id_annonce=annonce_id,corp=message,
    id_distinataire=user.id)
    db.add(message)
    db.commit()
    db.refresh(message)
    return "message envoyé avec succès"

def Consulter_messagerie(user_id:int,db :Session):
    messages= db.query(models.Message).filter(models.Message.id_distinataire == user_id).all() #list des messages
    return messages