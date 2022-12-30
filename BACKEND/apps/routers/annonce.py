from fastapi import APIRouter,Depends,HTTPException,status,Response
from static import Database, models
from static import Schemas
from sqlalchemy.orm import Session
from typing import List
from authentication.jwt1 import get_current_user_email



router = APIRouter(
    prefix='/annonce',
    tags=['Annonces']
)

get_db=Database.get_db


@router.get('/',response_model=List[Schemas.showblog])

def getAll(db :Session = Depends(get_db),current_email: str = Depends(get_current_user_email)):
    Annonces=db.query(models.Annonce).all()
    return Annonces


@router.post('/',status_code=status.HTTP_201_CREATED)
def create(request :Schemas.Annonce,db :Session = Depends(get_db),userid:int=None):
    new_annonce= models.Annonce(categories=request.categories,typeDuBien=request.typeDuBien,user_id=userid,Date = request.Date)
    db.add(new_annonce)
    db.commit()
    db.refresh(new_annonce)
    return new_annonce

