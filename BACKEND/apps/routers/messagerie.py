from fastapi import APIRouter,Depends,HTTPException,status
from db import Database
from models import models
from schemas import Schemas
from sqlalchemy.orm import Session
from typing import List

router = APIRouter(
    prefix='/messagerie',
    tags=['messages']
)
get_db=Database.get_db



@router.post('/messagerie')
def send_message(message:str,user_id :int,annonce_id:int,db :Session = Depends(get_db)):
    annonce =db.query(models.Annonce).filter(models.Annonce.id == annonce_id).first() #annonce trouvée
    user =db.query(models.user).filter(models.user.id == annonce.user_id).first() #distinataire trouvé
    message = models.Message(id_expediteur= user_id,id_annonce=annonce_id,corp=message,id_destinataire=user.id)
    db.add(message)
    db.commit()
    db.refresh(message)
    return message

@router.get('/messagerie',response_model=List[Schemas.showMessage])
def Consulter_messagerie(user_id:int,db :Session = Depends(get_db)):
    messages= db.query(models.Message).filter(models.Message.id_destinataire == user_id).all() #list des messages
    return messages

