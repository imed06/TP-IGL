import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react'; 
export default function Message() {
    const formik =useFormik({
        initialValues: {
            email : "",
            telephone:"",
            objet:"",
            message:""
        },validationSchema: Yup.object({
            email:Yup.string().required("Veuillez introduire la page debut de la  récupération des annonces "),
            telephone:Yup.string().required("Veuillez introduire la page fin de la  récupération des annonces :"),
            objet:Yup.string().required(),
            message:Yup.string().required()
        }),
        onSubmit: (values) => {
            console.log("form submitted");
            console.log(values);
          
            
        },
        
       });
  return (
    <div className='Message shadow-lg p-5 flex  mt-5  rounded-lg bg-center '>
   {/* bg-[#f8f3e7] */}
    <form className='  w-full h-[4/6] bg-[#f8f3e7] rounded-lg' onSubmit={formik.handleSubmit}>

       <h1 className=' text-left mt-4 mb-4 ml-[6%] font-LibreBaskerville text-3xl p-6 font-bold text-[#c5973a]'> Message : </h1>
          
       <div className=" w-5/6 mb-6 ml-[7%] ">
       <label htmlFor="floating_email" className="peer-focus:font-medium  
         font-Montserrat font-extrabold text-base text-sky-500
         dark:text-sky-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 
         origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 
         peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 
         peer-focus:-translate-y-6">Addresse email</label>
         <input type="email" name="email" id="email" 
           value={formik.values.email}
           onChange={formik.handleChange}
           onBlur ={formik.handleBlur}
         className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
       
      </div>
      <div className=" z-0  w-5/6 mb-6 ml-[7%] group">
        <label htmlFor="floating_phone" className="peer-focus:font-medium
        font-Montserrat font-extrabold text-sm text-sky-500  dark:text-sky-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 
        peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0
         peer-focus:scale-75 peer-focus:-translate-y-6">Téléphone </label>
          <input type="number" 
          value={formik.values.telephone}
           onChange={formik.handleChange}
           onBlur ={formik.handleBlur}
          
         name="telephone" id="telephone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
       
         <p id="utile" className ="block text-sm font-medium  pb-2 font-Montserrat  text-red-600 ">
             {formik.touched.telephone && formik.errors.telephone ? formik.errors.telephone: ""}</p>
      </div>
      <div className=" z-0 w-5/6 mb-6 ml-[7%] block ">
      <label htmlFor="floating_first_name" 
        className="peer-focus:font-medium
        font-Montserrat font-extrabold text-base text-sky-500
          dark:text-sky-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Objet</label>
         
        <input type="text" name="objet" id="objet"
           value={formik.values.objet}
           onChange={formik.handleChange}
           onBlur ={formik.handleBlur}
         className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        
    </div>
      <div className='w-5/6 mb-6 ml-[7%]'>
        <label htmlFor="message" 
        className="block mb-2 
        font-Montserrat font-extrabold text-base text-sky-500
            dark:text-sky-900 ">Message</label>
        <textarea id="message" rows="12"
        value={formik.values.message}
        onChange={formik.handleChange}
        onBlur ={formik.handleBlur}
         className="block p-2.5 w-full text-sm
         text-gray-900 bg-gray-50 rounded-lg border border-gray-300
          focus:ring-blue-500 focus:border-blue-500 dark:bg-[#0E213F]
           dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Votre message....."></textarea>
        <p id="utile" className ="block text-sm font-medium  pb-4 font-Montserrat  text-red-600 ">
         {formik.touched.message && formik.errors.message ? formik.errors.message: ""}</p>
      </div>
        


         
       
        <div className='flex items-center justify-end mb-[2%] mr-2'>
        <button type="submit"   id="Recuperer" 
       className="text-white p-2 bg-gradient-to-br ml-10 m-12 font-LibreBaskerville from-[#1a2536] to-sky-900 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-sky-900 dark:focus:ring-[#1a2536] font-medium rounded-lg text-sm px-5 py-2.5 text-center  mb-2">
       Envoyer</button>
        </div>     
    </form>
</div>
  )
}
