import { Tab } from '@headlessui/react';
import Annonce from '../Components/Annonce';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/ConsulterAnnonce.css'
import AjouterAnnonce from './AjouterAnnonce';

export default function ConsulterAnnonce() {
    const { id } = useParams()
    const [user,setUser] = useState(null)
    

    useEffect(() => {
        const getUser = async () => {
            const response = await fetch("http://127.0.0.1:8000/User/"+id)
            const json = await response.json()
            if (response.ok) {
                console.log(json)
                setUser(json)
            }
        }
        getUser()
    }, [])
    const [stateOnglets , setStateOnglets] =useState(1);
    const goCree = () => { 
        setStateOnglets(1);
    }
    const goSave = () => {
        setStateOnglets(2);
    }
     return (
    <div id="annonce_ut" className="shadow-2xl w-full   mt-3  mb-6 pb-12 bg-[#ffffff] px-4 pt-3 lg:mx-6 mx-0 border-t border-blueGray-200 rounded-lg text-center">
                <div id="onglets">
                    <div id="cree" className={`onglet_cree ${stateOnglets === 1 ? 'active' : ''} ` } onClick={goCree}>Annonces</div>
                    <div id="save" className={`onglet_save ${stateOnglets === 2 ? 'active' : ''} ` } onClick={goSave}>Ajouter</div>
                </div> 
      <div>        
           {stateOnglets === 1 ?    
                <div id="Essemble_annonce_cree">
                        <div>
                        {/* {user.Annonces.map(annonce => ( <Annonce Titre={annonce.Titre} date={annonce.dateInsertion} prix={annonce.Prix} ></Annonce> ))} */}
                         <Annonce></Annonce>
                        </div>
                </div>
                 :
                  <AjouterAnnonce></AjouterAnnonce>
           }
     </div>

 </div>
  )
}
