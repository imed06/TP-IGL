import requests as _requests
import bs4 as _bs4
from bs4 import ResultSet, SoupStrainer
from typing import Any, List
import Schemas,models
from sqlalchemy.orm import Session
from starlette.responses import JSONResponse


"""def WebScraping(db:Session,page_debut:int,page_fin:int):
    if(page_debut == 1):
        url ="https://darjadida.com/annonces"
        ScraperLienAnnoncePage(url,db)
        
    if(page_fin >1):
        page_actuelle = 2
        while(page_actuelle <= page_fin):
            url="https://darjadida.com/annonces?per_page=2%d"%(page_actuelle)
            ScraperLienAnnoncePage(url,db)
            page_actuelle = page_actuelle +1
    return  JSONResponse({"result": "web scraping done succuesfuly"})
    #return "web scraping done succuesfuly"      """

def WebScraping(db:Session,respons:Schemas.infoScraping):
    page_debut = respons.page_debut
    page_fin = respons.page_fin
    if(page_debut == 1):
        url ="https://darjadida.com/annonces"
        ScraperLienAnnoncePage(url,db)
        
    if(page_fin >1):
        page_actuelle = 2
        while(page_actuelle <= page_fin):
            url="https://darjadida.com/annonces?per_page=2%d"%(page_actuelle)
            ScraperLienAnnoncePage(url,db)
            page_actuelle = page_actuelle +1
    return  JSONResponse({"result": "web scraping done succuesfuly"})
    #return "web scraping done succuesfuly"         
        


def ScraperLienAnnoncePage(url:str,db:Session):
    resp =_requests.get(url)
    soup =_bs4.BeautifulSoup(resp.content,features="xml")
    liens = soup.findAll('a',class_="listing-img-container")
    for lien in liens:
        ScraperAnnonce(lien.get('href'),db)
    

def ScraperAnnonce(url :str,db:Session):
    #recupere les info du lien en question 
    #au meme temps creation de l'annonce
    resp =_requests.get(url)
    soup =_bs4.BeautifulSoup(resp.content,features="xml")

    #titre
    item = soup.find('div',class_="property-title")
    titre =item.find("h2").contents[0].string

    #localisation 
    item = soup.findAll('a',class_="listing-address popup-gmaps")
    localisation = item[0].getText().lstrip()
   
    #num de tel
    item = soup.find('ul',class_="agent-contact-details")
    num = item.find("a").getText()

    #prix
    item = soup.find('div',class_="sub-price")
    prix = item.getText()

    #description
    items = soup.findAll('p',style="text-align: justify")
    description = items[0].getText()

    items = soup.findAll('span',class_="rouge_txt")
    date = items[2].getText()

    item = soup.find('nav',id="breadcrumbs")
    Bien = item.findAll("li")[4].getText()

    #Bien = items[5].getText()
    surface = items[7].getText()

    #adresse
    item =soup.find('div',class_="agent-name")
    adresse =item.find("h4").getText()

    #type annonce
    item = soup.find('nav',id="breadcrumbs")
    annonce =item.findAll("li")[3].getText()

    nouvelleAnnonce = models.Annonce(Titre =titre,Type_bien=Bien,
    Prix =prix,Localisation =localisation,Adresse=adresse,Surface=surface,
    Description=description,Tel =num,dateInsertion =date,Type_annonce =annonce)

    db.add(nouvelleAnnonce)
    db.commit()
    db.refresh(nouvelleAnnonce)

    #sauvegarde des photos
    ListImg = ExtractionImage(soup)
    for element in ListImg:
        Photo = models.Photo(lien=element.lien,id_annonce=nouvelleAnnonce.id)
        db.add(Photo)
        db.commit()
        db.refresh(Photo)

    return nouvelleAnnonce

def ExtractionImage(soup:_bs4.BeautifulSoup)-> List[Schemas.Photo]:
    ListImg=[]
    items = soup.findAll('div',class_="col-md-12")
    it=items[1].find('div',class_="property-slider default")
    item = it.findAll("a")
    for element in item:
        img = Schemas.Photo(lien =element.get("href"))
        ListImg.append(img)

    return ListImg