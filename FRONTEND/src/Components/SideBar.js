import { Button, Drawer } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';
import { Link } from 'react-router-dom'

function SideBar() {
    const [state, setState] = useState({ left: false, right: false, });
    const { logout } = useLogout()
    const navigate = useNavigate()
    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState({ ...state, [anchor]: open });
    };
    const handleLogout = () => {
        logout()
        navigate("/")
    }

    return (
        <React.Fragment key="left">

            <Drawer className=" h-screen w-96 sticky top-0" open={state["left"]} onClose={toggleDrawer("left", false)} >
                <div className="w-full h-full overflow-y-auto py-4 px-6 bg-slate-900 text-white  ">
                    <Link to="/Home" className="flex items-center pl-2.5 mb-5">
                        <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-7" alt="Flowbite Logo" />
                        <span className="self-center text-xl font-semibold whitespace-nowrap ">Real Estate</span>
                    </Link>
                    <ul className="space-y-4 mt-10">
                        <li>
                            <Link to="/user"> <div className="flex cursor-pointer items-center p-2 text-base font-normal  rounded-lg  hover:bg-gray-100 hover:text-black ">
                                <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
                                <span className="flex-1 ml-3 whitespace-nowrap">Mon compte</span>
                            </div></Link>
                        </li>
                        <li>
                            <Link to="/user"><div className="flex cursor-pointer items-center p-2 text-base font-normal rounded-lg  hover:bg-gray-100 hover:text-black ">
                                <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75  group-hover:text-gray-900 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd"></path></svg>
                                <span className="ml-3">Mes Annonces</span>
                            </div></Link>
                        </li>
                        <li>
                            <Link to="/user"><div className="flex cursor-pointer items-center p-2 text-base font-normal  rounded-lg  hover:bg-gray-100 hover:text-black ">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75  group-hover:text-gray-900 ">
                                    <path fillRule="evenodd" d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97z" clipRule="evenodd" />
                                </svg>

                                <span className="flex-1 ml-3 whitespace-nowrap">Messages</span>
                            </div></Link>
                        </li>

                        <li>
                            <Link to="/AjouterAnnonce">
                                <div className="flex cursor-pointer items-center p-2 text-base font-normal  rounded-lg  hover:bg-gray-100 hover:text-black">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75  group-hover:text-gray-900 ">
                                        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z" clipRule="evenodd" />
                                    </svg>

                                    <span className="flex-1 ml-3 whitespace-nowrap">Ajouter annonce</span>
                                </div>
                            </Link>
                        </li>


                    </ul>
                    <div className="flex cursor-pointer items-center absolute inset-x-2 bottom-8 px-6  py-2 text-base font-normal  rounded-lg  hover:bg-gray-100 hover:text-black ">
                        <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75  group-hover:text-gray-900 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clipRule="evenodd"></path></svg>
                        <button className="flex-1 ml-3 whitespace-nowrap" onClick={handleLogout}>Déconnecter</button>
                    </div>
                </div>
            </Drawer>
            <Button onClick={toggleDrawer("left", true)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="black" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </Button>
        </React.Fragment>
    )
}

export default SideBar