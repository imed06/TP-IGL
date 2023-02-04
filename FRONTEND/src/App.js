import { BrowserRouter, Routes, Route ,Navigate } from 'react-router-dom'
import Authentification from './Pages/Authentification';
import DetailsAnnonce from './Pages/DetailsAnnonce';
import Home from './Pages/Home';
import RemplirInfoUser from './Pages/RemplirInfoUser';
import * as reactRouterDom from "react-router-dom";
import { useEffect, useState } from 'react';
import { useAuthContext } from './hooks/useAuthContext';
import CreeNouvelleAnnonce from './Pages/CreeNouvelleAnnonce';
import Consultercompte from './Pages/Consultercompte';
import Scrapping from './Pages/Scrapping';


function App() {
  const [email, setEmail] = useState(null)
  const [token, setToken] = useState()
  const { user } = useAuthContext()
  return (
    <BrowserRouter>
      <Routes>
        <Route path ='/Scrapping' element ={!user?<Scrapping/>:<Navigate to="/" />}></Route>
        <Route path='/InfoUser' element={!user ? <RemplirInfoUser email={email} token={token} /> : <Navigate to="/" />}></Route>
        <Route path='/' element={!user?<Authentification setEmail={setEmail} setToken={setToken} />: <Navigate to="/Home" />}></Route>
        <Route path='/Home' element={user ? <Home /> : <Navigate to="/" />}></Route>
        <Route path='/Home/Consultercompte' element={user?<Consultercompte/>: <Navigate to="/" />}></Route>
         <Route path ='/Home/AjouterAnnonce' element={user?<CreeNouvelleAnnonce/>: <Navigate to="/" />}></Route>
        <Route path='/Details/:id' element={user?<DetailsAnnonce />: <Navigate to="/" />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
