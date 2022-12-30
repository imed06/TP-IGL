import { Tab } from '@headlessui/react'
import { useState } from 'react'
import Annonce from '../Components/Annonce'

import '../styles/ConsulterAnnonce.css'
export default function ConsulterAnnonce() {
    const [stateOnglets , setStateOnglets] =useState(1);
    const goCree = () => { 
        setStateOnglets(1);
    }
    const goSave = () => {
        setStateOnglets(2);
    }
     return (
    <div id="annonce_ut" className="shadow-2xl mb-6 mt-6 pb-12 bg-[#f8f3e7] px-4 pt-3 lg:mx-14 mx-0 border-t border-blueGray-200 rounded-lg text-center">
                <div id="onglets">
                    <div className={`onglet_cree ${stateOnglets === 1 ? 'active' : ''} ` } onClick={goCree}>Créées</div>
                    <div className={`onglet_save ${stateOnglets === 2 ? 'active' : ''} ` } onClick={goSave}>Enregistrées</div>
                </div> 
      <div>        
           {stateOnglets === 1 ?    
                <div id="Essemble_annonce_cree">

                <div>
                    <Annonce>txt1</Annonce>
                </div>
                <div>
                
                    <Annonce>txt1</Annonce>
                </div>
                <div>
                    <Annonce>txt1</Annonce>
                </div>
                <div>
                    <Annonce>txt1</Annonce>
                </div>
                
                </div>
                 :
                <div id="Essemble_annonce_save">
                <div>
                    <Annonce>txt1</Annonce>
                </div>
                <div>
                
                    <Annonce>txt1</Annonce>
                </div>
           
                 </div>
           }
     </div>

 </div>
  )
}
