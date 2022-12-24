from fastapi import FastAPI,Depends,status,Response,HTTPException
import models,schemas
from database import engine
from sqlalchemy.orm import Session
from typing import List
from routers import blog
from routers import user
import database
#status sert a definir le numero de code de chaque def

app=FastAPI()

models._database.Base.metadata.create_all(engine) #creation de notre tableau 

app.include_router(blog.router)
app.include_router(user.router)


#Session est necessaire pour distinguer db des autres parametres ordinaire
# def index(limit=10,publiched:bool=True,sort: Optional[str]=None)
# ca c'est pour rendre les parametre par defaut et sans a a voir les inserer
#importer ausso "from typing import optional"

#post : creer quelques chose 
# @app.post('/blog')
#def create_blog():
#Pour pouvoir entrer des données a partir d'un client disant
#On doit importer"from pydantic import BaseModel
#creer une classe qui represente la structure de l'objet dont nous voulons avoir en entrée 
#on dit que c'est model :))
#class Blog(BaseModel):
#title:str
#body:str
#published_at:Optional[bool]

