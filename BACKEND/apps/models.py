from sqlalchemy import Column,Integer,String,ForeignKey
from Database import Base
from sqlalchemy.orm import relationship


class Annonce(Base):
    __tablename__ = 'anonnces'
    id = Column(Integer, primary_key=True,index=True)
    title = Column(String)
    body = Column(String)
    user_id = Column(Integer,ForeignKey('users.id'))
    creator = relationship("user",back_populates='annonces')

class user(Base):
    __tablename__ = 'users'

    id = Column(Integer, primary_key=True,index=True)
    name = Column(String,index=True)
    email = Column(String)
    password = Column(String)
    annonces = relationship("Annonce",back_populates='creator')
