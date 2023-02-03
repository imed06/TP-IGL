from fastapi import APIRouter,Depends,HTTPException,status
from sqlalchemy.orm import Session
import Schemas,models
from Database import get_db
from repository import user
from typing import List

router =APIRouter(prefix="/User",
tags=['Users'])

"""
@router.post('/', response_model=Schemas.showuser)
def create(request:Schemas.createuser,db :Session = Depends( get_db)):
    return user.create(request,db) """


@router.post('/', response_model=Schemas.showuser)
def create(request:Schemas.createuser,db :Session = Depends( get_db)):
    new_user = models.user(name=request.name,email=request.email,numeroDeTelephone = request.numeroDeTelephone,adresse=request.adresse,token = request.token)
    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    return new_user
"""
@router.get('/{id}',response_model=Schemas.showuser)
def get_user(id:int,db :Session = Depends(get_db)):
    return user.get_user(id,db)
"""
@router.get('/{id}',response_model=Schemas.showuser,status_code=status.HTTP_404_NOT_FOUND)
def get_user(id:int,db :Session = Depends(get_db)):
    user=db.query(models.user).filter(models.user.id == id).first()
    if not user: 
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,detail=f'user with id {id} not found')
    return user


@router.delete('/{id}')
def delete_user(id:int,db :Session = Depends(get_db)):
    return user.delete_user(id,db)

@router.post('/messagerie')
def send_message(message:str,user_id :int,annonce_id:int,db :Session = Depends(get_db)):
    return user.send_message(message,user_id,annonce_id,db)

@router.get('/messagerie',response_model=List[Schemas.showMessage])
def Consulter_messagerie(user_id:int,db :Session = Depends(get_db)):
    return user.Consulter_messagerie(user_id,db)