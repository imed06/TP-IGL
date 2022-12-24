import datetime as _dt
import sqlalchemy as _sql
import database as _database
from sqlalchemy.orm import relationship


#Base c'est la class general de type base de données 
#Ses classes sont des class filles de Base
#Pour creation des elements de la base de données  

class Annonce(_database.Base):
    __tablename__="annonces"
    id=_sql.Column(_sql.Integer,primary_key=True,index=True)

class User(_database.Base):
    __tablename__ = "users"
    id = _sql.Column(_sql.Integer,primary_key=True,index=True)
    email = _sql.Column(_sql.String,unique=True,index=True)
    name = _sql.Column(_sql.String)
    tel = _sql.Column(_sql.String)
    blogs = relationship("Blog",back_populates="creator")


class Blog(_database.Base):
    __tablename__="blogs"
    id = _sql.Column(_sql.Integer,primary_key=True,index=True)
    title=_sql.Column(_sql.String)
    user_id = _sql.Column(_sql.Integer,_sql.ForeignKey('users.id'))
    creator = relationship("User",back_populates="blogs")

    







