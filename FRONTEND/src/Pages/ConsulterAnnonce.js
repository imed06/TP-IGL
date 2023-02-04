import { Tab } from '@headlessui/react';

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/ConsulterAnnonce.css'
import AjouterAnnonce from './AjouterAnnonce';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { Navigate, useNavigate } from 'react-router-dom';
import AnnonceTemplate from './AnnonceTemplate';
import { Link } from 'react-router-dom';

export default function ConsulterAnnonce() {
    const { id } = useParams()
    const [user,setUser] = useState(null) ;
    const [ads , setAds] = useState([]) ;
    const navigate = useNavigate();
     

    const [annonces, setAnnonces] = useState([]);

    useEffect(() => {
      async function fetchData() {
        const response = await fetch('http://127.0.0.1:5000/user/'+user.id);
        const data = await response.json();
       
        if (response.ok) {
        setAnnonces(data.annonces);

        }
      }
      fetchData();
      
    }, []);
   

    const [stateOnglets , setStateOnglets] =useState(1);
    const goCree = () => { 
        setStateOnglets(1);
    }
    const goSave = () => {
        setStateOnglets(2);
    }
     return (
    <div id="annonce_ut" className="shadow-2xl w-full ml-2   mt-3  mb-6 pb-12 bg-[#ffffff] px-4 pt-3 lg:mx-6 mx-0 border-t border-blueGray-200 rounded-lg text-center">
               <div className='flex flex-row-reverse top-0 right-0 dis'>
                    <button className='m-2 ' onClick={()=>navigate(-1)}>
                       <FontAwesomeIcon className='h-5 w-5 ' icon={faTimesCircle} />
                    </button>
                </div>
                <div id="onglets">
                    <div id="cree" className={`onglet_cree ${stateOnglets === 1 ? 'active' : ''} ` } onClick={goCree}>Annonces</div>
                    <div id="save" className={`onglet_save ${stateOnglets === 2 ? 'active' : ''} ` } onClick={goSave}>Ajouter</div>
                </div> 
      <div>        
           {stateOnglets === 1 ?    
                <div id="Essemble_annonce_cree">
                       
                        {/* {user.Annonces.map(annonce => ( <Annonce Titre={annonce.Titre} date={annonce.dateInsertion} prix={annonce.Prix} ></Annonce> ))} */}
                        {annonces.map((annonce) => (
                        <div className='m-3' key ={annonce.id}>
                       <Link to={`/Details/${annonce.id}`} key={annonce.id}> <div key={annonce.id}><AnnonceTemplate annonce={annonce} /></div></Link>
                       </div>
                       ))}
                        
                </div>
                 :
                  <AjouterAnnonce></AjouterAnnonce>
           }
     </div>

 </div>
  )
}
