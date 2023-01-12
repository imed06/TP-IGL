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
from supertokens_python import get_all_cors_headers
from starlette.middleware.cors import CORSMiddleware
from supertokens_python.framework.fastapi import get_middleware
from authentication.valid import get_current_user_email


app = FastAPI()
models.Base.metadata.create_all(bind=Database.engine)

# app.mount('/auth',auth.myapp)
app.include_router(annonce.router)
app.include_router(user.router)
app.include_router(authenticate.router)
app.include_router(messagerie.router)
@app.get('/')
async def root():
    return HTMLResponse('<body><a href="/auth">Auth</a></body>')

@app.post('/Annonces')
def WebScraping(db : Session=Depends(Database.get_db)):
    return scraper.WebScraping(db)

@app.post('/protected')
def test(current_email: str = Depends(get_current_user_email)):
    return 'welcome to protected web'



if __name__ == '__main__':
    uvicorn.run(app, port=5000)
