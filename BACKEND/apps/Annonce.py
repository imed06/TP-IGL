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


# @router.get('/',response_model=List[Schemas.showblog])

# def getAll(db :Session = Depends(get_db),current_user:Schemas.user = Depends(oauth2.get_current_user)):
#     return blog.get_all(db)


@router.post('/create',status_code=status.HTTP_201_CREATED,)
def create(request :Schemas.Annonce,db :Session = Depends(get_db)):
    new_Annonce= models.Annonce(categories=request.categories,typeDuBien=request.typeDuBien,user_id=1)
    db.add(new_Annonce)
    db.commit()
    db.refresh(new_Annonce)
    return new_Annonce

@router.get('/')
def test():
    return {'message': 'unprotected api_app endpoint'}

@router.get('/protected')
def test2(current_email: str = Depends(get_current_user_email)):
    return {'message': 'protected api_app endpoint'}
