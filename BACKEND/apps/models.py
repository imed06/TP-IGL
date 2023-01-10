
from sqlalchemy import Column,Integer,String,ForeignKey,Boolean,TEXT,DateTime
from sqlalchemy.ext.mutable import MutableList
from Database import Base
from sqlalchemy.orm import relationship
from typing import List


class Annonce(Base):
    __tablename__ = 'annonces'
    id = Column(Integer, primary_key=True,index=True)
    Titre =Column(String)
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
    dateInsertion=Column(String)
    user_id = Column(Integer,ForeignKey('users.id'))
    creator = relationship("user",back_populates='annonces')

    message = relationship("Message",back_populates='annonce')
    photo = relationship("Photo")

class user(Base):
    __tablename__ = 'users'

    id = Column(Integer, primary_key=True,index=True)
    UserType = Column(Boolean,default=False)
    token = Column(TEXT)
    name = Column(TEXT,index=True)
    email = Column(TEXT)
    numeroDeTelephone = Column(Integer)
    adresse = Column(TEXT)

    annonces = relationship("Annonce",back_populates='creator')

    message = relationship("Message",back_populates='user')
    


class Message(Base):
    __tablename__='messages'
    id = Column(Integer, primary_key=True,index=True)
    corp = Column(String)

    id_distinataire = Column(Integer)
    id_expediteur = Column(Integer,ForeignKey("users.id"))
    id_annonce = Column(Integer,ForeignKey("annonces.id"))

    annonce = relationship("Annonce",back_populates='message')
    user = relationship("user",back_populates='message')

class Photo(Base):
    __tablename__='photos'
    id = Column(Integer, primary_key=True,index=True)
    lien = Column(String)

    id_annonce = Column(Integer,ForeignKey("annonces.id"))
