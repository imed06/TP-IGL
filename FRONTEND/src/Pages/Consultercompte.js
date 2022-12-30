import React from 'react'
import '../styles/Consultercompte.css'
import Compte from '../Components/Compte';
import SideBar from '../Components/SideBar';
import ConsulterAnnonce from './ConsulterAnnonce';
export default function Consultercompte() {
  return (
   
    <div className="continer">
            <div className="w-full flex flex-col sticky  top-0  ">
                        <SideBar />
            </div>
            <div className="Contune_page_Consultercompte">
                   <div className="partie_compte_utilisateur"><Compte></Compte></div>
                    <div className="partie_annonce"><ConsulterAnnonce></ConsulterAnnonce></div>
                    
            </div>
                        
    </div>
  )
}
