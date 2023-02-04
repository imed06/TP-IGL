from pydantic import BaseModel
from typing import List, Optional
from datetime import datetime

class Photo(BaseModel):
    lien:str
    class Config(): 
        orm_mode=True


class createuser(BaseModel):
    # id:int
    name:str
    email:str
    numeroDeTelephone:str
    token:str
    adresse :str
    class Config():
        orm_mode=True




class annoncebase(BaseModel):
    #id:int
    titre:str
    categories :str
    typeDuBien :str
    surfaces :str
    description :str
    prix : str
    localisation :str
    # Date :datetime
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
    surfaces :str
    description :str
    prix : str
    localisation :str
    Date :datetime
    creator : Optional[createuser] = ...
    nom_contact : Optional[str] = ...
    adresse_contact : Optional[str] = ...
    email_contact : Optional[str] = ...
    tlphn_contact : Optional[str] = ...
    images : List[Photo]=[]
    class Config(): 
        orm_mode=True

class showAnnonceWithoutUser(BaseModel):
    id:int
    titre:str
    categories :str
    typeDuBien :str
    surfaces :str
    description :str
    prix : str
    localisation :str
    Date :datetime
    # creator : createuser
    images : List[Photo]=[]
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
    UserType : bool
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
    id_token: str

class Access_token(BaseModel):
    token: str


class TokenData(BaseModel):
    email: Optional[str] = None


class userforMessage(BaseModel):
    name:str
    email:str
    numeroDeTelephone:str
    class Config():
        orm_mode=True

class AnnonceforMessage(BaseModel):
    titre:str
    class Config():
        orm_mode=True

class showMessage(BaseModel):
    corp:str
    annonce:AnnonceforMessage
    user:userforMessage
    class Config():
        orm_mode=True