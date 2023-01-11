import React, { useEffect } from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useContext , useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Scrapping() {
    const navigate = useNavigate();
    const [ page_debut , setpage_debut] = useState(0);
    const [ page_fin , setpage_fin] = useState(0);
   

  //   const submitRegistration = async () => {
  //   const requestOptions = {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({ "page_debut": PageDebut, "page_fin": PageFin }),
  //   };

  //   const response = await fetch("/scraping/darjdida", requestOptions);
    
  //    if(response.ok){
  //      alert("addanet")
  //    }

  const handleSubmit = async(e) => {
		e.preventDefault();
    //  console.log(page_debut,page_fin);
    //  axios.post('http://127.0.0.1:5000/scraping/darjdida',{page_debut :page_debut,page_fin:page_fin}).then(response =>{
    //   alert("donne subbmited with success"+response)
    //  })
    //  .catch(error => {
    //   alert(error)
    //  })
		 const response = await fetch('http://127.0.0.1:5000/scraping/darjdida', {
		 	method: 'POST',
			
		 	headers: {
		 		'Content-Type': 'application/json'
			},
		 	body: JSON.stringify({
		 		"page_debut" :  page_debut ,
         "page_fin" : page_fin
		 	}),
		 })
 
		//  .then((response) => {
		//  	if (response.status === 'ok') {
		//  		alert('Supplier added successfully');
		//  	} else {
		//  		alert('Failed to add Supplier');
		//  	}
		//  });
    const json = await response.json()
     console.log(json)
	
	};
  // };

   /* const handleSubmit = (e) => {
      e.preventDefault();
      submitRegistration();
    }*/
  return (
    <div className='admin_page h-screen flex items-center justify-center mt-32  lg:m-10 m-2 rounded-lg bg-center bg-[#1e3252]'>
         <form className='m-4 p-28 rounded-lg' onSubmit={handleSubmit}>
            <h1 className=' text-center font-LibreBaskerville text-3xl p-6 font-bold text-yellow-600'> Lancer la récupération d'annonce : </h1>
               
            <div>
                <label htmlFor="" className='font-Montserrat text-base font-extrabold text-sky-900'>Page début :</label>
                <input type="number" name="debut"
                 value={page_debut}
                 onChange={(e) => setpage_debut(e.target.value)}
                 className='m-4 p-2  rounded-lg'/>
            
            </div>

            <div>

                <label htmlFor="" className='mr-6 font-Montserrat font-extrabold text-base text-sky-900'>Page fin :</label>
                <input type="number" name="fin"
                 value={page_fin}
                 onChange={(e) => setpage_fin(e.target.value)}
                 className='m-4 p-2  rounded-lg'/>
                   
            </div>
              
            
             <div>
             {/* onClick={()=>navigate('Success')} */}
             <button type="submit"   id="Recuperer" 
            className="text-white bg-gradient-to-br ml-10 m-12 font-LibreBaskerville from-[#1a2536] to-sky-900 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-sky-900 dark:focus:ring-[#1a2536] font-medium rounded-lg text-sm px-5 py-2.5 text-center  mb-2">
            Récupérer</button>
             </div>     
         </form>
    </div>
  )
}
