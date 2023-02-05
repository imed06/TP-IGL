import React, { useEffect } from 'react'
import { useContext, useState } from 'react';
import { json, Navigate, useNavigate } from 'react-router-dom';
import SideBar from '../Components/SideBar';
import { useLogout } from '../hooks/useLogout';

function Admin() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [load2, setLoad2] = useState(false);
    const [load1, setLoad1] = useState(false);
    const { logout } = useLogout()
    const [users, setUsers] = useState()

    const handleLogout = () => {
        logout()
        navigate("/")
    }

    useEffect(()=>{
        const GetUsers = async () =>{
            const response = await fetch("http://localhost:5000/user/users")
            const json = await response.json()
            setUsers(json)
        }
        GetUsers()
    },[])

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
                const json = await response.json()
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
                const json = await response.json()
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

    const [stateOnglets, setStateOnglets] = useState(1);
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
        <div className='admin_page flex flex-col w-full items-center justify-center  rounded-lg bg-center ' style={{ backgroundColor: "#E6F0FF", minHeight: "100vh" }}>
            <div className=" flex items-center bg-white justify-between p-2 shadow-md w-full ">
                <div></div>
                <div className='flex '>
                    <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-8" alt="Flowbite Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap ">Real Estate</span>
                </div>
                <div className='bg-white'></div>
            </div>
            <div className=' flex items-center py-16 pr-20 pl-20 rounded-lg  justify-center flex-col  w-full'>
                <h1 className=' text-center  text-2xl  font-semibold text-yellow-600'> Lancer la récupération d'annonce</h1>
                <div className='other-component mt-6 rounded-lg  '>
                    <div id="onglets" className='p-5 mt-6 '>
                        <div id="cree" className={`onglet_cree ${stateOnglets === 1 ? 'active' : ''} hover:bg-gray-200 rounded-lg cursor-pointer text-black py-2 px-2  text-lg items-center`} onClick={scrappe1}>site 1 : Annonce Algerie</div>
                        <div id="save" className={`onglet_save ${stateOnglets === 2 ? 'active' : ''} hover:bg-gray-200 rounded-lg cursor-pointer text-black py-2 px-2  text-lg  items-center`} onClick={scrappe2}>site 2 : feedly</div>
                    </div>

                    {stateOnglets === 1 ?

                        <div>
                            <div className='ml-10 mr-10  mb-10    p-16 rounded-lg' >
                                <h3 className='text-center font-Montserrat text-sky-900 mb-6 text-base  font-extrabold'>site : AnnonceAlgerie</h3>



                                <div className='  flex flex-col items-center text-base font-lg  justify-between mt-9 '>

                                    <div>

                                        <h3 className='m-3  p-2  text-base font-bold text-sky-600' id='myH3'>  {load1 ? "récuperation d'annonce et fait avec succès" : " "} </h3>
                                    </div>

                                    <div>
                                        <button onClick={handleClick1} disabled={loading}
                                            id="Recuperer"
                                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">

                                            {loading ? "Loading..." : " Récupérer"}
                                        </button>


                                        <button type="submit" id="Recuperer" onClick={handleLogout}
                                            className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                                            Déconnecter
                                        </button>
                                    </div>

                                </div>


                            </div>

                        </div>

                        :
                        <div>
                            <div className='ml-10 mr-10  mb-10    p-16 rounded-lg' >
                                <h3 className='text-center font-Montserrat text-sky-900 mb-6 text-base font-extrabold'>site : feedly</h3>



                                <div className='  flex flex-col items-center text-base font-lg  justify-between mt-9 '>

                                    <div>

                                        <h3 className='m-3  p-2  text-base font-bold text-sky-600' id='myH3'>  {load2 ? "récuperation d'annonce et fait avec succès" : " "} </h3>
                                    </div>


                                    <div>
                                        <button onClick={handleClick2} disabled={loading}
                                            id="Recuperer"
                                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">

                                            {loading ? "Loading..." : " Récupérer"}
                                        </button>


                                        <button type="submit" id="Recuperer" onClick={handleLogout}
                                            className=" focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                                            Déconnecter
                                        </button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    }

                </div>

                <h1 className=' text-center  text-2xl  font-semibold text-yellow-600'> Liste des Utilisateurs</h1>

                <div class="m-8 w-full bg-white overflow-x-auto">

                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-white dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="px-6 py-3">
                                    nom
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    email
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    numero De Telephone
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    adresse
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {users && users.map((m) => {
                                return (
                                    !m.UserType && <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {m.name}
                                        </th>
                                        <td class="px-6 py-4">
                                            {m.email}
                                        </td>
                                        <td class="px-6 py-4">
                                            {m.numeroDeTelephone}
                                        </td>
                                        <td class="px-6 py-4">
                                            {m.adresse}
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
}

export default Admin