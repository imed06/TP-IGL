import React from 'react'
import Avatar from '@mui/material/Avatar';
import { deepPurple } from '@mui/material/colors';
import { Button, Divider } from '@mui/material';
import Combo from './Combobox';
import { useState } from 'react';
import Datepicker from "react-tailwindcss-datepicker";
import { Drawer } from '@mui/material'

function SideBar() {
    const [value, setValue] = useState({
        startDate: null,
        endDate: null
    });
    const [DropDown, setDropDown] = useState(false);
    const handleValueChange = (newValue) => {
        console.log("newValue:", newValue);
        setValue(newValue);
    }
    const type = [
        { id: 1, name: 'Vendre' },
        { id: 2, name: 'Location' },
        { id: 3, name: 'Loyer' },
    ]
    const Wilaya = [
        { id: 1, name: 'Alger' },
        { id: 2, name: 'Oran' },
        { id: 3, name: 'Constantine' },

    ]
    const Commune = [
        { id: 1, name: 'Alger' },
        { id: 2, name: 'Location' },
        { id: 3, name: 'Loyer' },
    ]
    const [state, setState] = React.useState({
        left: false,
    });
    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };
    return (
        <div>
            <React.Fragment key="left">
                <Drawer className=" h-screen w-72 sticky top-0" open={state["left"]} onClose={toggleDrawer("left", false)} >
                    <div className="w-full h-full overflow-y-auto py-4 px-3 bg-slate-900 text-white rounded dark:bg-gray-800">
                        <a href="https://flowbite.com/" className="flex items-center pl-2.5 mb-5">
                            <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-7" alt="Flowbite Logo" />
                            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
                        </a>
                        <ul className="space-y-2">
                            <li>
                                <div className="flex cursor-pointer items-center p-2 text-base font-normal rounded-lg dark:text-white hover:bg-gray-100 hover:text-black dark:hover:bg-gray-700">
                                    <svg aria-hidden="true" className="w-6 h-6 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
                                    <span className="ml-3">Mes Annonces</span>
                                </div>
                            </li>
                            <li>
                                <div className="flex cursor-pointer items-center p-2 text-base font-normal text-gray-500 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
                                    <span className="flex-1 ml-3 whitespace-nowrap">Favoris</span>
                                </div>
                            </li>
                            <li>
                                <div className="flex cursor-pointer items-center p-2 text-base font-normal text-gray-500 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path><path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path></svg>
                                    <span className="flex-1 ml-3 whitespace-nowrap">Messages</span>
                                </div>
                            </li>
                            <li>
                                <div className="flex cursor-pointer items-center p-2 text-base font-normal text-gray-500 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
                                    <span className="flex-1 ml-3 whitespace-nowrap">Account</span>
                                </div>
                            </li>
                            <li>
                                <div className="flex cursor-pointer items-center p-2 text-base font-normal text-gray-500 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd"></path></svg>
                                    <span className="flex-1 ml-3 whitespace-nowrap">Ajouter annonce</span>
                                </div>
                            </li>
                            <li>
                                <div className="flex cursor-pointer  items-center mt-56 p-2 text-base font-normal text-gray-500 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z" clipRule="evenodd"></path></svg>
                                    <span className="flex-1 ml-3 whitespace-nowrap">Help</span>
                                </div>
                            </li>
                            <li>
                                <div className="flex cursor-pointer items-center  p-2 text-base font-normal text-gray-500 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clipRule="evenodd"></path></svg>
                                    <span className="flex-1 ml-3 whitespace-nowrap">Log Out</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </Drawer>
            </React.Fragment>
            <div className="w-full flex flex-col sticky top-0 divide-y divide-gray-100 ">
                <nav className="w-full   bg-white sticky top-0 border-gray-200  rounded dark:bg-gray-900">
                    <div className="container flex flex-wrap items-center justify-between mx-auto">
                        <div>
                            <Button onClick={toggleDrawer("left", true)}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="black" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                            </Button>
                        </div>
                        <div className="flex md:order-1 justify-between items-center w-1/2">
                            <div className=" relative w-5/6  md:block">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg className="w-5 h-5 text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                                    <span className="sr-only">Search icon</span>
                                </div>
                                <input type="text" id="search-navbar" className="block w-full p-1 pl-10 text-lg focus-visible:border-blue-500 focus-visible:ring-blue-500 text-gray-900 border border-gray-300 rounded-lg bg-white " placeholder="Search..." />
                            </div>
                            <div className="flex ml-2  mt-3 items-center">
                                <button type="button" className="text-white bg-blue-700 hover:bg-blue-800   focus:outline-none focus:ring-[#FF9119]/50 font-medium rounded-lg text-sm px-5 py-2 text-center inline-flex items-center dark:hover:bg-[#FF9119]/80 dark:focus:ring-[#FF9119]/40  mb-2.5">
                                    RECHERCHER
                                </button>
                            </div>
                        </div>
                        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-3" id="navbar-search">
                            <div className="flex flex-col px-8 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                                <div>
                                    <div className='cursor-pointer'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="black" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <div className='cursor-pointer'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="black" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                </div>
                                {DropDown ? <div className=" absolute -z-50  my-8 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
                                    <div className="px-4 py-3">
                                        <span className="block text-sm text-gray-900 dark:text-white">Triki imed</span>
                                        <span className="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">name@flowbite.com</span>
                                    </div>
                                    <ul className="py-1" aria-labelledby="user-menu-button">
                                        <li>
                                            <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white cursor-pointer">Mon profile</div>
                                        </li>
                                        <li>
                                            <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white cursor-pointer">Mes annonces</div>
                                        </li>
                                        <li>
                                            <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white cursor-pointer">Messages</div>
                                        </li>
                                        <li>
                                            <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white cursor-pointer">Déconnecté</div>
                                        </li>
                                    </ul>
                                </div> : null}
                                <Avatar sx={{ bgcolor: deepPurple[500], width: 25, height: 25 }} onClick={() => setDropDown(!DropDown)}>I</Avatar>
                            </div>
                        </div>
                    </div>
                </nav>
                <nav className=" dark:bg-gray-700 bg-white shadow-sm ">
                    <div className="max-w-screen-xl px-2 py-2 mx-auto md:px-6">
                        <div className="flex justify-center items-center">
                            <ul className="flex flex-row mt-0 mr-6 space-x-16 text-sm font-medium">
                                <li>
                                    <Combo filter="Wilaya" values={Wilaya} />
                                </li>
                                <li>
                                    <Combo filter="Commune" values={Wilaya} />
                                </li>
                                <li>
                                    <Combo filter="Type" values={type} />
                                </li>
                                <li>
                                    <Datepicker
                                        placeholder={"Choisir une date"}
                                        useRange={false}
                                        value={value}
                                        onChange={handleValueChange}
                                    />
                                </li>
                            </ul>
                        </div>
                    </div>
                    <Divider light />
                </nav>
            </div>
        </div>
    )
}

export default SideBar