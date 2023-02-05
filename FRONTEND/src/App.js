import { BrowserRouter, Routes, Route ,Navigate } from 'react-router-dom'
import Authentification from './Pages/Authentification';
import DetailsAnnonce from './Pages/DetailsAnnonce';
import Home from './Pages/Home';
import RemplirInfoUser from './Pages/RemplirInfoUser';
import * as reactRouterDom from "react-router-dom";
import { useEffect, useState } from 'react';
import { useAuthContext } from './hooks/useAuthContext';
import ConsulterProfile from './Pages/ConsulterProfile';
import AjouterAnnonce from './Pages/AjouterAnnonce';
import Admin from './Pages/Admin';


function App() {
  const [email, setEmail] = useState(null)
  const [token, setToken] = useState()
  const { user } = useAuthContext()
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/InfoUser' element={<RemplirInfoUser email={email} token={token} /> }></Route>
        <Route path='/' element={!user ? <Authentification setEmail={setEmail} setToken={setToken} />: <Navigate to="/Home" />}></Route>
        <Route path='/Home' element={user ? <Home /> : <Navigate to="/" />}></Route>
        <Route path='/Details/:id' element={user?<DetailsAnnonce />: <Navigate to="/" />}></Route>
        <Route path='/user' element={user ? <ConsulterProfile />: <Navigate to="/" />}></Route>
        <Route path='/AjouterAnnonce' element={user ? <AjouterAnnonce />:<Navigate to="/" />}></Route>
        <Route path='/admin' element={user ? <Admin />:<Navigate to="/" />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
