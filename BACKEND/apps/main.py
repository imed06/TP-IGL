import uvicorn
from fastapi import FastAPI
from fastapi.responses import HTMLResponse

from fastapi import Request
from fastapi import FastAPI
import uvicorn
from authentication import auth
from db import Database
from models import models
from routers import annonce,user
app = FastAPI()

models.Base.metadata.create_all(bind=Database.engine)

app.mount('/auth',auth.myapp)
app.include_router(annonce.router)
app.include_router(user.router)

@app.get('/')
async def root():
    return HTMLResponse('<body><a href="/auth">Auth</a></body>')



if __name__ == '__main__':
    uvicorn.run(app, port=5000)
