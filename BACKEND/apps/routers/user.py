from fastapi import APIRouter,Depends,HTTPException,status
from db import Database
from models import models
from schemas import Schemas
from sqlalchemy.orm import Session
from typing import List
from starlette.responses import JSONResponse

router = APIRouter(
    prefix='/user',
    tags=['Users']
)
get_db=Database.get_db


# methode post pour creer un utilisateur

@router.post('/', response_model=Schemas.showuser)
def create(request:Schemas.createuser,db :Session = Depends( get_db)):
    user=db.query(models.user).filter(models.user.email == request.email).first()
    if user : raise HTTPException(status_code=status.HTTP_302_FOUND)
    new_user = models.user(name=request.name,email=request.email,numeroDeTelephone = request.numeroDeTelephone,adresse=request.adresse,token = request.token)
    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    return new_user

# methode get pour recuperer la liste de tous les utilisateurs

@router.get('/users',response_model=List[Schemas.showuser])
def get_user(db :Session = Depends(get_db)):
    user=db.query(models.user).all()
    if not user: 
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,detail=f'no users found')
    return user

# methode get pour recuperer un user selon l'id

@router.get('/{id}',response_model=Schemas.showuser)
def get_user(id:int,db :Session = Depends(get_db)):
    user=db.query(models.user).filter(models.user.id == id).first()
    if not user: 
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,detail=f'user with id {id} not found')
    return user

# methode delete pour supprimer un user selon l'id

@router.delete('/{id}')
def delete_user(id:int,db :Session = Depends(get_db)):
    user=db.query(models.user).filter(models.user.id == id).delete()
    db.commit()
    return JSONResponse({"result": True})