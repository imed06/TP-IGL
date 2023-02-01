import requests as _requests
import bs4 as _bs4
from bs4 import ResultSet, SoupStrainer
from typing import Any, List
import Schemas,models
from sqlalchemy.orm import Session


def WebScraping(db:Session,respons:Schemas.infoScraping):
    page_debut: respons.page_debut
    page_fin: respons.page_fin
    if(page_debut == 1):
        url ="http://www.annonce-algerie.com/annoncesimmobilier.asp"
        ScraperLienAnnoncePage(url,db)
    if(page_fin>1):
        page_actuelle =2
        while(page_actuelle <= page_fin):
            url = ("http://www.annonce-algerie.com/AnnoncesImmobilier.asp?rech_cod_cat=1&rech_cod_"
            "rub=&rech_cod_typ=&rech_cod_sou_typ=&rech_cod_pay=DZ&rech_cod_reg=&rech_cod_vil=&rech_cod"
            "_loc=&rech_prix_min=&rech_prix_max=&rech_surf_min=&rech_surf_max=&rech_age=&rech_photo=&rech_typ_cli=&rech_order"
            "_by=31&rech_page_num=%d")%(page_actuelle)
            ScraperLienAnnoncePage(url,db)
            page_actuelle=page_actuelle+1

    return "webScrapping donne succesfuly"


def ScraperLienAnnoncePage(url:str,db:Session):
    only_a_tags = SoupStrainer(attrs={"class" : "Tableau1"})
    page = _requests.get(url)
    soup = _bs4.BeautifulSoup(page.content,"html.parser",parse_only=only_a_tags)
    for link in soup.find_all('a'):
        info = link.get('href')
        if info[0]=="D":
            NewUrl="http://www.annonce-algerie.com/"+info
            ExtractionInfo(NewUrl,db)


"""def WebScraping(db:Session,page_debut:int,page_fin:int):
    Page_Max =2
    num_Page=1
    while num_Page <= Page_Max:
        only_a_tags = SoupStrainer(attrs={"class" : "Tableau1"})
        url = "http://www.annonce-algerie.com/annoncesimmobilier.asp"
        UrlNext=("http://www.annonce-algerie.com/AnnoncesImmobilier.asp?rech_cod_cat=1&rech_cod_"
       "rub=&rech_cod_typ=&rech_cod_sou_typ=&rech_cod_pay=DZ&rech_cod_reg=&rech_cod_vil=&rech_cod"
       "_loc=&rech_prix_min=&rech_prix_max=&rech_surf_min=&rech_surf_max=&rech_age=&rech_photo=&rech_typ_cli=&rech_order"
       "_by=31&rech_page_num=%d")%(num_Page)
        if(num_Page==1):
            page = _requests.get(url)
        else:
            page = _requests.get(UrlNext)
        soup = _bs4.BeautifulSoup(page.content,"html.parser",parse_only=only_a_tags)
        for link in soup.find_all('a'):
            info = link.get('href')
            if info[0]=="D":
                NewUrl="http://www.annonce-algerie.com/"+info
            
                ExtractionInfo(NewUrl,db)
        num_Page=num_Page+1
    return "webScrapping donne succesfuly"  """

def ExtractionInfo(url:str,db:Session):
    listElement =[]
    page = _requests.get(url)
    soup = _bs4.BeautifulSoup(page.content,features="xml")
    
    items = soup.findAll('table',class_="da_rub_cadre")
    item = items[1] #celle dont j'en ai besoin
    ite = item.findAll('td',class_="da_field_text")
    contact =soup.findAll('span',class_="da_contact_value") #num de contact
    if len(ite) == 8: #si contient tt les elements 
        for it in ite:
            listElement.append(it.getText())  # adresse, type annonce, bien .....
        
        contact =soup.findAll('span',class_="da_contact_value") 
        ContactText=contact[0].getText() # num de tel
        ListImg =ExtractionImage(soup)  #les images 
        titre = ExtractionTitre(soup)  # titre de l'annonce
    
        for element in listElement[4].split(">"):
            if "Dinar Algèrien" in element:
                prix = element.split("  ")[0]
                listElement[4]= prix     # prix 
    
        CreerAnnonce(listElement,ListImg,ContactText,titre,db)
    

def CreerAnnonce(list:List[str],ListImg:List[Schemas.Photo],ContactText:str,titre:str,db:Session):    
    tpAnnonce= list[0].split(">")[0]+">"+ list[0].split(">")[1]
    tpBien = list[0].split(">")[2]

    New_Annonce =Schemas.Annonce(Titre=titre,Type_bien=tpBien,Type_annonce=tpAnnonce,Surface=list[3],Description=list[5],
    Prix=list[4],Nom="",Prenom="",Adresse=list[2],Email="",Tel=ContactText,photo=ListImg,Localisation=list[1],dateInsertion=list[6])

    Nouvelle_Annonce = models.Annonce(Titre= New_Annonce.Titre,Type_bien=New_Annonce.Type_bien,Type_annonce=New_Annonce.Type_annonce,
    Localisation=New_Annonce.Localisation,Adresse=New_Annonce.Adresse,Surface=New_Annonce.Surface,
    Prix=New_Annonce.Prix,Description=New_Annonce.Description,Tel =New_Annonce.Tel,dateInsertion=New_Annonce.dateInsertion) 
    
    #sauvegarde de l'annonce dans la bdd 
    db.add(Nouvelle_Annonce)
    db.commit()
    db.refresh(Nouvelle_Annonce)

    #sauvegarde des photos dans la bdd on spécifiant l'id de son annonce approprié 
    for element in ListImg:
        New_Photo = models.Photo(lien = element.lien,id_annonce = Nouvelle_Annonce.id)
        db.add(New_Photo)
        db.commit()
        db.refresh(New_Photo)


def ExtractionImage(soup:_bs4.BeautifulSoup) -> List[Schemas.Photo]:
    images = soup.findAll('div',id="all_photos")
    ListImg=[]
 
    if(len(images)==1):#donc les images exist
        images2 =images[0].findAll('a')
        for sr in images2:
            img = Schemas.Photo(lien=sr.img.get('src'))
            ListImg.append(img)
    return ListImg

def ExtractionTitre(soup:_bs4.BeautifulSoup):
    infos = soup.findAll('tr',class_="da_entete")
    info = infos[0]
    titre = info.getText()
    list = titre.split(" ")
    list.pop(0)
    nvTitre = " ".join(list)
    return nvTitre # fini 