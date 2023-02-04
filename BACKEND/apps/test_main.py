from fastapi.testclient import TestClient
from main import app

client = TestClient(app)


def test_supprimerAnnonce():
    id =2
    response = client.delete(f'/annonce/{id}')
    test = client.get(f'/annonce/{id}')
    assert test.json() == {"result": 'not found'}

def test_supprimerUser():
    response = client.post('/user',json={"name":"naila","email":"nail@gmailcom","numeroDeTelephone":"26","token":"ok","adresse":"rue"})
    test = client.delete(f'/user/{response.json()["id"]}')
    assert test.json() == {"result": True}

def test_CreerUser():
    response = client.post('/user',json={"name":"naila","email":"nail@gmailcom","numeroDeTelephone":"26","token":"ok","adresse":"rue"})
    test = client.get(f'/user/{response.json()["id"]}')
    client.delete(f'/user/{response.json()["id"]}')
    assert response.json() == test.json()