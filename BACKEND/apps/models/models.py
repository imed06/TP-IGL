from sqlalchemy import Column,Integer,String,ForeignKey,Boolean,TEXT,DateTime
from db.Database import Base
from sqlalchemy.orm import relationship


class Annonce(Base):
    __tablename__ = 'annonces'
    id = Column(Integer, primary_key=True,index=True)
    titre = Column(TEXT)
    categories = Column(TEXT)
    typeDuBien = Column(TEXT)
    surfaces = Column(Integer)
    description = Column(TEXT)
    prix=Column(Integer)
    localisation =Column(TEXT)
    Date = Column(DateTime)
    user_id = Column(Integer,ForeignKey('users.id'))
    creator = relationship("user",back_populates='annonces')
    images = relationship("image",back_populates='owner')

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


class image(Base):
    __tablename__ = 'images'

    id = Column(Integer, primary_key=True,index=True)
    name = Column(TEXT)
    annonce_id = Column(Integer,ForeignKey('annonces.id'))
    owner = relationship("Annonce",back_populates='images')






# class AnnonceWeb(Base):
#     __tablename__ = 'anonncesWeb'
#     id = Column(Integer, primary_key=True,index=True)
#     categories = Column(String)
#     typeDuBien = Column(String)
#     surfaces = Column(String)
#     description = Column(String)
#     prix=Column(Integer)
#     localisation =(String)
#     contactName = Column(String)
#     contactemail = Column(String)
#     contactnumeroDeTlphn =Column(Integer)
#     contactadresse = Column(String)

