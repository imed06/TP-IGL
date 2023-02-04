
import '../styles/AjouterAnnonce.css';
import SideBar from '../Components/SideBar';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useAuthContext } from '../hooks/useAuthContext';
function AjouterAnnonce() {
 const navigate = useNavigate();
 const { user } = useAuthContext()
 const [photos, setPhotos] = useState([{lien: ''}]);

 const handleAddPhoto = () => {
   setPhotos([...photos, {lien: ''}]);
 };
 
 const handleChangePhoto = (index, lien) => {
   const newPhotos = [...photos];
   newPhotos[index].lien = lien;
   setPhotos(newPhotos);
 };
     const formik = useFormik({
        initialValues: {
            // description de l'annonce 
            titre:"",
            categorie:"",
            typeB:"",
            surface:"",
            Description:"",
            prix:"" ,
            date :"" ,
            adrB :'', 
           // information de contact 
           /* nom :"",
            prenom : "",
            adresse:"",
            email :"",
            telephone:"",
            //localisation
            wilaya:"",
            commune:"",
            Ajouter_photos:'' ,*/ 
            
            



        },
         // valide le formulaire
           validationSchema: Yup.object({
             titre:Yup.string().required("Veuillez introduire un titre pour votre annonce").max(50 ,"Votre titre ne doit pas dépasser 100 caractéres"),
             categorie:Yup.string().required("Ce champ est obligatoire"),
               typeB:Yup.string().required("Ce champ est obligatoire"),
               surface:Yup.string().required("Ce champ est obligatoire"),
               Description:Yup.string().required("Veuillez entroduire une description pour votre annonce").max(500,"Votre déscription ne doit pas dépasser 500 caractéres"),
               prix:Yup.string().required("Ce champ est obligatoire").matches(/^\d+$/, 'Seuls les nombres sont autorisés') ,
               date:Yup.string().required("Ce champ est obligatoire"),
                 
              //  nom :Yup.string().required("Ce champ est obligatoire"),
              //  prenom : Yup.string().required("Ce champ est obligatoire"),
              //  adresse:Yup.string().required("Ce champ est obligatoire"),
              //  email :Yup.string().email("Votre adresse e-mail est invalide"),
              //  telephone:Yup.string().required("ce champ est obligatoire").matches(/^\d+$/, 'Seuls les nombres sont autorisés').max(10,"Votre numero de télèphone est incorrect ").min(10 ,"Votre numero de télèphone est incorrect"),
                  
               //  wilaya:Yup.string().required("Ce champ est obligatoire"),
              ///   commune:Yup.string().required("Ce champ est obligatoire"),
                 adrB:Yup.string().required("Ce champ est obligatoire"), 

           }), 
        
        // submit le formulaire
        onSubmit: values=>{
            console.log(values);
            axios.post('http://127.0.0.1:5000/annonce/?userid='+user.id,{
               /* "Titre": values.titre ,
                "Type_annonce": values.categorie,
                "Type_bien": values.typeB,
                "Surface": values.surface,
                "Description": values.Description,
                "Prix": values.prix,
                "Nom": values.nom,
                "Prenom": values.prenom,
                "Adresse": values.adresse,
                "Email": values.email,
                "Tel": values.telephone,
                "Localisation": values.adrB,
                "dateInsertion": values.date,
                "photo": photos
*/

                "titre": values.titre,
                "categories": values.categorie,
                "typeDuBien": values.typeB,
                "surfaces": values.surface,
                "description": values.Description,
                "prix": values.prix,
                "localisation": values.adrB,
                "Date": values.date ,
        
             })
            .catch(error => {
            alert(error)
            })
        },
      
     });
     
    

  return (
    <div className="h-full mr-8 ml-8 mt-5 rounded-xl"   id="ajouterAnnonce">
        
        <form  onSubmit={formik.handleSubmit} className="formulaire rounded-xl">
                <div className="shadow-3xl border-b-2 bg-[#fdfdfd] border-[#0E213F] ..." id="titre_generale_div">
                        <h1 id="titre_generale" className=" text-xl font-extrabold"> Ajouter une nouvelle annonce</h1>
                </div>
            <div className="Annonce rounded-md ">

                <div className="info_annonce pb-4 rounded-lg" >
                    <div className="secondo_info_annonce rounded-lg shadow-3xl">
                    {/* <div class="border-b-4 border-indigo-500 ..."> */}
                    <h1 id="titre_generale" className=" border-b-2 text-left border-[#1a2536] font-bold text-lg ">Déscription de l'annonce</h1>
                    
                    {/* le champs pour entre le Titre de l'annonce  */}
                        <div  className="pd-4 my-3">
                            <label
                            id ="utile"
                             className="block text-lg font-medium pb-4   text-sky-900"
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
                            className="block text-lg font-medium pb-4   text-sky-900"
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
                        className="block text-lg font-medium pb-4   text-sky-900"
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
                             className="block text-lg font-medium pb-4  text-sky-900"
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
                            className="block text-lg font-medium pb-4   text-sky-900"
                            >type</label>
                            <select name="typeB" id ="utile"
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
                       
                               
                        
                        <div className="pd-4 my-3">
                            <label 
                            id ="utile"
                            className="block text-lg font-medium pb-4  text-sky-900"
                            htmlFor="text"
                            >Date</label>
                             <input 
                            value={formik.values.date}
                            onChange={formik.handleChange}
                            onBlur ={formik.handleBlur}
                            id ="utile"
                            className="border-1  border-bleu-20 p-2 rounded-md focus:ring-2 focus:ring-bleu-500 ring-inset"
                            type="text" name="date" 
                            placeholder="Date" />
                            <p id="utile" className ="block text-sm font-medium  pb-4 font-Montserrat  text-red-600 ">
                            {formik.touched.date && formik.errors.date ? formik.errors.date:" "}</p>
                    </div>
                     {/* le champs pour entre l'adresse de bien immobilier */}
                     <div className="pd-4 my-3">
                            <label className="block text-lg font-medium pb-4  text-sky-900 "
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



                        {/* le champs pour introduire une petite description a props de bien immobilier */}
                        <div className="pd-4 my-3">
                        <label 
                          id ="utile"
                           className="block  text-lg font-medium pb-4 text-sky-900 "
                            htmlFor="text"
                            >Description</label>
                           <textarea id ="utile"
                             value={formik.values.Description}
                            onChange={formik.handleChange}
                            onBlur ={formik.handleBlur} 
                           name="Description"
                           className="border-1 border-bleu-20 p-2 rounded-md focus:ring-2 focus:ring-bleu-500 ring-inset"
                            cols="22" rows="12" ></textarea>
                            <p id="utile" className ="block text-sm font-medium  pb-4 font-Montserrat  text-red-600 ">{formik.touched.Description && formik.errors.Description ? formik.errors.Description: ""}</p>
                        </div>
                    </div>
                </div>
               
            </div>
            <div className="Bottons_Ajouter_annuler bg-[#ffffff]">
            <button type="submit"  id="Ajouter"
            onClick={()=> navigate(-1) }
            className="text-white bg-gradient-to-br font-LibreBaskerville from-[#1a2536] to-sky-900 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-sky-900 dark:focus:ring-[#1a2536] font-medium rounded-lg text-sm px-5 py-2.5 text-center  mb-2">
            Ajouter</button>
            <button onClick={()=> navigate(-1)} type="reset"  id ="Annuler" className="text-white bg-gradient-to-br font-LibreBaskerville from-[#1a2536] to-sky-900 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-sky-900 dark:focus:ring-[#1a2536] font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
            Annuler</button>
                
            </div>
        
        </form>
    
    </div>
  )
}

export default AjouterAnnonce;
