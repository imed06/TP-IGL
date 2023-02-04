from fastapi import APIRouter,Depends,status ,HTTPException, Query
from typing import List,Optional
from datetime import date,datetime
from sqlalchemy.orm import Session
from starlette.responses import JSONResponse
from typing import Union
# -----local imports --------------------------------
from db import Database
from models import models
from schemas import Schemas
from authentication import valid
get_current_user_email = valid.get_current_user_email

router = APIRouter(
    prefix='/authenticate',
    tags=['Authentication']
)

get_db=Database.get_db

# recuperer les annonces selon le numero de page

@router.post('/login',response_model = Schemas.showuser)

def login(request :Schemas.Token , db :Session = Depends(get_db)):
    email = valid.get_user_email(request.id_token)
    user=db.query(models.user).filter(models.user.email == email).first()
    if not user:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,detail="User not found")
    else:
            return user



@router.post('/singup',response_model=Schemas.Access_token,status_code=status.HTTP_201_CREATED)
async def singup(request :Schemas.Token ,db :Session = Depends(get_db)):
    email = valid.get_user_email(request.id_token)
    user=db.query(models.user).filter(models.user.email == email).first()
    if user :
        raise HTTPException(status_code=status.HTTP_409_CONFLICT)
    else :
        acces_token = valid.create_token(email)
        return Schemas.Access_token(token= acces_token)

