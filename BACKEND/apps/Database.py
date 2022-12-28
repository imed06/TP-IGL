from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

SQLALCHEMY_DATABASE_URL = "sqlite:///./bdd.db"
#SQLALCHEMY_DATABASE_URL = 'mysql+pymysql://root@localhost:3306/TPIGL'


#SQLALCHEMY_DATABASE_URL = "mysql://root:14171417@mysql/TPIGL"
#SQLALCHEMY_DATABASE_URL = "mysql+pymysql://root:14171417@localhost/TPIGL"




engine = create_engine(SQLALCHEMY_DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()

def get_db():
    db=SessionLocal()
    try:
        yield db
    finally:
        db.close()
