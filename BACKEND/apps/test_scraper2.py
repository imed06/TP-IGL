"""import scraper2
import unittest
import requests
from bs4 import BeautifulSoup
from sqlalchemy.orm import Session
from typing import List
import Schemas
import main
from fastapi import Depends
from Database import get_db
from routers import Annonce
class TestUtils(unittest.TestCase):
    
    def test_ExtractionImage(self):
        url ="https://darjadida.com/annonces/immobiliere-vente-bureaux-tizi-ouzou-191301.html"
        lstImage = []
        resp =requests.get(url)
        soup =BeautifulSoup(resp.content,features="xml")
        tab = ["https://darjadida.com/algerie/images/ref192301/webp/vente-bureaux-tiziouzou-immobilier-1670152309-2155.jpg.webp",
               "https://darjadida.com/algerie/images/ref192301/webp/vente-bureaux-tiziouzou-immobilier-1670152310-0291.jpg.webp",
               "https://darjadida.com/algerie/images/ref192301/webp/vente-bureaux-tiziouzou-immobilier-1670152310-8807.jpg.webp",
               "https://darjadida.com/algerie/images/ref192301/webp/vente-bureaux-tiziouzou-immobilier-1670152311-4628.jpg.webp",
               "https://darjadida.com/algerie/images/ref192301/webp/vente-bureaux-tiziouzou-immobilier-1670152312-3031.jpg.webp"]
        for element in tab:
            lstImage.append(Schemas.Photo(lien = element))

        self.assertEqual(scraper2.ExtractionImage(soup),lstImage) """

"""def test_ScraperAnnonce(self,db:Session):
        url ="https://darjadida.com/annonces/immobiliere-vente-bureaux-tizi-ouzou-191301.html"
        lstImage = []
        tab = ["https://darjadida.com/algerie/images/ref192301/webp/vente-bureaux-tiziouzou-immobilier-1670152309-2155.jpg.webp",
               "https://darjadida.com/algerie/images/ref192301/webp/vente-bureaux-tiziouzou-immobilier-1670152310-0291.jpg.webp",
               "https://darjadida.com/algerie/images/ref192301/webp/vente-bureaux-tiziouzou-immobilier-1670152310-8807.jpg.webp",
               "https://darjadida.com/algerie/images/ref192301/webp/vente-bureaux-tiziouzou-immobilier-1670152311-4628.jpg.webp",
               "https://darjadida.com/algerie/images/ref192301/webp/vente-bureaux-tiziouzou-immobilier-1670152312-3031.jpg.webp"]
        for element in tab:
            lstImage.append(Schemas.Photo(lien = element))

        annonce = Schemas.Annonce(Titre="Vente Bureaux Tizi-Ouzou",Type_annonce="Vente",Type_bien="Bureaux",Surface="42 M²",
        Description="Cabinet de gestion immobilière met en vente un bureau fini avec deux (02) entées, surface 42,16 M², étage"
        "01, dans un étage de services bien situé, endroit très fréquenté, à proximité du commerces, administrations,"
        "écoles, institués, transports… convient pour plusieurs activités possède un livret foncier. Et en toutes"
        "commodités, Sis au lieu dit boulevard Amyoud, Tizi ouzou."
        "Prix : 550 U Négociable."
        "Pour toutes autres informations complémentaires, veuillez nous contacter aux coordonnées citées ci-dessous"
        ":"
        "Tél fixe : 044 92 54 99"
        "Tél mob : 0560 93 33 14"
        "E-mail : g.immob@hotmail.com",Prix="550 Millions de centimes Négociable",Nom="",Prenom="",Adresse="Agence immobiliere CABINET DE GESTION IMMOBILIERE",
        Email="",Tel=" 044 92 54 99",Localisation="Amyoud, Tizi Ouzou",dateInsertion="04/12/2022",photo=lstImage)
        self.assertEqual(scraper2.ScraperAnnonce(url,db),annonce)
        #self.asserEqual(main.WebScraping) """
""" 
    def test_CreerAnnonce(self,db:Session):
        lstImage = []

        tab = ["https://darjadida.com/algerie/images/ref192301/webp/vente-bureaux-tiziouzou-immobilier-1670152309-2155.jpg.webp",
               "https://darjadida.com/algerie/images/ref192301/webp/vente-bureaux-tiziouzou-immobilier-1670152310-0291.jpg.webp",
               "https://darjadida.com/algerie/images/ref192301/webp/vente-bureaux-tiziouzou-immobilier-1670152310-8807.jpg.webp",
               "https://darjadida.com/algerie/images/ref192301/webp/vente-bureaux-tiziouzou-immobilier-1670152311-4628.jpg.webp",
               "https://darjadida.com/algerie/images/ref192301/webp/vente-bureaux-tiziouzou-immobilier-1670152312-3031.jpg.webp"]

        for element in tab:
            lstImage.append(Schemas.Photo(lien = element))
        annonce = Schemas.Annonce(Titre="naila",Type_annonce="vente",Type_bien="Bureaux",Surface="42",Description="bref essaie",
        Prix="4521544",Nom="naila",Prenom="Boudedja",Adresse="rue beb",Email="nailaboudedja@gmail.com",Tel="0025452",Localisation="44d",
        dateInsertion="jjdj",photo=lstImage)

        #.assertEqual(CreerAnnonce(annonce,db),annonce)

        self.assertEqual(Annonce.CreerAnnonce(annonce,db),annonce)


if __name__ == '__main__':
    unittest.main() """