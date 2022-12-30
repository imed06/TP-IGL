from fastapi import APIRouter,Depends,HTTPException,status,Response
from static import Schemas,Database,models
from sqlalchemy.orm import Session
from typing import List
from authentication.jwt1 import get_current_user_email


router = APIRouter(
    prefix='/Annonce',
    tags=['Annonces']
)

get_db=Database.get_db






@router.get('/')
def test():
    return {'message': 'unprotected api_app endpoint'}

@router.get('/protected')
def test2(current_email: str = Depends(get_current_user_email)):
    return {'message': 'protected api_app endpoint'}
