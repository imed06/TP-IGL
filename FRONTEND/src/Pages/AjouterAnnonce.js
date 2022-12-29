
import '../styles/AjouterAnnonce.css';
import SideBar from '../Components/SideBar';
function AjouterAnnonce() {
  return (
    <div className="h-screen">
      <div className="w-full flex flex-col sticky top-0  ">
                <SideBar />
     </div>  
     
        
        <form className="">
                <div className="shadow-2xl border-b-2 border-[#1a2536] ..." id="titre_generale_div">
                        <h1 id="titre_generale" className=" font-LibreBaskerville "> Ajouter une nouvelle annonce</h1>
                </div>
            <div className="Annonce rounded-md ">

                <div className="info_annonce rounded-lg" >
                    <div className="secondo_info_annonce rounded-lg shadow-2xl">
                    {/* <div class="border-b-4 border-indigo-500 ..."> */}
                    <h1 id="titre_generale" className=" border-b-2 border-[#1a2536] ... font-LibreBaskerville ">Déscription de l'annonce</h1>
                    
                    {/* le champs pour entre le Titre de l'annonce  */}
                        <div  className="pd-4 my-3">
                            <label
                            id ="utile"
                             className="block text-base font-bold pb-4 font-Montserrat  text-sky-900 "
                            htmlFor="text"
                            
                            >Titre</label>
                            <input 
                            id ="utile"
                            className="border-1  border-bleu-20 p-2 rounded-md focus:ring-2 focus:ring-bleu-500 ring-inset"
                            type="text" name="titre" 
                            placeholder="Titre" />
                        </div>
                     
                        {/* le champs pour entre le prix de bien */}
                    <div className="pd-4 my-3">
                            <label 
                            id ="utile"
                            className="block text-base font-bold pb-4 font-Montserrat  text-sky-900"
                            htmlFor="text"
                            >Prix</label>
                            <input
                            id ="utile" 
                             className="border-1 border-bleu-20 p-2 rounded-md focus:ring-2 focus:ring-bleu-500 ring-inset"
                            type="text" name="prix" placeholder="Prix" />
                    </div>
                     {/* le champs pour entre la surface de bien   */}
                     <div className="pd-4 my-3">
                        <label 
                        id ="utile"
                        className="block text-base font-bold pb-4 font-Montserrat  text-sky-900"
                        htmlFor="text"
                        >Surface</label>
                        <input 
                        id ="utile"
                        className="border-1 border-bleu-20 p-2 rounded-md focus:ring-2 focus:ring-bleu-500 ring-inset"
                        type="text" name="surface" placeholder="Surface" />
                        </div>

                       {/* le champs pour entre la catagorie de l'annonce  */}
                       <div className="pd-4 my-3">
                            <label
                            id ="utile"
                             className="block text-base font-bold pb-4 font-Montserrat  text-sky-900"
                            >Catégorie</label>
                            <select name="categorie" 
                            id ="utile"
                            className="border-1 border-bleu-2 rounded-md p-3 focus:bleu-2 focus:ring-bleu-500 ring-inset"
                            htmlFor="country">
                            <option value="Vente">Vente</option>
                            <option value="Echange">Echange</option>
                            <option value="Location">Location</option>
                            <option value="EchangeVac">Location pour vacances</option>
                            </select>
                        </div>
                        {/* le champs pour entre le type de bien */}
                        <div  className="pd-4 my-3">
                            <label 
                            id ="utile"
                            className="block text-base font-bold pb-4 font-Montserrat  text-sky-900"
                            >type</label>
                            <select name="typeBien" id ="utile"
                            className="border-1 border-bleu-20 p-3 rounded-md focus:ring-2 focus:ring-bleu-500 ring-inset"
                            htmlFor="name">
                            <option value="Terrain">Terrain</option>
                            <option value="Terrain_Agricole">Terrain Agricole</option>
                            <option value="Appartement">Appartement</option>
                            <option value="Maison">Maison</option>
                            <option value="Bungalow">Bungalow</option>
                            <option value="autre">Autre</option>
                            </select>
                        </div>
                       
                        {/* le champs pour introduire une petite description a props de bien immobilier */}
                        <div className="pd-4 my-3">
                        <label 
                          id ="utile"
                           className="block text-base font-bold pb-4 font-Montserrat  text-sky-900 "
                            htmlFor="text"
                            >Description</label>
                           <textarea id ="utile" 
                           name="description"
                           className="border-1 border-bleu-20 p-2 rounded-md focus:ring-2 focus:ring-bleu-500 ring-inset"
                            cols="22" rows="17" ></textarea>
                        </div>
                    </div>
                </div>
               <div className="contacte_localisation_annonce rounded-lg">
                <div className="info_contact rounded-lg">
                <h1 id="titre_generale" className=" font-LibreBaskerville border-b-2 border-[#1a2536] ... ">Information de contact</h1>
                            {/* le champs pour entre le nom */}
                            <div 
                            className="pd-4 my-3">
                                <label 
                                id ="utile"
                                className="block text-base font-bold pb-4 font-Montserrat  text-sky-900 "
                                htmlFor="name"
                                >Nom</label>
                                <input
                                id ="utile" 
                                className="border-1 border-bleu-20 p-2 rounded-md focus:ring-2 focus:ring-bleu-500 ring-inset"
                                type="text" name="nom" placeholder="Entre votre nom" />
                            </div>

                                {/* le champs pour entre le prenom */}
                            <div className="pd-4 my-3">
                                <label 
                                id ="utile"
                                className="block text-base font-bold pb-4 font-Montserrat  text-sky-900 "
                                htmlFor="name"
                                >Prénom</label>
                                <input 
                                id ="utile"
                                className="border-1 border-bleu-20 p-2 rounded-md focus:ring-2 focus:ring-bleu-500 ring-inset"
                                type="text" name="prenom" placeholder="Entre votre prénom" />
                            </div>

                            {/* le champs pour entre l'email de l'utilisateurs */}
                            <div className="pd-4 my-3">
                                <label id ="utile"
                                className="block text-base font-bold pb-4 font-Montserrat  text-sky-900 "
                                htmlFor="email"
                                >Email</label>
                                <input 
                                id ="utile"
                                className="border-1 border-bleu-20 p-2 rounded-md focus:ring-2 focus:ring-bleu-500 ring-inset"
                                type="text" name="email" placeholder="Entre votre email" />
                            </div>

                            {/* le champs pour entre le numero de telephone de l'utilisateur */}
                            <div className="pd-4 my-3">
                                <label
                                 id ="utile"
                                className="block text-base font-bold pb-4 font-Montserrat  text-sky-900 "
                                htmlFor="tel">Téléphone</label>
                                <input 
                                id ="utile" 
                                className="border-1 border-bleu-20 p-2 rounded-md focus:ring-2 focus:ring-bleu-500 ring-inset"
                                type="text" name="tel" placeholder="Entre votre numéro de téléphone" />
                            </div>

                            {/* le champs pour entre l'adresse de l'utilisateur */}
                            <div className="pd-4 my-3">
                                <label 
                                id ="utile"
                                className="block text-base font-bold pb-4 font-Montserrat  text-sky-900 "
                                htmlFor="nom"
                                >Adresse</label>
                                <input 
                                id ="utile"
                                className="border-1 border-bleu-20 p-2 rounded-md focus:ring-2 focus:ring-bleu-500 ring-inset"
                                type="text" name="Adress" placeholder="Entre votre Addresse" />
                            </div>
                </div>



                {/* la locatisation  */}
                    <div className="localisation_annonce rounded-lg ">
                    <h1 id="titre_generale" className=" font-LibreBaskerville border-b-2 border-[#1a2536] ... ">Localisation</h1>
                        {/* le champs pour entre les wilaya*/}
                        <div className="pd-4 my-3">
                            <label className="block text-base font-bold pb-4 font-Montserrat  text-sky-900 " id ="utile"
                            >Wilaya</label>
                            <select name="wilaya" className="border-1 border-bleu-20 p-2 rounded-md focus:ring-2 focus:ring-bleu-500 ring-inset"
                            htmlFor="country" id ="utile">
                                <option value="Alger">Alger</option>
                            </select>
                        </div>

                        {/* le champs pour entre la commune*/}
                        <div className="pd-4 my-3">
                            <label className="block text-base font-bold pb-4 font-Montserrat  text-sky-900 "
                            id ="utile"
                            >Commune</label>
                            <select name="commune" className="border-1 border-bleu-20 p-2 rounded-md focus:ring-2 focus:ring-bleu-500 ring-inset"
                            htmlFor="country" id ="utile">
                                <option value="El-harrache">El-harrache</option>
                            </select>
                        </div>

                            {/* le champs pour entre l'adresse de bien immobilier */}
                            <div className="pd-4 my-3">
                            <label className="block text-base font-bold pb-4 font-Montserrat  text-sky-900 "
                            htmlFor="nom"
                            id ="utile"
                            >Adresse de bien immobilier</label>
                            <input 
                            id ="utile"
                            className="border-1 border-bleu-20 p-2 rounded-md focus:ring-2 focus:ring-bleu-500 ring-inset"
                            type="text" name="Adress" placeholder="Entre votre Addresse" />
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
            className="text-white bg-gradient-to-br from-[#1a2536] to-sky-900 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-sky-900 dark:focus:ring-[#1a2536] font-medium rounded-lg text-sm px-5 py-2.5 text-center  mb-2">
            Ajouter</button>
            <button type="reset"  id ="Annuler"className="text-white bg-gradient-to-br from-[#1a2536] to-sky-900 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-sky-900 dark:focus:ring-[#1a2536] font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
            Annuler</button>
                
            </div>
        
        </form>
    
    </div>
  )
}

export default AjouterAnnonce;
