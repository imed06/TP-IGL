from pydantic import BaseModel
from typing import List, Optional

class blogbase(BaseModel): #Annonce
    Type_annonce:str
    Type_bien:str
    Surface:str
    Description:str
    Prix:str
    Nom:str
    Prenom:str
    Adresse:str
    Email:str
    Tel:str
    Localiastion:str
    Photo:str

class Annonce(blogbase):
    class Config(): 
        orm_mode=True



class user(BaseModel):
    name:str
    email:str
    password:str

class showuser(BaseModel):
    name:str
    email:str
    blogs:List[Annonce]=[]
    class Config():
        orm_mode=True

class showblog(BaseModel):
    title :str
    body  :str
    creator:showuser
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