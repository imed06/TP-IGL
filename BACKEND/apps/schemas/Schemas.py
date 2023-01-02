from pydantic import BaseModel
from typing import List, Optional
from datetime import datetime

class image(BaseModel):
    id:int
    name:str
    class Config():
        orm_mode=True


class createuser(BaseModel):
    # id:int
    name:str
    email:str
    numeroDeTelephone:str
    #token:str
    adresse :str
    class Config():
        orm_mode=True




class annoncebase(BaseModel):
    #id:int
    titre:str
    categories :str
    typeDuBien :str
    surfaces :int
    description :str
    prix : int
    localisation :str
    Date :datetime
    # creator : createuser
    # images : List[image]=[]

class Annonce(annoncebase):
    class Config(): 
        orm_mode=True

class showannonce(BaseModel):
    id:int
    titre:str
    categories :str
    typeDuBien :str
    surfaces :int
    description :str
    prix : int
    localisation :str
    Date :datetime
    creator : createuser
    images : List[image]=[]
    class Config(): 
        orm_mode=True

class showAnnonceWithoutUser(BaseModel):
    id:int
    titre:str
    categories :str
    typeDuBien :str
    surfaces :int
    description :str
    prix : int
    localisation :str
    Date :datetime
    # creator : createuser
    images : List[image]=[]
    class Config(): 
        orm_mode=True

class user(BaseModel):
    name:str
    email:str
    numeroDeTlphn:str
    token:str



class showuser(BaseModel):
    id:int
    name:str
    email:str
    numeroDeTelephone:str
    token:str
    adresse :str
    annonces : List[showAnnonceWithoutUser]=[]
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