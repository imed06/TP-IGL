import React from 'react'
import pic2 from '../images/pic2.jpeg'
import '../styles/Compte.css'
export default function Compte() {
  return (
<div  className="pt-2  bg-blueGray-50 ">
<div className=" lg:px-12 px-0 ">
  <div className=" flex flex-col min-w-0 break-words w-full  shadow-xl rounded-lg mt-3">
    <div className="pt-4 pb-4  bg-[#f5ebd6] rounded-lg " id="compte_ut">
      <div className="continoure_image  flex justify-center">
               
               <img src={pic2} id="image_profile"
                   
                   alt="profile_picture" />
                   
           </div> 
           {/* className="shadow-xl rounded-full  align-middle  " */}
      <div className="nombre_f_en flex flex-wrap  ">
      
        <div className="nombre_f_en_secondo w-full h-full  text-center justify-center">
          
           
           <div className="flex justify-center py-2 lg:pt-2 pt-4  ">
          
            <div className="mr-4 p-2 text-center">
              <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                2
              </span>
              <span className="text-sm text-blueGray-400">Annonces</span>
            </div>
            <div className="lg:mr-4 p-3 text-center">
              <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                89
              </span>
              <span className="text-sm text-blueGray-400">Favoris</span>
            </div>
          </div> 
        </div>
      </div>
      <div className="text-center mt-2">
        <h3 className="text-xl font-semibold leading-normal text-blueGray-700 mb-2">
          Imad teriki
        </h3>
        <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
          <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
           Alger , Ouad-semar
        </div>
       
      </div>
      
    </div>
  </div>
    {/* les annonce je vais les ajoute ici */}
   
</div>

</div>
  )
}
