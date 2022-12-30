import os
from datetime import datetime
from datetime import timedelta
import jwt
from fastapi import Depends
from fastapi import HTTPException
from fastapi import status
from fastapi.security import OAuth2PasswordBearer
from static import Database,models
from sqlalchemy.orm import Session

# Create a fake db:
FAKE_DB = {
'ka_hamza@esi.dz': {'name': 'Hamza Abdo'}
}
get_db=Database.get_db


# Helper to read numbers using var envs
def cast_to_number(id):
    temp = os.environ.get(id)
    if temp is not None:
        try:
            return float(temp)
        except ValueError:
            return None
    return None



# Configuration
API_SECRET_KEY = os.environ.get('API_SECRET_KEY') or "09d25e094faa6ca2556c818166b7a9563b93f7099f6f0f4caa6cf63b88e8d3e7"
if API_SECRET_KEY is None:
    raise BaseException('Missing API_SECRET_KEY env var.')
API_ALGORITHM = os.environ.get('API_ALGORITHM') or 'HS256'
API_ACCESS_TOKEN_EXPIRE_MINUTES =  9000

# Token url (We should later create a token url that accepts just a user and a password to use it with Swagger)
oauth2_scheme = OAuth2PasswordBearer(tokenUrl='/auth/token')

# Error
CREDENTIALS_EXCEPTION = HTTPException(
    status_code=status.HTTP_401_UNAUTHORIZED,
    detail='Could not validate credentials',
    headers={'WWW-Authenticate': 'Bearer'},
)


# Create token internal function
def create_access_token(*, data: dict, expires_delta: timedelta = None):
    print(dir(jwt))
    to_encode = data.copy()
    if expires_delta:
        expire = datetime.utcnow() + expires_delta
    else:
        expire = datetime.utcnow() + timedelta(minutes=9000)
    to_encode.update({'exp': expire})
    encoded_jwt = jwt.encode(to_encode, API_SECRET_KEY, algorithm=API_ALGORITHM)
    return encoded_jwt


# Create token for an email
def create_token(email):
    access_token_expires = timedelta(minutes=API_ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_access_token(data={'sub': email}, expires_delta=access_token_expires)
    return access_token


def valid_email_from_db(email):
    return email in FAKE_DB


async def get_current_user_email(token: str = Depends(oauth2_scheme),db :Session = Depends( get_db)):
    try:
        payload = jwt.decode(token, API_SECRET_KEY, algorithms=[API_ALGORITHM])
        email: str = payload.get('sub')
        if email is None:
            print('first test failed')
            raise CREDENTIALS_EXCEPTION
    except jwt.PyJWTError:
        print('second test failed')
        raise CREDENTIALS_EXCEPTION
    print('testing db acces')
    new_user=db.query(models.user).filter(models.user.email ==email ).first()
    if new_user:
        return email
    print('third test failed')
    raise CREDENTIALS_EXCEPTION