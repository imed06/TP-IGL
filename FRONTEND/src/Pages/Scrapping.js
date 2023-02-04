import React, { useEffect } from 'react'
import { useContext , useState } from 'react';
import { json, Navigate, useNavigate } from 'react-router-dom';

export default function Scrapping() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [load2, setLoad2] = useState(false);
    const [load1, setLoad1] = useState(false);
    const [respo , setRespo] = useState('');

    //------------------------------------------------------------------------------------------------------//
          const handleClick1 = async () => {
            setLoading(true);
            try {
              const response = await fetch("http://127.0.0.1:5000/Annonces/scrapper1", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
              });
              if (response.ok) {
                setLoad1(true);
              }
              
              const data = await response.json();
              console.log(data);
              
              //document.getElementById("myH3").innerHTML = data;
            } catch (error) {
              console.error(error);
            } finally {
              setLoading(false);
            }
           
          };
    //------------------------------------------------------------------------------------------------------//

        const handleClick2 = async () => {
          setLoading(true);
          try {
            const response = await fetch("http://127.0.0.1:5000/Annonces/scrapper1", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
            });
           
            if (response.ok) {
              setLoad2(true);
            }

            const data = await response.json();
            console.log(data);
            
          //  document.getElementById("myH3").innerHTML = data;
          } catch (error) {
            console.error(error);
          } finally {
            setLoading(false);
          }
        };

    //-----------------------------------------------------------------------------------------------------//

  const [stateOnglets , setStateOnglets] =useState(1);
  const scrappe1 = () => { 
      setStateOnglets(1);
      setLoad1(false);
  }
  const scrappe2 = () => {
      setStateOnglets(2);
      setLoad2(false);
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
                <div className='ml-10 mr-10 mt-5 mb-10  bg-[rgb(255,255,255)]  p-16 rounded-lg' >
                      <h3 className='text-center font-Montserrat text-sky-900 mb-6 text-base font-extrabold'>site : AnnonceAlgerie</h3>
                      
                      
                    
                    <div className='  flex flex-col items-center text-base font-lg  justify-between mt-9 '>
                          
                              <div>
                              
                                <h3 className='m-3  p-2  text-base font-bold text-sky-600' id ='myH3'>  {load1 ? "récuperation d'annonce et fait avec succès" : " "} </h3>
                              </div> 

                          <div>
                                    <button onClick={handleClick1} disabled={loading} 
                                    id="Recuperer" 
                                  className="text-white bg-gradient-to-br ml-5 mr-5 font-LibreBaskerville from-[#1a2536] to-sky-900 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-sky-900 dark:focus:ring-[#1a2536] font-medium rounded-lg text-sm px-5 py-2 text-center  mb-2">
                                  
                                  {loading ? "Loading..." : " Récupérer"}
                                  </button>
                                
                            
                                  <button type="submit"   id="Recuperer" onClick={()=> navigate(-1) }
                                  className="text-white bg-gradient-to-br mr-5 font-LibreBaskerville from-[#1a2536] to-sky-900 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-sky-900 dark:focus:ring-[#1a2536] font-medium rounded-lg text-sm px-5 py-2 text-center  mb-2">
                                  Déconnecter
                                  </button>
                          </div> 
                        
                    </div>
                
                        
                </div>
       
         </div>
         
         :
         <div> 
                  <div className='ml-10 mr-10 mt-5 mb-10  bg-[rgb(255,255,255)]  p-16 rounded-lg' >
                        <h3 className='text-center font-Montserrat text-sky-900 mb-6 text-base font-extrabold'>site : AnnonceAlgerie</h3>
                        
                        
                      
                      <div className='  flex flex-col items-center text-base font-lg  justify-between mt-9 '>
                            
                          <div>
                      
                            <h3 className='m-3  p-2  text-base font-bold text-sky-600' id ='myH3'>  {load2 ? "récuperation d'annonce et fait avec succès" : " "} </h3>
                          </div>  
                                           

                                                              <div>
                                                                    <button onClick={handleClick2} disabled={loading} 
                                                                    id="Recuperer" 
                                                                  className="text-white bg-gradient-to-br ml-5 mr-5 font-LibreBaskerville from-[#1a2536] to-sky-900 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-sky-900 dark:focus:ring-[#1a2536] font-medium rounded-lg text-sm px-5 py-2 text-center  mb-2">
                                                                  
                                                                  {loading ? "Loading..." : " Récupérer"}
                                                                  </button>
                                                      
                                                  
                                                                  <button type="submit"   id="Recuperer" onClick={()=> navigate(-1) }
                                                                  className="text-white bg-gradient-to-br mr-5 font-LibreBaskerville from-[#1a2536] to-sky-900 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-sky-900 dark:focus:ring-[#1a2536] font-medium rounded-lg text-sm px-5 py-2 text-center  mb-2">
                                                                  Déconnecter
                                                                  </button>
                                                                </div> 
                                              
                        </div>                  
                  
                          
                        </div> 
                     </div>
                }

                </div>     
                </div>
    </div>
  )
}
