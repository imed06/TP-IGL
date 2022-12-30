from pydantic import BaseModel
from typing import List, Optional
from datetime import datetime

class blogbase(BaseModel):
    categories :str
    typeDuBien :str
    Date :datetime

class Annonce(blogbase):
    class Config(): 
        orm_mode=True



class user(BaseModel):
    name:str
    email:str
    numeroDeTlphn:str
    token:str

class createuser(BaseModel):
    name:str
    email:str
    numeroDeTelephone:str
    token:str
    adresse :str
    class Config():
        orm_mode=True

class showuser(BaseModel):
    name:str
    email:str
    numeroDeTelephone:str
    token:str
    adresse :str
    annonces : List[Annonce]=[]
    class Config():
        orm_mode=True

class showblog(BaseModel):
    categories :str
    typeDuBien :str
    #creator:showuser
    class Config():
        orm_mode=True

class Login(BaseModel):
    username:str
    password:str

class Token(BaseModel):
    access_token: str
    token_type: str


class TokenData(BaseModel):
    email: Optional[str] = None