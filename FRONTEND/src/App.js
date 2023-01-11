import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Authentification from './Pages/Authentification';
import DetailsAnnonce from './Pages/DetailsAnnonce';
import Home from './Pages/Home';
import RemplirInfoUser from './Pages/RemplirInfoUser';

function App() {
  return (
    
      <BrowserRouter>
        <Routes>
          <Route path='/InfoUser' element={<RemplirInfoUser />}></Route>
          <Route path='/Home' element={<Home />}></Route>
          <Route path='/Details/:id' element={<DetailsAnnonce />}></Route>
        </Routes>
      </BrowserRouter>
    
  );
}
export default App;
