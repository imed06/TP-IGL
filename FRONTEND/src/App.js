import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Authentification from './Pages/Authentification';
import DetailsAnnonce from './Pages/DetailsAnnonce';
import Home from './Pages/Home';
import RemplirInfoUser from './Pages/RemplirInfoUser';
import * as reactRouterDom from "react-router-dom";




function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/InfoUser' element={<RemplirInfoUser />}></Route>
          <Route path='/Home' element={<Home />}></Route>
          <Route path='/Details' element={<DetailsAnnonce />}></Route>
        </Routes>
      </BrowserRouter>
  );
}
export default App;
