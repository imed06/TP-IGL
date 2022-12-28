from fastapi import APIRouter,Depends,HTTPException,status,Response

from static import Database, models
from static import Schemas
from sqlalchemy.orm import Session
from typing import List

router = APIRouter(
    prefix='/user',
    tags=['Users']
)
get_db=Database.get_db

@router.post('/', response_model=Schemas.showuser)
def create(request:Schemas.user,db :Session = Depends( get_db)):
    new_user = models.user(name=request.name,email=request.email)
    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    return new_user

@router.get('/{id}',response_model=Schemas.showuser)
def get_user(id:int,db :Session = Depends(get_db)):
    user=db.query(models.user).filter(models.user.id == id).first()
    if not user: 
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,detail=f'user with id {id} not found')
    return user