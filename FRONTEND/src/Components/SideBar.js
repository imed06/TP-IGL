import React from 'react'
import { Button } from '@mui/material';
import Combo from './Combobox';
import { useState } from 'react';
import Datepicker from "react-tailwindcss-datepicker";
import { Drawer } from '@mui/material'
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Logout from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';

function SideBar() {
    const [value, setValue] = useState({
        startDate: null,
        endDate: null
    });
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
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
        right: false,
        right_1: false,
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
                    <div className="w-full h-full overflow-y-auto py-4 px-3 bg-[#0E213F] text-white  dark:bg-[#0E213F]">
                        <a href="https://flowbite.com/" className="flex items-center pl-2.5 mb-5">
                            <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-7" alt="Flowbite Logo" />
                            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
                        </a>
                        <ul className="space-y-2">
                            <li>
                                <div className="flex cursor-pointer items-center p-2 text-base font-normal rounded-lg dark:text-[#D4BB83] hover:bg-gray-100 hover:text-[#C38A19] dark:hover:bg-[#66625b]">
                                    <svg aria-hidden="true" className="w-6 h-6 transition duration-75 dark:text-gray-[#D6A22C] group-hover:text-bg-gray-100 dark:group-hover:text-[#D6A22C]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
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
                                <div className="flex cursor-pointer items-center bg mb-0 p-2 text-base font-normal text-gray-500 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clipRule="evenodd"></path></svg>
                                    <span className="flex-1 ml-3 whitespace-nowrap">Log Out</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </Drawer>
            </React.Fragment>
            <React.Fragment key="right">
                <Drawer className=" h-screen w-72 sticky rounded-md top-0" anchor='right' open={state["right"]} onClose={toggleDrawer("right", false)} >
                    <Box sx={{ width: 350 }} >
                        <div className='flex items-center flex-col'>
                            <div className='w-full h-16 text-lg flex flex-row justify-around font-bold items-center top-0 bg-blue-700  text-white'>
                                <div></div>
                                <div className='flex flex-row items-center '>
                                    <div className='cursor-pointer mr-1'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                                        </svg>
                                    </div>
                                    Messagerie
                                </div>
                                <div className='cursor-pointer' onClick={toggleDrawer("right", false)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </div>
                            </div>
                            <div className=" relative w-5/6   mt-8">
                                <input type="text" id="search-navbar" className="block w-full p-1 pl-5 text-lg focus-visible:border-blue-500 focus-visible:ring-blue-500 text-[#0E213F] border border-gray-500 rounded-2xl bg-white " placeholder="Rechercher des contacts" />
                                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                    <svg className="w-5 h-5 text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                                    <span className="sr-only">Search icon</span>
                                </div>
                            </div>
                            <div className='flex items-center flex-col justify-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="gray" className="w-28 h-28 mt-10">
                                    <path d="M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 00-1.032-.211 50.89 50.89 0 00-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 002.433 3.984L7.28 21.53A.75.75 0 016 21v-4.03a48.527 48.527 0 01-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979z" />
                                    <path d="M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94 1.243.102 2.5.157 3.768.165l2.782 2.781a.75.75 0 001.28-.53v-2.39l.33-.026c1.542-.125 2.67-1.433 2.67-2.94v-4.286c0-1.505-1.125-2.811-2.664-2.94A49.392 49.392 0 0015.75 7.5z" />
                                </svg>
                                <h2 className='text-slate-500 text-center '>Aucune conversation pour vous</h2>
                            </div>
                        </div>
                    </Box>
                </Drawer>
            </React.Fragment>
            <React.Fragment key="right_1">
                <Drawer className=" h-screen w-72 sticky rounded-md top-0" anchor='right' open={state["right_1"]} onClose={toggleDrawer("right_1", false)} >
                    <Box sx={{ width: 350 }} >
                        <div className='flex items-center flex-col'>
                            <div className='w-full h-16 text-lg flex flex-row justify-around font-bold items-center top-0 bg-blue-700  text-white'>
                                <div></div>
                                <div className='flex flex-row items-center '>
                                    <div className='cursor-pointer mr-1'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                                        </svg>
                                    </div>
                                    Favoris
                                </div>
                                <div className='cursor-pointer' onClick={toggleDrawer("right_1", false)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </Box>
                </Drawer>
            </React.Fragment>
            <div className="w-full flex flex-col sticky top-0 divide-y divide-gray-100 ">
                <nav className="w-full  mb-0 bg-white sticky top-0 border-gray-200  rounded-sm dark:bg-[#0E213F]">
                    <div className="container flex flex-wrap items-center justify-between mx-auto">
                        <div>
                            <Button onClick={toggleDrawer("left", true)}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#FF9119" className="w-6 h-6">
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
                            <div className="flex flex-col items-center px-8 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0  dark:bg-[#0E213F] md:dark:bg-[#0E213F] dark:border-gray-700">
                                <div>
                                    <div className='cursor-pointer'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#FF9119" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5" />
                                        </svg>
                                    </div>
                                </div>
                                <div onClick={toggleDrawer("right_1", true)} >
                                    <div className='cursor-pointer'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#FF9119" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                                        </svg>
                                    </div>
                                </div>

                                <div onClick={toggleDrawer("right", true)}>
                                    <div className='cursor-pointer'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#FF9119" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                                        </svg>
                                    </div>
                                </div>

                                <div >
                                    <div className='cursor-pointer'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#FF9119" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <React.Fragment>
                                        <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                                            <Tooltip title="Account settings">
                                                <IconButton
                                                    onClick={handleClick}
                                                    size="small"
                                                    aria-controls={open ? 'account-menu' : undefined}
                                                    aria-haspopup="true"
                                                    aria-expanded={open ? 'true' : undefined}
                                                >
                                                    <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
                                                </IconButton>
                                            </Tooltip>
                                        </Box>
                                        <Menu
                                            anchorEl={anchorEl}
                                            id="account-menu"
                                            open={open}
                                            onClose={handleClose}
                                            onClick={handleClose}
                                            PaperProps={{
                                                elevation: 0,
                                                sx: {
                                                    overflow: 'visible',
                                                    filter: 'drop-shadow(0px 2px 2px rgba(0,0,0,0.32))',
                                                    mt: 1.5,
                                                    '& .MuiAvatar-root': {
                                                        width: 32,
                                                        height: 32,
                                                        ml: -0.5,
                                                        mr: 1,
                                                    },
                                                    '&:before': {
                                                        content: '""',
                                                        display: 'block',
                                                        position: 'absolute',
                                                        top: 0,
                                                        right: 14,
                                                        width: 10,
                                                        height: 10,
                                                        bgcolor: 'background.paper',
                                                        transform: 'translateY(-50%) rotate(45deg)',
                                                        zIndex: 0,
                                                    },
                                                },
                                            }}
                                            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                        >
                                            <div className='ml-5 font-light'>Utiliser le site au tant que :</div>
                                            <MenuItem>
                                                <Avatar /> Triki imed
                                            </MenuItem>

                                            <Divider />

                                            <MenuItem>
                                                <ListItemIcon>
                                                    <PersonIcon fontSize="small" />
                                                </ListItemIcon>
                                                Accéder à mon compte
                                            </MenuItem>

                                            <MenuItem>
                                                <ListItemIcon>
                                                    <Logout fontSize="small" />
                                                </ListItemIcon>
                                                Se déconnecter
                                            </MenuItem>
                                        </Menu>
                                    </React.Fragment>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
                <nav className=" rounded-sm mt-0 dark:bg-[#4C6989] bg-white  ">
                    <div className="max-w-screen-xl px-2 py-2 mx-auto md:px-6">
                        <div className="flex justify-center items-center">
                            <ul className="flex flex-row mt-0 mr-6 space-x-16 text-sm font-medium items-center">
                                <li>
                                    <div className='flex flex-row items-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#D6A22C" className="w-5 mt-0 h-5 mr-1">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
                                        </svg>
                                        <span className='text-lg'>filter par : </span>
                                    </div>
                                </li>
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