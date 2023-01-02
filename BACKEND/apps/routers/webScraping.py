# import requests as _requests
# import bs4 as _bs4
# from bs4 import ResultSet, SoupStrainer
# from typing import Any, List
# from static import Schemas,models
# from sqlalchemy.orm import Session

# def WebScraping(db:Session):
#     Page_Max =5
#     num_Page=1
#     while num_Page <= Page_Max:

#         only_a_tags = SoupStrainer(attrs={"class" : "Tableau1"})
#         url = "http://www.annonce-algerie.com/annoncesimmobilier.asp"
    
#         UrlNext=("http://www.annonce-algerie.com/AnnoncesImmobilier.asp?rech_cod"
#         "_cat=1&rech_cod_rub=&rech_cod_typ=&rech_cod_sou_typ=&rech_cod_pay=DZ&rech_cod_reg=50104&rech_"
#         "cod_vil=&rech_cod_loc=&rech_prix_min=&rech_prix_max=&rech_surf_min=&rech_surf_max=&rech_age=&rech_"
#         "photo=&rech_typ_cli=&rech_order_by=31&rech_page_num=%d")%(num_Page)

#         if(num_Page==1):
#             page = _requests.get(url)
#         else:
#             page = _requests.get(UrlNext)

#         soup = _bs4.BeautifulSoup(page.content,"html.parser",parse_only=only_a_tags)
#         for link in soup.find_all('a'):
#             info = link.get('href')
#             if info[0]=="D":
#                 NewUrl="http://www.annonce-algerie.com/"+info
            
#                 ExtractionInfo(NewUrl,db)

#         num_Page=num_Page+1

#     return "webScrapping donne succesfuly" 

# def ExtractionInfo(url:str,db:Session):
#     listElement =[]
#     page = _requests.get(url)
#     soup = _bs4.BeautifulSoup(page.content,features="xml")
    
#     items = soup.findAll('table',class_="da_rub_cadre")
#     item = items[1] #celle dont j'en ai besoin
#     ite = item.findAll('td',class_="da_field_text")
#     contact =soup.findAll('span',class_="da_contact_value") #num de contact
#     if len(ite)== 8: #si contient tt les elements 
#         for it in ite:
#             listElement.append(it.getText())
        
#         contact =soup.findAll('span',class_="da_contact_value")
#         ContactText=contact[0].getText()
#         ListImg =ExtractionImage(soup)
    
#         for element in listElement[4].split(">"):
#             if "Dinar Algèrien" in element:
#                 prix = element
#                 print(element)
#         listElement[4]= prix
#         CreerAnnonce(listElement,ListImg,ContactText,db)
    

# def CreerAnnonce(list:List[str],ListImg:List[str],ContactText:str,db:Session):

#     if ListImg != []: #si image exit
#         New_Annonce =Schemas.Annonce(Type_bien=list[0],Type_annonce="",Surface=list[3],Description=list[5],
#         Prix=list[4],Nom="",Prenom="",Adresse=list[2],Email="",Tel=ContactText,Photo=ListImg[0],Localiastion=list[1])
#     else:
#         New_Annonce =Schemas.Annonce(Type_bien=list[0],Type_annonce="",Surface=list[3],Description=list[5],
#         Prix=list[4],Nom="",Prenom="",Adresse=list[2],Email="",Tel=ContactText,Photo="",Localiastion=list[1])

#     Nouvelle_Annonce = models.Annonce(Type_bien=New_Annonce.Type_bien,
#     Localisation=New_Annonce.Localiastion,Adresse=New_Annonce.Adresse,Surface=New_Annonce.Surface,
#     Prix=New_Annonce.Prix,Description=New_Annonce.Description,Tel =New_Annonce.Tel,Photo=New_Annonce.Photo) 
#     #que la premiere pour l'instant

#     db.add(Nouvelle_Annonce)
#     db.commit()
#     db.refresh(Nouvelle_Annonce)

# def ExtractionImage(soup:_bs4.BeautifulSoup):
#     images = soup.findAll('div',id="all_photos")
#     ListImg=[]
#     if(len(images)==1):#donc les images exist
#         images2 =images[0].findAll('a')
#         for sr in images2:
#             ListImg.append(sr.img.get('src'))
#     return ListImg
