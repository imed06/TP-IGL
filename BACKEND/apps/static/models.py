from sqlalchemy import Column,Integer,String,ForeignKey,Boolean,TEXT
from .Database import Base
from sqlalchemy.orm import relationship


class Annonce(Base):
    __tablename__ = 'anonnces'
    id = Column(Integer, primary_key=True,index=True)
    categories = Column(TEXT)
    typeDuBien = Column(TEXT)
    surfaces = Column(TEXT)
    description = Column(TEXT)
    prix=Column(Integer)
    localisation =(TEXT)
    user_id = Column(Integer,ForeignKey('users.id'))
    creator = relationship("user",back_populates='annonces')

class user(Base):
    __tablename__ = 'users'

    id = Column(Integer, primary_key=True,index=True)
    UserType = Column(Boolean,default=False)
    name = Column(TEXT,index=True)
    email = Column(TEXT)
    numeroDeTelephone = Column(Integer)
    adresse = Column(TEXT)
    password = Column(TEXT)
    annonces = relationship("Annonce",back_populates='creator')


# class AnnonceWeb(Base):
#     __tablename__ = 'anonncesWeb'
#     id = Column(Integer, primary_key=True,index=True)
#     categories = Column(String)
#     typeDuBien = Column(String)
#     surfaces = Column(String)
#     description = Column(String)
#     prix=Column(Integer)
#     localisation =(String)
#     contactInfo = Column(String)
#     contact_id = Column(Integer,ForeignKey('contacts.id'))
#     creator = relationship("Contact",back_populates='annoncesWeb')


# class Contact(Base):
#     __tablename__ = 'contacts'
#     id = Column(Integer, primary_key=True,index=True)
#     Name = Column(String)
#     email = Column(String)
#     numeroDeTlphn = Column(Integer)
#     adresse = Column(String)
#     annoncesWeb = relationship("AnnonceWeb",back_populates='creator')

