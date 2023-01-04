import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

export default function Scrapping() {
   
   const navigate = useNavigate();
   const formik =useFormik({
    initialValues: {
        debut : "",
        fin:""
    },validationSchema: Yup.object({
        debut:Yup.string().required("Veuillez introduire la page debut de la  récupération des annonces "),
        fin:Yup.string().required("Veuillez introduire la page fin de la  récupération des annonces :")
    }),
    onSubmit: (values) => {
        console.log("form submitted");
        console.log(values);
      
        
    },
    
   });
   console.log(formik.values);

  return (
    <div className='admin_page h-screen flex items-center justify-center mt-32  lg:m-10 m-2 rounded-lg bg-center bg-[#1e3252]'>
         <form className='m-4 p-28 rounded-lg' onSubmit={formik.handleSubmit}>
            <h1 className=' text-center font-LibreBaskerville text-3xl p-6 font-bold text-yellow-600'> Lancer la récupération d'annonce : </h1>
               
            <div>
                <label htmlFor="" className='font-Montserrat text-base font-extrabold text-sky-900'>Page début :</label>
                <input type="tel" name="debut"
                 value={formik.values.debut}
                onChange={formik.handleChange}
                onBlur ={formik.handleBlur}
                 className='m-4 p-2  rounded-lg'/>
                   <p id="utile" className ="block text-sm font-medium  pb-4 font-Montserrat  text-red-600 ">
                            {formik.touched.debut && formik.errors.debut ? formik.errors.debut: ""}</p>
            </div>
            <div>
                <label htmlFor="" className='mr-6 font-Montserrat font-extrabold text-base text-sky-900'>Page fin :</label>
                <input type="tel" name="fin"
                 value={formik.values.fin}
                onChange={formik.handleChange}
                onBlur ={formik.handleBlur}
                 className='m-4 p-2  rounded-lg'/>
                   <p id="utile" className ="block text-sm font-medium  pb-4 font-Montserrat  text-red-600 ">
                            {formik.touched.fin && formik.errors.fin ? formik.errors.fin: ""}</p>
            </div>
              
            
             <div>
             <button type="submit"   id="Recuperer" onClick={()=>navigate('Success')}
            className="text-white bg-gradient-to-br ml-10 m-12 font-LibreBaskerville from-[#1a2536] to-sky-900 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-sky-900 dark:focus:ring-[#1a2536] font-medium rounded-lg text-sm px-5 py-2.5 text-center  mb-2">
            Récupérer</button>
             </div>     
         </form>
    </div>
  )
}
