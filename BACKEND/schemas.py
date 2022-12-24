from pydantic import BaseModel
from typing import List

#Pour la création de classe a utliser dans main 
class BlogBase(BaseModel): #Ca c'est un model(pr qlq chose en entrée)
    title:str
    body:str

class Blog(BlogBase):
    class Config(): #Donne la permission pour qu'elle soit utlisé ailleur dans d'autres classes
        orm_mode =True

class User(BaseModel):
    email:str
    name:str
    tel:str

class ShowUser(BaseModel):
    email:str
    name:str
    #blogs:List #list des blogs 
    class Config():
        orm_mode =True

class ShowBlog(BaseModel):
    title:str
    creator: ShowUser
    class Config():
        orm_mode =True