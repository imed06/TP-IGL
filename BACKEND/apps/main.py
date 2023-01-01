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
app = FastAPI()

models.Base.metadata.create_all(bind=Database.engine)

app.mount('/auth',auth.myapp)
app.include_router(Annonce.router)
app.include_router(user.router) 

@app.post('/Annonces')
def WebScraping(db : Session=Depends(get_db)):
    return scraper.WebScraping(db)


@app.get('/')
async def root():
    return HTMLResponse('<body><a href="/auth">Auth</a></body>')

if __name__ == '__main__':
    uvicorn.run(app, port=5000)






