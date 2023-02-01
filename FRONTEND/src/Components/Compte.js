import React from 'react';
import pic2 from '../images/user.png';
import '../styles/Compte.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faSquarePlus } from '@fortawesome/free-solid-svg-icons';

export default function Compte() {
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
  return (


  <div className=" flex flex-col shadow-2xl bg-[#ffffff] mt-3 ml-4 mr-3 h-screen mb-6   rounded-lg ">
    <div className="pt-4 pb-20 pr-6 rounded-lg h-screen shadow-lg" id="compte_ut">
                 <div className="text-center mt-5 mb-8">
                      <h3 className="text-lg font-semibold   text-blueGray-700 mb-2">
                      {user && user.name}
                      </h3></div>
           <div className="continoure_image  flex justify-center"><img src={pic2} id="image_profile" alt="profile_picture" /></div> 
           <div>
                   <div className='flex justify-center m-3'> 
                      <div className="input-group-prepend mt-3">
                          <span className="input-group-text mt-3">
                              <FontAwesomeIcon icon={faPhone} />
                           </span>
                       </div>
                       <div className='flex justify-center flex-col mr-2'>
                         <div><h3 className='ml-4 text-lg font-semibold text-slate-700'>Numéro</h3></div>
                         <div><h4 className='ml-6 text-lg text-slate-600 '>{user && user.numeroDeTelephone}</h4></div>
                      </div>
                   </div>
                   <div className='flex justify-center m-5 '> 
                      <div className="input-group-prepend mt-3">
                           <span className="input-group-text mr-1 mt-3">
                             
                              <FontAwesomeIcon icon={faUser} />
                           </span>
                       </div>
                       <div className='flex justify-center flex-col mr-2'>
                         <div><h3 className=' ml-4 text-lg font-semibold text-slate-700'>Identificateur</h3></div>
                         <div><h4 className='ml-6 text-lg text-slate-600 '>{user && id}</h4></div>
                      </div>
                   </div>
                   <div className='flex justify-center mr-2 '> 
                      <div className="input-group-prepend mt-3">
                          <span className="input-group-text  mt-3">
                          
                               <FontAwesomeIcon icon={faSquarePlus} /> 
                           </span>
                       </div>
                       <div className='flex justify-center flex-col'>
                         <div><h3 className='mr-4 ml-4 text-lg font-semibold text-slate-700'>Annonces</h3></div>
                         <div><h4 className='mr-6 ml-6 text-lg text-slate-600 '>00</h4></div>
                      </div>
                   </div>
           </div>
           
      
    </div>
  </div>
  
  )
}
