from pydantic import BaseModel
from typing import List, Optional

class blogbase(BaseModel):
    categories :str
    typeDuBien :str

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