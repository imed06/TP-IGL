from fastapi import APIRouter,Depends,HTTPException,status
from sqlalchemy.orm import Session
import Schemas,models
from Database import get_db
from repository import user
from typing import List

router =APIRouter(prefix="/User",
tags=['Users'])


@router.post('/', response_model=Schemas.showuser)
def create(request:Schemas.createuser,db :Session = Depends( get_db)):
    return user.create(request,db)

@router.get('/{id}',response_model=Schemas.showuser)
def get_user(id:int,db :Session = Depends(get_db)):
    return user.get_user(id,db)

@router.delete('/{id}')
def delete_user(id:int,db :Session = Depends(get_db)):
    return user.delete_user(id,db)

@router.post('/messagerie')
def send_message(message:str,user_id :int,annonce_id:int,db :Session = Depends(get_db)):
    return user.send_message(message,user_id,annonce_id,db)

@router.get('/messagerie',response_model=List[Schemas.showMessage])
def Consulter_messagerie(user_id:int,db :Session = Depends(get_db)):
    return user.Consulter_messagerie(user_id,db)