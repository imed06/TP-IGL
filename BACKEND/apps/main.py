from fastapi.responses import HTMLResponse
import uvicorn
from fastapi import FastAPI
from fastapi import FastAPI
from fastapi import Request
from fastapi.responses import HTMLResponse
import os
from fastapi import FastAPI
import uvicorn
from authentication import auth
import Database,models
from routers import Annonce,user
import Schemas
from sqlalchemy.orm import Session
from fastapi import APIRouter,Depends
from Database import get_db
import scraper
import scraper2
from fastapi.middleware.cors import CORSMiddleware
app = FastAPI()
origins = [
    "http://localhost.tiangolo.com",
    "https://localhost.tiangolo.com",
    "http://localhost:3000",
    "localhost:3000",
    "http://localhost:8080",
    "http://127.0.0.1:5000",
    
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
models.Base.metadata.create_all(bind=Database.engine)

app.mount('/auth',auth.myapp)
app.include_router(Annonce.router)
app.include_router(user.router) 

@app.post('/scraping/AnnonceAlgerie')
def WebScraping(page_debut:int,page_fin:int,db : Session=Depends(get_db)):
    return scraper.WebScraping(db,page_debut,page_fin)

@app.post('/scraping/darjdida') #deuxieme
def WebScraping(respons:Schemas.infoScraping,db : Session=Depends(get_db)):
    return scraper2.WebScraping(db,respons)


@app.get('/')
async def root():
    return HTMLResponse('<body><a href="/auth">Auth</a></body>')

if __name__ == '__main__':
    uvicorn.run(app, port=5000)






