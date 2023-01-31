import uvicorn
from fastapi import FastAPI,Depends
from fastapi.responses import HTMLResponse

from fastapi import Request
from fastapi import FastAPI
import uvicorn
from authentication import auth
from db import Database
from models import models
from routers import annonce,user,authenticate,messagerie
from routers import webScraping as scraper

from sqlalchemy.orm import Session
from starlette.middleware.cors import CORSMiddleware
from authentication.valid import get_current_user_email
from fastapi.middleware.cors import CORSMiddleware



app = FastAPI()

origins = [
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

models.Base.metadata.create_all(bind=Database.engine)


app.include_router(annonce.router)
app.include_router(user.router)
app.include_router(authenticate.router)
app.include_router(messagerie.router)


@app.post('/Annonces')
def WebScraping(db : Session=Depends(Database.get_db)):
    return scraper.WebScraping(db)

@app.post('/protected')
def test(current_email: str = Depends(get_current_user_email)):
    return 'welcome to protected web'



if __name__ == '__main__':
    uvicorn.run(app, port=5000)
