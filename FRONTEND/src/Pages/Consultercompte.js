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
            <div className=" flex h-full">
                   <div className="partie_compte_utilisateur h-full"><Compte></Compte></div>
                   <ConsulterAnnonce></ConsulterAnnonce>
                    
                    
            </div>
                        
    </div>
  )
}
