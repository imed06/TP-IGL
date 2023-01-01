from fastapi import APIRouter,Depends
from sqlalchemy.orm import Session
import Schemas
from Database import get_db
from repository import Annonce


router =APIRouter(prefix="/Annonce",
tags=['Annonces'])

@router.post('/',response_model=Schemas.blogbase)
def CreerAnnonce(request:Schemas.blogbase,db : Session=Depends(get_db)):
    return Annonce.CreerAnnonce(request,db)