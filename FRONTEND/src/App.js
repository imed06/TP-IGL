import AjouterAnnonce from './Pages/AjouterAnnonce';
import Authentification from './Pages/Authentification';
import Consultercompte from './Pages/Consultercompte';
import DetailsAnnonce from './Pages/DetailsAnnonce';
import Home from './Pages/Home';
import ConsulterAnnonce from './Pages/ConsulterAnnonce';
import Compte from './Components/Compte';
import Annonce from './Components/Annonce';
import Admin from './Pages/Admin'
import Scrapping from './Pages/Scrapping';
import Success from './Pages/Success'
import {Routes , Route, BrowserRouter} from 'react-router-dom';
import Message from './Components/Message';
import Accueil from './Pages/Accueil';
import SideBar from './Components/SideBar';




function App() {
     
  return (
    <div>
    <Routes>
        <Route path="/" element={<AjouterAnnonce/>}/>
        <Route path="/AjouterAnnonce" element={<AjouterAnnonce></AjouterAnnonce>}></Route>
    </Routes>
    </div>
   
  );
}
export default App;
