from fastapi import Depends,HTTPException,status
from fastapi.security import OAuth2PasswordBearer
from db import Database
from sqlalchemy.orm import Session
from google.oauth2 import id_token
from google.auth.transport import requests



get_db=Database.get_db

# Token url (We should later create a token url that accepts just a user and a password to use it with Swagger)
oauth2_scheme = OAuth2PasswordBearer(tokenUrl='/auth/token')

# Error
CREDENTIALS_EXCEPTION = HTTPException(
    status_code=status.HTTP_401_UNAUTHORIZED,
    detail='Could not validate credentials',
    headers={'WWW-Authenticate': 'Bearer'},
)


GOOGLE_CLIENT_SECRET='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'
CLIENT_ID='947244733594-bitcc5abv7f4d8gfbrr50bujjc19q16t.apps.googleusercontent.com'


async def get_current_user_email(token: str = Depends(oauth2_scheme),db :Session = Depends( get_db)):

    try:
        idinfo = id_token.verify_oauth2_token(token,requests.Request(), CLIENT_ID)
        return idinfo['email']
    except ValueError:
        raise CREDENTIALS_EXCEPTION



