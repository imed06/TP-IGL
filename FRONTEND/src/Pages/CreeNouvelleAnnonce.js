import React from 'react'
import AjouterAnnonce from './AjouterAnnonce'
import { Navigate, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
export default function CreeNouvelleAnnonce() {
    const navigate = useNavigate();
  return (
    <div className='m-8 shadow-2xl rounded-2xl'>
       <div className='flex flex-row-reverse top-0 right-0 dis'>
        <button className='mr-6 mt-6' onClick={()=>navigate(-1)}>
        <FontAwesomeIcon className='h-5 w-5 ' icon={faTimesCircle} />
        </button>
       </div>
     <AjouterAnnonce></AjouterAnnonce>
    </div>
  )
}

