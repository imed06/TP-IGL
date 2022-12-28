from fastapi.responses import HTMLResponse
import uvicorn
from fastapi import FastAPI
from fastapi import FastAPI
from fastapi import Request
from fastapi.responses import HTMLResponse

import os
from fastapi import FastAPI
import uvicorn
import auth

app = FastAPI()

app.mount('/auth',auth.myapp)

@app.get('/')
async def root():
    return HTMLResponse('<body><a href="/auth">Auth</a></body>')

if __name__ == '__main__':
    uvicorn.run(app, port=5000)






