import React, { useEffect, useState } from 'react'
import Combo from './Combobox';
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
import { useLogout } from '../hooks/useLogout';
import { useNavigate } from 'react-router-dom';
import SideBar from './SideBar';
import { Link } from 'react-router-dom'
import { useAuthContext } from '../hooks/useAuthContext';

function NavBar({ setAnnoncesRech, setAnnoncesFilt }) {
    const { user } = useAuthContext()
    const { logout } = useLogout()
    const navigate = useNavigate()
    const [recherche, setRecherche] = useState("")
    const [filter, setFilter] = useState("")
    const [wilaya, setWilaya] = useState("")
    const [commune, setCommune] = useState("")
    const [Type, setType] = useState("")
    const [date, setValue] = useState({ startDate: null, endDate: null });
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const [state, setState] = useState({ left: false, right: false, });
    const handleLogout = () => {
        logout()
        navigate("/")
    }

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleValueChange = (newValue) => {
        setValue(newValue);
    }

    const type = [
        { id: 0, name: '' },
        { id: 1, name: 'Terrain' },
        { id: 2, name: 'Terrain Agricole' },
        { id: 3, name: 'Appartement' },
        { id: 4, name: 'Maison' },
        { id: 5, name: 'Bungalow' },
    ]
    const Wilaya = [
        { id: 0, name: '' },
        { id: 1, name: "Adrar" },
        { id: 2, name: "Chlef" },
        { id: 3, name: "Laghouat" },
        { id: 4, name: "Oum el-Bouaghi" },
        { id: 5, name: "Batna" },
        { id: 6, name: "Béjaïa" },
        { id: 7, name: "Biskra" },
        { id: 8, name: "Béchar" },
        { id: 9, name: "Blida" },
        { id: 10, name: "Bouira" },
        { id: 11, name: "Tamanrasset" },
        { id: 12, name: "Tébessa" },
        { id: 13, name: "Tlemcen" },
        { id: 14, name: "Tiaret" },
        { id: 15, name: "Tizi Ouzou" },
        { id: 16, name: "Alger" },
        { id: 17, name: "Djelfa" },
        { id: 18, name: "Jijel" },
        { id: 19, name: "Sétif" },
        { id: 20, name: "Saïda" },
        { id: 21, name: "Skikda" },
        { id: 22, name: "Sidi Bel Abbès" },
        { id: 23, name: "Annaba" },
        { id: 24, name: "Guelma" },
        { id: 25, name: "Constantine" },
        { id: 26, name: "Médéa" },
        { id: 27, name: "Mostaganem" },
        { id: 28, name: "Msila" },
        { id: 29, name: "Mascara" },
        { id: 30, name: "Ouargla" },
        { id: 31, name: "Oran" },
        { id: 32, name: "El Bayadh" },
        { id: 33, name: "Illizi" },
        { id: 34, name: "Bordj Bou Arreridj" },
        { id: 35, name: "Boumerdès" },
        { id: 36, name: "El Taref" },
        { id: 37, name: "Tindouf" },
        { id: 38, name: "Tissemsilt" },
        { id: 39, name: "El Oued" },
        { id: 40, name: "Khenchela" },
        { id: 41, name: "Souk Ahras" },
        { id: 42, name: "Tipaza" },
        { id: 43, name: "Mila" },
        { id: 44, name: "Aïn Defla" },
        { id: 45, name: "Naâma" },
        { id: 46, name: "Aïn Témouchent" },
        { id: 47, name: "Ghardaïa" },
        { id: 48, name: "Relizane" },
        { id: 49, name: "Timimoun" },
        { id: 50, name: "Bordj Badji Mokhtar" },
        { id: 51, name: "Ouled Djellal" },
        { id: 52, name: "Béni Abbès" },
        { id: 53, name: "In Salah" },
        { id: 54, name: "Aïn Guezzam" },
        { id: 55, name: "Touggert" },
        { id: 56, name: "Djanet" },
        { id: 57, name: "El M'Ghair" },
        { id: 58, name: "El Meniaa" },
    ]


    const Commune = [
        { id: 1, name: '' },
        { id: 2, name: 'sidi fraj' },
        { id: 3, name: 'Location' },
        { id: 4, name: 'Loyer' },
    ]

    const handleRecherche = async () => {
        if (recherche !== "") {
            const response = await fetch("http://127.0.0.1:5000/annonce/keyword/?keyword=" + recherche)
            const json = await response.json()
            if (response.ok) {
                if (json.length !== 0) {
                    json.sort((a, b) => b.Date.localeCompare(a.Date));
                    setAnnoncesRech(json)
                }
                else
                    setAnnoncesRech(null)
            }
        }
    }

    useEffect(() => {
        if (recherche === "") {
            setAnnoncesRech(null)
        }
    }, [recherche])


    const handleFilter = async () => {
        if (wilaya !== "Wilaya" && commune !== "Commune" && Type !== "Type") {
            const response = await fetch(`http://127.0.0.1:5000/annonce/filtered/?wilaya=${wilaya}&commune=${commune}&typeDuBien=${Type}`)
            const json = await response.json()
            if (response.ok) {
                if (json.length !== 0) {
                    json.sort((a, b) => b.Date.localeCompare(a.Date));
                    setAnnoncesFilt(json)
                }
            }
        }
    }

    useEffect(() => {
        const handleDate = async () => {
            if (date.startDate !== null && date.endDate !== null) {
                const response = await fetch(`http://127.0.0.1:5000/annonce/filtered/?wilaya=${filter}&commune=${filter}&date1=${date.startDate}&date2=${date.endDate}`)
                const json = await response.json()
                if (response.ok) {
                    if (json.length !== 0) {
                        json.sort((a, b) => b.Date.localeCompare(a.Date));
                        setAnnoncesFilt(json)
                    }
                    else
                        setAnnoncesFilt(null)
                }
            }
            else setAnnoncesFilt(null)

        }
        handleDate()
    }, [date])

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState({ ...state, [anchor]: open });
    };

    const handleClearAll = () => {

        setAnnoncesFilt(null)
        setRecherche("")
    }

    return (
        <div>
            <React.Fragment key="right">
                <Drawer className=" h-screen w-72 sticky rounded-md top-0" anchor='right' open={state["right"]} onClose={toggleDrawer("right", false)} >
                    <Box sx={{ width: 350 }} >
                        <div className='flex items-center flex-col'>
                            <div className='w-full h-16 text-lg flex flex-row justify-around font-bold items-center top-0 bg-blue-700  text-white'>
                                <div></div>
                                <div className='flex flex-row items-center '>
                                    <div className='cursor-pointer mr-2'>
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
                                <input type="text" id="search-navbar" className="block w-full p-1 pl-5 text-lg focus-visible:border-blue-500 focus-visible:ring-blue-500 text-gray-900 border border-gray-500 rounded-2xl bg-white " placeholder="Rechercher des contacts" />
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
            <div className="w-full flex flex-col sticky top-0 divide-y divide-gray-100 ">
                <nav className="w-full   bg-white sticky top-0 border-gray-200  rounded ">
                    <div className="container flex flex-wrap items-center justify-between mx-auto">
                        <div>
                            <SideBar />
                        </div>
                        <div className="flex md:order-1 justify-between items-center w-1/2">
                            <div className=" relative w-5/6  md:block">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg className="w-5 h-5 text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                                    <span className="sr-only">Search icon</span>
                                </div>
                                <input type="text" id="search-navbar" className="block w-full p-1 pl-10 text-lg focus-visible:border-blue-500 focus-visible:ring-blue-500 text-gray-900 border border-gray-300 rounded-lg bg-white " placeholder="Rechercher une annonce immobilière" onChange={(e) => { setRecherche(e.target.value) }} />
                            </div>
                            <div className="flex ml-2  mt-3 items-center">
                                <button type="button" className="text-white bg-blue-700 hover:bg-blue-800   focus:outline-none focus:ring-[#FF9119]/50 font-medium rounded-lg text-sm px-5 py-2 text-center inline-flex items-center   mb-2.5" onClick={handleRecherche}>
                                    RECHERCHER
                                </button>
                            </div>
                        </div>
                        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-3" id="navbar-search">
                            <div className="flex flex-col items-center px-8 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0  ">
                                <div onClick={toggleDrawer("right", true)}>
                                    <div className='cursor-pointer'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                                        </svg>
                                    </div>
                                </div>

                                <Link to="/AjouterAnnonce">
                                    <div >
                                        <div className='cursor-pointer'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="black" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                    </div>
                                </Link>
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
                                                    <Avatar sx={{ width: 32, height: 32, backgroundColor: "green" }}>i</Avatar>
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
                                            <Link to="/user"><MenuItem>
                                                <ListItemIcon>
                                                    <PersonIcon fontSize="small" />
                                                </ListItemIcon>
                                                Accéder à mon compte
                                            </MenuItem>
                                            </Link>
                                            <MenuItem onClick={handleLogout}>
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
                <nav className="  bg-white shadow-sm ">
                    <div className="max-w-screen-xl px-2 py-2 mx-auto md:px-6">
                        <div className="flex justify-center items-center">
                            <ul className="flex flex-row mt-0 mr-6 space-x-16 text-sm font-medium items-center">
                                <li>
                                    <span>Wilaya</span>
                                    <Combo filter="Wilaya" values={Wilaya} setFilter={setWilaya} setAnnoncesRech={setAnnoncesRech} />
                                </li>
                                <li>
                                    <span>Commune</span>
                                    <Combo filter="Commune" values={Commune} setFilter={setCommune} setAnnoncesRech={setAnnoncesRech} />
                                </li>
                                <li>
                                    <span>Type immobilier</span>
                                    <Combo filter="Type" values={type} setFilter={setType} setAnnoncesRech={setAnnoncesRech} />
                                </li>
                                <li>
                                    <Datepicker
                                        placeholder={"Choisir une date"}
                                        useRange={false}
                                        value={date}
                                        onChange={handleValueChange}
                                        primaryColor={"blue"}
                                    />
                                </li>
                                <li>
                                    <button type="button" className="text-white bg-green-700 hover:bg-green-800   focus:outline-non font-medium rounded-lg text-sm px-5 py-2 text-center inline-flex items-center " onClick={handleFilter}>
                                        Filtrer
                                    </button>
                                </li>
                                <li>
                                    <button type="button" className="text-white bg-orange-700 hover:bg-orange-800   focus:outline-none focus:ring-[#FF9119]/50 font-medium rounded-lg text-sm px-5 py-2 text-center inline-flex items-center " onClick={handleClearAll}>
                                        Clear All
                                    </button>
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

export default NavBar