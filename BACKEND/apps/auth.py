import uvicorn
from fastapi import FastAPI
from fastapi import Request
from fastapi.responses import HTMLResponse
from ast import Param
import os

from authlib.integrations.starlette_client import OAuth
from authlib.integrations.starlette_client import OAuthError
from fastapi import FastAPI
from fastapi import HTTPException
from fastapi import Request
from fastapi import status
from starlette.config import Config
from starlette.middleware.sessions import SessionMiddleware
from starlette.responses import JSONResponse

from starlette.responses import HTMLResponse, RedirectResponse


import jwt


myapp = FastAPI()


create_token=jwt.create_token
valid_email_from_db= jwt.valid_email_from_db
CREDENTIALS_EXCEPTION=jwt.CREDENTIALS_EXCEPTION


# OAuth settings
GOOGLE_CLIENT_ID = os.environ.get('GOOGLE_CLIENT_ID') or None
GOOGLE_CLIENT_SECRET = os.environ.get('GOOGLE_CLIENT_SECRET') or None
if GOOGLE_CLIENT_ID is None or GOOGLE_CLIENT_SECRET is None:
    raise BaseException('Missing env variables')

# Set up OAuth
config_data = {'GOOGLE_CLIENT_ID': GOOGLE_CLIENT_ID, 'GOOGLE_CLIENT_SECRET': GOOGLE_CLIENT_SECRET}
starlette_config = Config(environ=config_data)
oauth = OAuth(starlette_config)
oauth.register(
    name='google',
    server_metadata_url='https://accounts.google.com/.well-known/openid-configuration',
    client_kwargs={'scope': 'openid email profile'},
)

# Set up the middleware to read the request session
SECRET_KEY = os.environ.get('SECRET_KEY') or None
if SECRET_KEY is None:
    raise 'Missing SECRET_KEY'
myapp.add_middleware(SessionMiddleware, secret_key=SECRET_KEY)

# Frontend URL:
FRONTEND_URL = os.environ.get('FRONTEND_URL') or 'http://127.0.0.1:5000/auth/callback'



#--------------------------------------------------------------------------------------------------------------------------------

@myapp.get('/login')
async def login(request: Request):
    redirect_uri = FRONTEND_URL  # This creates the url for our /auth endpoint
    return await oauth.google.authorize_redirect(request, redirect_uri)



@myapp.get('/callback')
async def callback(request: Request):
    print(request)
    try:
        print(request)
        token = await oauth.google.authorize_access_token(request)
    except OAuthError as error:
        return HTMLResponse(f'<h1> here is the error {error.error}</h1>')
    user = token.get('userinfo')
    if user:
        request.session['user'] = dict(user)
    if valid_email_from_db(user.email):
        #return RedirectResponse(url='/logout')
        return 'this is  a valid email address'
    return 'this is not a valid email address'
    # return RedirectResponse(url='/logout')




@myapp.get('/')
async def root():
    return HTMLResponse('<body><a href="/auth/login">Log In</a></body>')

@myapp.get('/logout')
async def root():
    return HTMLResponse('<body><a href="/auth">Log out</a></body>')










