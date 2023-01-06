
import '../styles/AjouterAnnonce.css';
import SideBar from '../Components/SideBar';
import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

function AjouterAnnonce() {

     const formik = useFormik({
        initialValues: {
            /* description de l'annonce */
            titre:"",
            categorie:"",
            typeB:"",
            surface:"",
            Description:"description",
            prix:"" ,

            /* information de contact*/ 
            nom :"",
            prenom : "",
            adresse:"",
            email :"",
            telephone:"+213xxxxxxxxx",
            /*localisation*/
            wilaya:"",
            commune:"",
            adrB :'', 



        },
         // valide le formulaire
           validationSchema: Yup.object({
             titre:Yup.string().required("Veuillez introduire un titre pour votre annonce").max(50 ,"Votre titre ne doit pas dépasser 100 caractéres"),
             categorie:Yup.string().required("Ce champ est obligatoire"),
               typeB:Yup.string().required("Ce champ est obligatoire"),
               surface:Yup.string().required("Ce champ est obligatoire"),
               Description:Yup.string().required("Veuillez entroduire une description pour votre annonce").max(500,"Votre déscription ne doit pas dépasser 500 caractéres"),
               prix:Yup.string().required("Ce champ est obligatoire") ,

                 
                nom :Yup.string().required("Ce champ est obligatoire"),
                prenom : Yup.string().required("Ce champ est obligatoire"),
                adresse:Yup.string().required("Ce champ est obligatoire"),
                email :Yup.string().email("Votre adresse e-mail est invalide"),
                telephone:Yup.string().required("ce champ est obligatoire").max(10,"Votre numero de télèphone est incorrect ").min(10 ,"Votre numero de télèphone est incorrect"),
                  
                 wilaya:Yup.string().required("Ce champ est obligatoire"),
                 commune:Yup.string().required("Ce champ est obligatoire"),
                 adrB:Yup.string().required("Ce champ est obligatoire"), 

           }),
        
        // submit le formulaire
        onSubmit: values=>{
            console.log(values);
        },
      
     });
  
    

  return (
    <div className="h-screen" id="ajouterAnnonce">
      <div className="w-full flex flex-col sticky top-0  ">
                <SideBar />
     </div>  
     
        
        <form  onSubmit={formik.handleSubmit} className="formulaire">
                <div className="shadow-3xl border-b-2 bg-[#cfc0a0] border-[#0E213F] ..." id="titre_generale_div">
                        <h1 id="titre_generale" className=" font-LibreBaskerville "> Ajouter une nouvelle annonce</h1>
                </div>
            <div className="Annonce rounded-md ">

                <div className="info_annonce rounded-lg" >
                    <div className="secondo_info_annonce rounded-lg shadow-3xl">
                    {/* <div class="border-b-4 border-indigo-500 ..."> */}
                    <h1 id="titre_generale" className=" border-b-2 border-[#1a2536] ... font-LibreBaskerville ">Déscription de l'annonce</h1>
                    
                    {/* le champs pour entre le Titre de l'annonce  */}
                        <div  className="pd-4 my-3">
                            <label
                            id ="utile"
                             className="block text-lg font-bold pb-4 font-Montserrat  text-sky-900"
                            htmlFor="text"
                            >Titre</label>
                            <input 
                            value={formik.values.titre}
                            onChange={formik.handleChange}
                            onBlur ={formik.handleBlur}
                            id ="utile"
                            className="border-1  border-bleu-20 p-2 rounded-md focus:ring-2 focus:ring-bleu-500 ring-inset"
                            type="text" name="titre" 
                            placeholder="Titre" />
                            <p id="utile" className ="block text-sm font-medium  pb-4 font-Montserrat  text-red-600 ">
                            {formik.touched.titre && formik.errors.titre ? formik.errors.titre: ""}</p>
                        </div>
                     
                        {/* le champs pour entre le prix de bien */}
                    <div className="pd-4 my-3">
                            <label 
                            id ="utile"
                            className="block text-lg font-bold pb-4 font-Montserrat  text-sky-900"
                            htmlFor="text"
                            >Prix</label>
                            <input
                            id ="utile" 
                            value={formik.values.prix}
                            onChange={formik.handleChange}
                            onBlur ={formik.handleBlur}
                             className="border-1 border-bleu-20 p-2 rounded-md focus:ring-2 focus:ring-bleu-500 ring-inset"
                            type="text" name="prix" placeholder="Prix" />
                            <p id="utile" className ="block text-sm font-medium  pb-4 font-Montserrat  text-red-600 ">
                            {formik.touched.prix && formik.errors.prix ? formik.errors.prix: ""}</p>
                    </div>
                     {/* le champs pour entre la surface de bien   */}
                     <div className="pd-4 my-3">
                        <label 
                        id ="utile"
                        className="block text-lg font-bold pb-4 font-Montserrat  text-sky-900"
                        htmlFor="text"
                        >Surface</label>
                        <input 
                        id ="utile"
                        value={formik.values.surface}
                        onChange={formik.handleChange}
                        onBlur ={formik.handleBlur}
                        className="border-1 border-bleu-20 p-2 rounded-md focus:ring-2 focus:ring-bleu-500 ring-inset"
                        type="text" name="surface" placeholder="Surface" />
                        <p id="utile"  className ="block text-sm font-medium  pb-4 font-Montserrat  text-red-600 ">
                            {formik.touched.surface && formik.errors.surface ? formik.errors.surface: ""}</p>
                        </div>

                       {/* le champs pour entre la catagorie de l'annonce  */}
                       <div className="pd-4 my-3">
                            <label
                            id ="utile"
                             className="block text-lg font-bold pb-4 font-Montserrat  text-sky-900"
                            >Catégorie</label>
                            <select name="categorie" 
                            id ="utile"
                            value={formik.values.categorie}
                            onChange={formik.handleChange}
                            onBlur ={formik.handleBlur}
                            className="border-1 border-bleu-2 rounded-md p-3 focus:bleu-2 focus:ring-bleu-500 ring-inset"
                            htmlFor="country">
                            <option value="Vente">Vente</option>
                            <option value="Echange">Echange</option>
                            <option value="Location">Location</option>
                            <option value="EchangeVac">Location pour vacances</option>
                            </select>
                            <p id="utile" className ="block text-sm font-medium  pb-4 font-Montserrat  text-red-600 ">
                            {formik.touched.categorie && formik.errors.categorie ? formik.errors.categorie: ""}</p>
                        </div>
                        {/* le champs pour entre le type de bien */}
                        <div  className="pd-4 my-3">
                            <label 
                            id ="utile"
                            className="block text-lg font-bold pb-4 font-Montserrat  text-sky-900"
                            >type</label>
                            <select name="typeBien" id ="utile"
                            value={formik.values.typeB}
                            onChange={formik.handleChange}
                            onBlur ={formik.handleBlur}
                            className="border-1 border-bleu-20 p-3 rounded-md focus:ring-2 focus:ring-bleu-500 ring-inset"
                            htmlFor="texte">
                            <option value="Terrain">Terrain</option>
                            <option value="Terrain_Agricole">Terrain Agricole</option>
                            <option value="Appartement">Appartement</option>
                            <option value="Maison">Maison</option>
                            <option value="Bungalow">Bungalow</option>
                            <option value="autre">Autre</option>
                            </select>
                            <p id="utile"  className ="block text-sm font-medium  pb-4 font-Montserrat  text-red-600 ">
                            {formik.touched.typeB && formik.errors.typeB ? formik.errors.typeB: ""}</p>
                        </div>
                       
                        {/* le champs pour introduire une petite description a props de bien immobilier */}
                        <div className="pd-4 my-3">
                        <label 
                          id ="utile"
                           className="block text-lg font-bold pb-4 font-Montserrat  text-sky-900 "
                            htmlFor="text"
                            >Description</label>
                           <textarea id ="utile"
                             value={formik.values.Description}
                            onChange={formik.handleChange}
                            onBlur ={formik.handleBlur} 
                           name="description"
                           className="border-1 border-bleu-20 p-2 rounded-md focus:ring-2 focus:ring-bleu-500 ring-inset"
                            cols="22" rows="19" ></textarea>
                            <p id="utile" className ="block text-sm font-medium  pb-4 font-Montserrat  text-red-600 ">{formik.touched.Description && formik.errors.Description ? formik.errors.Description: ""}</p>
                        </div>
                    </div>
                </div>
               <div className="contacte_localisation_annonce rounded-lg shadow-3xl">
                <div className="info_contact rounded-lg">
                <h1 id="titre_generale" className=" font-LibreBaskerville border-b-2 border-[#0E213F] ... ">Information de contact</h1>
                            {/* le champs pour entre le nom */}
                            <div 
                            className="pd-4 my-3">
                                            <label 
                                            id ="utile"
                                            className="block text-lg font-bold pb-4 font-Montserrat  text-sky-900 "
                                            htmlFor="name"
                                            >Nom</label>
                                <input
                                id ="utile" 
                                value={formik.values.nom}
                                 onChange={formik.handleChange}
                                onBlur ={formik.handleBlur}
                                className="border-1 border-bleu-20 p-2 rounded-md focus:ring-2 focus:ring-bleu-500 ring-inset"
                                type="text" name="nom" placeholder="Entre votre nom" />
                                <p id="utile"  className ="block text-sm font-medium  pb-4 font-Montserrat  text-red-600 ">
                            {formik.touched.nom && formik.errors.nom ? formik.errors.nom: ""}</p>
                            </div>

                                {/* le champs pour entre le prenom */}
                            <div className="pd-4 my-3">
                                <label 
                                id ="utile"
                              
                                className="block text-lg font-bold pb-4 font-Montserrat  text-sky-900 "
                                htmlFor="name"
                                >Prénom</label>
                                <input 
                                id ="utile"
                                value={formik.values.prenom}
                               onChange={formik.handleChange}
                               onBlur ={formik.handleBlur}
                                className="border-1 border-bleu-20 p-2 rounded-md focus:ring-2 focus:ring-bleu-500 ring-inset"
                                type="text" name="prenom" placeholder="Entre votre prénom" />
                                <p id="utile" className ="block text-sm font-medium  pb-4 font-Montserrat  text-red-600 ">
                            {formik.touched.prenom && formik.errors.prenom ? formik.errors.prenom: ""}</p>
                            </div>

                            {/* le champs pour entre l'email de l'utilisateurs */}
                            <div className="pd-4 my-3">
                                <label id ="utile"
                                className="block text-lg font-bold pb-4 font-Montserrat  text-sky-900 "
                                htmlFor="email"
                                >Email</label>
                                <input 
                                id ="utile"
                                value={formik.values.email}
                               onChange={formik.handleChange}
                               onBlur ={formik.handleBlur}
                                className="border-1 border-bleu-20 p-2 rounded-md focus:ring-2 focus:ring-bleu-500 ring-inset"
                                type="email" name="email" placeholder="Entre votre email" />
                                <p id="utile"  className ="block text-sm font-medium  pb-4 font-Montserrat  text-red-600 ">
                            {formik.touched.email && formik.errors.email ? formik.errors.email: ""}</p>
                            </div>

                            {/* le champs pour entre le numero de telephone de l'utilisateur */}
                            <div className="pd-4 my-3">
                                <label
                                 id ="utile"
                                className="block text-lg font-bold pb-4 font-Montserrat  text-sky-900 "
                                htmlFor="tel">Téléphone</label>
                                <input 
                                id ="utile" 
                                value={formik.values.telephone}
                                onChange={formik.handleChange}
                                onBlur ={formik.handleBlur}
                                className="border-1 border-bleu-20 p-2 rounded-md focus:ring-2 focus:ring-bleu-500 ring-inset"
                                type="tel" name="telephone" placeholder="Entre votre numero de téléphone" />
                                <p id="utile" className ="block text-sm font-medium  pb-4 font-Montserrat  text-red-600 ">
                            {formik.touched.telephone && formik.errors.telephone ? formik.errors.telephone: ""}</p>
                            </div>

                            {/* le champs pour entre l'adresse de l'utilisateur */}
                            <div className="pd-4 my-3">
                                <label 
                                id ="utile"
                                ame="adresse"
                                className="block text-lg font-bold pb-4 font-Montserrat  text-sky-900 "
                                htmlFor="adresse"
                                >Adresse</label>
                                <input type="text" id ="utile" placeholder="Entre votre Addresse" name="adresse" value={formik.values.adresse}
                                onChange = {formik.handleChange}
                                onBlur ={formik.handleBlur}
                                className="border-1 border-bleu-20 p-2 rounded-md focus:ring-2 focus:ring-bleu-500 ring-inset"
                                 />
                                <p id="utile" className ="block text-sm font-medium  pb-4 font-Montserrat  text-red-600 ">
                            {formik.touched.adresse && formik.errors.adresse ? formik.errors.adresse: ""}</p>
                            </div>
                </div>



                {/* la locatisation  */}
                    <div className="localisation_annonce rounded-lg ">
                    <h1 id="titre_generale" className=" font-LibreBaskerville border-b-2 border-[#1a2536] ... ">Localisation</h1>
                        {/* le champs pour entre les wilaya*/}
                        <div className="pd-4 my-3">
                            <label className="block text-lg font-bold pb-4 font-Montserrat  text-sky-900 " id ="utile"
                            >Wilaya</label>
                            <select 
                             value={formik.values.wilaya}
                            onChange={formik.handleChange}
                            onBlur ={formik.handleBlur}
                            name="wilaya" className="border-1 border-bleu-20 p-2 rounded-md focus:ring-2 focus:ring-bleu-500 ring-inset"
                            htmlFor="country" id ="utile">
                                <option value="Alger">Alger</option>
                            </select>
                            <p id="utile"className ="block text-sm font-medium  pb-4 font-Montserrat  text-red-600 ">
                            {formik.touched.wilaya && formik.errors.wilaya ? formik.errors.wilaya: ""}</p>
                        </div>

                        {/* le champs pour entre la commune*/}
                        <div className="pd-4 my-3">
                            <label className="block text-lg font-bold pb-4 font-Montserrat  text-sky-900 "
                            id ="utile"
                            >Commune</label>
                            <select
                             value={formik.values.commune}
                            onChange={formik.handleChange}
                            onBlur ={formik.handleBlur}
                             name="commune" className="border-1 border-bleu-20 p-2 rounded-md focus:ring-2 focus:ring-bleu-500 ring-inset"
                            htmlFor="country" id ="utile">
                                <option value="El-harrache">El-harrache</option>
                            </select>
                            <p id="utile"  className ="block text-sm font-medium  pb-4 font-Montserrat  text-red-600 ">
                            {formik.touched.commune && formik.errors.commune ? formik.errors.commune: ""}</p>
                        </div>

                            {/* le champs pour entre l'adresse de bien immobilier */}
                            <div className="pd-4 my-3">
                            <label className="block text-lg font-bold pb-4 font-Montserrat  text-sky-900 "
                            htmlFor="nom"
                            id ="utile"
                            >Adresse de bien immobilier</label>
                            <input  type="text" name="adrB" placeholder="Entre votre Addresse" 
                            value={formik.values.adrB}
                            onChange={formik.handleChange}
                            onBlur ={formik.handleBlur}
                            id ="utile"
                            className="border-1 border-bleu-20 p-2 rounded-md focus:ring-2 focus:ring-bleu-500 ring-inset"/>
                            <p id="utile"  className ="block text-sm font-medium  pb-4 font-Montserrat  text-red-600 ">
                            {formik.touched.adrB && formik.errors.adrB ? formik.errors.adrB: ""}</p>
                        </div>

                            {/* le champs pour ajouter une photo */}
                        <div className="pd-4 ">
                            <label className="block text-base font-bold pb-4 font-Montserrat  text-sky-900 "
                            htmlFor="nom"
                            id ="utile"
                            >Ajouter des photos</label>
                            
                            <input 
                             aria-describedby="file_input_help" name="Ajouter_photos" type="file"
                            id ="utile"
                            className="border-1 border-bleu-20 p-0 rounded-md focus:ring-2 focus:ring-bleu-500 ring-inset
                            text-sky-900 border border-yellow-500 cursor-pointer bg-yellow-100 font-Montserrat text-sm 
                             dark:text-yellow-500 focus:outline-none dark:bg-[#1a2536] dark:border-sky-900 dark:placeholder-gray-400"
                             /> 
                            <p id ="utile" className=" font-Montserrat mt-1 pl-2 text-xs font-semibold text-gray-900 dark:text-gray-900">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>
                        </div>
                </div>
                </div>
                
            </div>
            <div className="Bottons_Ajouter_annuler">
            <button type="submit"  id="Ajouter"
            className="text-white bg-gradient-to-br font-LibreBaskerville from-[#1a2536] to-sky-900 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-sky-900 dark:focus:ring-[#1a2536] font-medium rounded-lg text-sm px-5 py-2.5 text-center  mb-2">
            Ajouter</button>
            <button type="reset"  id ="Annuler" className="text-white bg-gradient-to-br font-LibreBaskerville from-[#1a2536] to-sky-900 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-sky-900 dark:focus:ring-[#1a2536] font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
            Annuler</button>
                
            </div>
        
        </form>
    
    </div>
  )
}

export default AjouterAnnonce;
