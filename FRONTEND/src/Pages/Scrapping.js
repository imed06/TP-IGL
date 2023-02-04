import React, { useEffect } from 'react'
import { useContext , useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

export default function Scrapping() {
    const navigate = useNavigate();
    const [ page_debut , setpage_debut] = useState(0);
    const [ page_fin , setpage_fin] = useState(0);
    const [showModal, setShowModal] = useState(false);
    


  const handleSubmit1 = async(e) => {
		e.preventDefault();
		
    
		 const response = await fetch('http://127.0.0.1:8000/scraping/AnnonceAlgerie', {
		 	method: 'POST',
		
			
			
		 	headers: {
        'Content-Type': 'application/json'			},
		 	body: JSON.stringify({
        "page_debut" :  page_debut ,
        "page_fin" : page_fin
		 	}),
		 })
    
     const json = await response.json()
     console.log(json)
	};
  const handleSubmit2 = async(e) => {
		e.preventDefault();
		
    
		 const response = await fetch('http://127.0.0.1:8000/scraping/darjdida', {
		 	method: 'POST',
		
			
			
		 	headers: {
        'Content-Type': 'application/json'			},
		 	body: JSON.stringify({
        "page_debut" :  page_debut ,
        "page_fin" : page_fin
		 	}),
		 })
     const json = await response.json()
     console.log(json)
	};

  const [stateOnglets , setStateOnglets] =useState(1);
  const scrappe1 = () => { 
      setStateOnglets(1);
  }
  const scrappe2 = () => {
      setStateOnglets(2);
  }
  // bg-[#1e3252]
  return (
    <div className='admin_page flex items-center pt-7 pb-7 justify-center mt-10  lg:m-10 m-2 rounded-lg bg-center bg-[#f1f3f7]'>
    <div className=' flex items-center py-16 pr-20 pl-20 rounded-lg shadow bg-[#ffffff] justify-center flex-col'>
          <h1 className=' text-center  text-2xl  font-semibold text-yellow-600'> Lancer la récupération d'annonce : </h1> 
          <div className='other-component mt-6 rounded-lg  bg-[#e4e7ec]'>
                <div id="onglets" className='p-5 mt-6 bg-[#e4e7ec]'>
                    <div id="cree" className={`onglet_cree ${stateOnglets === 1 ? 'active' : ''} ` } onClick={scrappe1}>site 1</div>
                    <div id="save" className={`onglet_save ${stateOnglets === 2 ? 'active' : ''} ` } onClick={scrappe2}>site 2</div>
                </div> 
                {stateOnglets === 1 ?    
          <div> 
         <form className='ml-10 mr-10 mt-5 mb-10  bg-[rgb(255,255,255)]  p-16 rounded-lg' onSubmit={handleSubmit1}>
              <h3 className='text-center font-Montserrat text-sky-900 mb-6 text-base font-extrabold'>site : AnnonceAlgerie</h3>
               
            <div>
                <label htmlFor="" className='font-Montserrat text-base font-extrabold text-sky-900'>Page début :</label>
                <input type="tel" name="debut"
                 value={page_debut}
                 onChange={(e) => setpage_debut(e.target.value)}
                 className='m-4 p-2  rounded-lg'/>
            
            </div>
            <div>
                <label htmlFor="" className='mr-6 font-Montserrat font-extrabold text-base text-sky-900'>Page fin :</label>
                <input type="tel" name="fin"
                 value={page_fin}
                 onChange={(e) => setpage_fin(e.target.value)}
                 className='m-4 p-2  rounded-lg'/>
                   
            </div>
              
            
             <div className='  flex items-center justify-between mt-9 '>
             {/* onClick={()=>navigate('Success')} */}
             <button type="submit" 
               id="Recuperer" 
            className="text-white bg-gradient-to-br ml-5 mr-5 font-LibreBaskerville from-[#1a2536] to-sky-900 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-sky-900 dark:focus:ring-[#1a2536] font-medium rounded-lg text-sm px-5 py-2 text-center  mb-2">
            Récupérer</button>
            
      
            <button type="submit"   id="Recuperer" 
            className="text-white bg-gradient-to-br mr-5 font-LibreBaskerville from-[#1a2536] to-sky-900 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-sky-900 dark:focus:ring-[#1a2536] font-medium rounded-lg text-sm px-5 py-2 text-center  mb-2">
            Déconnecter</button>
             </div>
         
                
         </form>
       
         </div>
         
         :
         <div> 
         <form className='ml-10 mr-10 mt-5 mb-10  bg-[#ffffff]   p-16 rounded-lg' onSubmit={handleSubmit2}>
         <h3 className='text-center font-Montserrat text-sky-900 mb-6  text-base font-extrabold'> site :  darjdida</h3>
               
            <div>
                <label htmlFor="" className='font-Montserrat text-base font-extrabold text-sky-900'>Page début :</label>
                <input type="tel" name="debut"
                 value={page_debut}
                 onChange={(e) => setpage_debut(e.target.value)}
                 className='m-4 p-2  rounded-lg'/>
            
            </div>
            <div>
                <label htmlFor="" className='mr-6 font-Montserrat font-extrabold text-base text-sky-900'>Page fin :</label>
                <input type="tel" name="fin"
                 value={page_fin}
                 onChange={(e) => setpage_fin(e.target.value)}
                 className='m-4 p-2  rounded-lg'/>
                   
            </div>
              
            
             <div className='  flex items-center justify-between mt-9 '>
             {/* onClick={()=>navigate('Success')} */}
             <button type="submit" 
               id="Recuperer" 
            className="text-white bg-gradient-to-br ml-5 mr-5 font-LibreBaskerville from-[#1a2536] to-sky-900 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-sky-900 dark:focus:ring-[#1a2536] font-medium rounded-lg text-sm px-5 py-2 text-center  mb-2">
            Récupérer</button>
            <button type="submit"   id="Recuperer" onClick={()=> navigate(-1)}
            className="text-white bg-gradient-to-br mr-5 font-LibreBaskerville from-[#1a2536] to-sky-900 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-sky-900 dark:focus:ring-[#1a2536] font-medium rounded-lg text-sm px-5 py-2 text-center  mb-2">
            Déconnecter</button>
             </div>  
                
         </form>
         </div>
                }

                </div>     
                </div>
    </div>
  )
}
