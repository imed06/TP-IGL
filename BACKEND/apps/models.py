from sqlalchemy import Column,Integer,String,ForeignKey,ARRAY
from sqlalchemy.ext.mutable import MutableList
from Database import Base
from sqlalchemy.orm import relationship
from typing import List


class Annonce(Base):
    __tablename__ = 'anonnces'
    id = Column(Integer, primary_key=True,index=True)
    Type_annonce=Column(String)
    Type_bien=Column(String)
    Surface=Column(String)
    Description=Column(String)
    Prix=Column(String)
    Nom=Column(String)
    Prenom=Column(String)
    Adresse=Column(String)
    Email =Column(String)
    Tel=Column(String)
    Localisation=Column(String)
    #Photo =Column(MutableList.as_mutable(ARRAY(String)))
    Photo =Column(String)
    user_id = Column(Integer,ForeignKey('users.id'))
    creator = relationship("user",back_populates='annonces')

class user(Base):
    __tablename__ = 'users'

    id = Column(Integer, primary_key=True,index=True)
    name = Column(String,index=True)
    email = Column(String)
    password = Column(String)
    annonces = relationship("Annonce",back_populates='creator')
