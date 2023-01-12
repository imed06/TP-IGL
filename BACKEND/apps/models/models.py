from sqlalchemy import Column,Integer,String,ForeignKey,Boolean,TEXT,DateTime
from db.Database import Base
from sqlalchemy.orm import relationship


class Annonce(Base):
    __tablename__ = 'annonces'
    id = Column(Integer, primary_key=True,index=True)
    titre = Column(TEXT)
    categories = Column(TEXT)
    typeDuBien = Column(TEXT)
    surfaces = Column(TEXT)
    description = Column(TEXT)
    prix=Column(TEXT)
    localisation =Column(TEXT)
    Date = Column(DateTime)
    nom_contact = Column(TEXT)
    adresse_contact = Column(TEXT)
    email_contact = Column(TEXT)
    tlphn_contact = Column(TEXT)
    user_id = Column(Integer,ForeignKey('users.id'))
    creator = relationship("user",back_populates='annonces')
    images = relationship("image",back_populates='owner')
    messages = relationship("Message",back_populates='annonce')

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
    messages = relationship("Message",back_populates='user')


class image(Base):
    __tablename__ = 'images'

    id = Column(Integer, primary_key=True,index=True)
    lien = Column(TEXT)
    annonce_id = Column(Integer,ForeignKey('annonces.id'))
    owner = relationship("Annonce",back_populates='images')


class Message(Base):
    __tablename__='messages'
    id = Column(Integer, primary_key=True,index=True)
    corp = Column(String)

    id_destinataire = Column(Integer)
    id_expediteur = Column(Integer,ForeignKey("users.id"))
    id_annonce = Column(Integer,ForeignKey("annonces.id"))

    annonce = relationship("Annonce",back_populates='messages')
    user = relationship("user",back_populates='messages')
