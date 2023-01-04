

import { Navigate, useNavigate } from 'react-router-dom';
import { motion as m } from "framer-motion";
import Confetti from "react-confetti";
import { useState, useEffect } from "react";

export default function Success() {

  const navigate = useNavigate();    
  
  return (
    <main
      className=" h-screen items-center flex justify-center bg-[#1e3252] relative"
    >
      <div className="bg-white rounded-lg w-1/3 font-latoRegular text-gray-700 p-16">
        <h1 className="text-3xl pb-4 font-latoBold">
          La recuperation est fait avec succees 
        </h1>
        <div className='items-center flex justify-center'>
        <button type="submit"   id="Recuperer" onClick={()=>navigate(-1)}
            className="text-white bg-gradient-to-br ml-10 m-12 font-LibreBaskerville from-[#1a2536] to-sky-900 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-sky-900 dark:focus:ring-[#1a2536] font-medium rounded-lg text-sm px-5 py-2.5 text-center  mb-2">
            Modifier</button>
            <button type="submit"   id="Recuperer" onClick={()=>navigate('Authentification')}
            className="text-white bg-gradient-to-br ml-10 m-12 font-LibreBaskerville from-[#1a2536] to-sky-900 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-sky-900 dark:focus:ring-[#1a2536] font-medium rounded-lg text-sm px-5 py-2.5 text-center  mb-2">
            Déconnexion</button>
            </div>
      </div>
     
    </main>
  );
}
