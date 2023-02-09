from fastapi.testclient import TestClient
from main import app

client = TestClient(app)


def test_supprimerUser():
    response = client.post('/user',json={"name":"naila","email":"nail@gmailcom","numeroDeTelephone":"26","token":"ok","adresse":"rue"})
    test = client.delete(f'/user/{response.json()["id"]}')
    assert test.json() == {"result": True}

def test_CreerUser():
    response = client.post('/user',json={"name":"naila","email":"nail@gmailcom","numeroDeTelephone":"26","token":"ok","adresse":"rue"})
    test = client.get(f'/user/{response.json()["id"]}')
    client.delete(f'/user/{response.json()["id"]}')
    assert response.json() == test.json()

def test_CreerAnnonce():
    data = {"request":{"titre":"annonce","categories":"vente","typeDuBien":"Bureau","surfaces":"2","description":"ok","prix":"10000DA","localisation":"alger"},"userid":1,"paths":["item1","item2"]}
    response = client.post('/annonce',json=data)
    test = client.get(f'/annonce/{response.json().get("id")}')
    assert response.json().get("id") == test.json().get("id")