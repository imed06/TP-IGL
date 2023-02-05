import React, { useEffect } from 'react'
import NavBar from '../Components/NavBar';
import { useAuthContext } from '../hooks/useAuthContext';
import { useState } from 'react'
import Box from '@mui/material/Box';
import Item from '@mui/material/ListItem';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import SideBar from '../Components/SideBar';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom';
import AnnonceTemplate from './AnnonceTemplate';
import { useAnnonceContext } from '../hooks/useAnnonceContext';


const ConsulterProfile = () => {
    const { user } = useAuthContext()
    const { Annonce, dispatchAnnonce } = useAnnonceContext()
    const [messages, setMessage] = useState()
    const [open, setOpen] = useState(true)

    const handleDeleteAnnone = async (id) => {
        setOpen(true)
        const response = await fetch("http://localhost:5000/annonce/" + id, {
            method: "DELETE"
        })
        const json = await response.json()
        if (response.ok) {
            const annonceDeleted = user.annonces.findIndex((obj) => obj.id === id)
            user.annonces.splice(annonceDeleted, 1);
            localStorage.setItem('user', JSON.stringify(user))
            dispatchAnnonce({ type: 'SET_ANNONCE', payload: user.annonces })
        }
    }
    useEffect(() => {
        const handleGetMessage = async () => {
            const response = await fetch(`http://localhost:5000/messagerie/messagerie?user_id=${user.id}`)
            const json = await response.json()
            if (response.ok) {
                setMessage(json)
            }
        }
        handleGetMessage()
    },[])



    return (
        <div className='flex flex-col  h-full' style={{ "backgroundColor": "#f5f5f5" }}>
            <div className=" flex items-center bg-white justify-between p-2 shadow-md ">
                <SideBar />
                <div className='flex '>
                    <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-8" alt="Flowbite Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap ">Real Estate</span>
                </div>
                <div className='bg-white'></div>
            </div>
            <div className='flex flex-row justify-betwenn relative'>
                <div className="w-1/4 m-3 mt-8 h-full overflow-y-auto py-4 px-6  text-black bg-white flex sticky top-10 flex-col rounded-md  ">
                    <div className="flex flex-col text-2xl items-center pl-2.5 mb-5 ">
                        <span className="self-center text-xl whitespace-nowrap mb-8 ">{user.name}</span>
                        <Avatar sx={{ width: 100, height: 100, fontSize: 50, backgroundColor: '#0b57d0' }}>i</Avatar>
                    </div>
                    <div>
                        <ul className="space-y-2 mt-10">
                            <li>
                                <div className='flex flex-row'>
                                    <Button sx={{ marginRight: 5, color: "#e95903" }} onClick={() => setOpen(true)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mr-2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" />
                                        </svg>
                                        Mes Annonces
                                    </Button>
                                    <Button sx={{ color: "#e95903" }} onClick={() => setOpen(false)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mr-2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                                        </svg>
                                        Mes Messages
                                    </Button>
                                </div>
                            </li>
                            <li>
                                <div className="flex cursor-pointer items-center p-2 text-base font-normal  rounded-lg  hover:bg-gray-100 hover:text-black ">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="green" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                    </svg>
                                    <div className='flex flex-col'>
                                        <span className="flex-1 ml-8 font-light whitespace-nowrap">Numéro</span>
                                        <h6 className="flex-1 ml-8 whitespace-nowrap">{"0" + user.numeroDeTelephone}</h6>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="flex cursor-pointer items-center p-2 text-base font-normal  rounded-lg  hover:bg-gray-100 hover:text-black ">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                    </svg>
                                    <div className='flex flex-col'>
                                        <span className="flex-1 ml-8 font-light whitespace-nowrap">Pseudo</span>
                                        <h6 className="flex-1 ml-8 whitespace-nowrap">{user.name}</h6>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="flex cursor-pointer items-center p-2 text-base font-normal  rounded-lg  hover:bg-gray-100 hover:text-black ">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25" />
                                    </svg>

                                    <div className='flex flex-col'>
                                        <span className="flex-1 ml-8 font-light whitespace-nowrap">Email</span>
                                        <h6 className="flex-1 ml-8 whitespace-nowrap">{user.email}</h6>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="flex cursor-pointer items-center p-2 text-base font-normal  rounded-lg  hover:bg-gray-100 hover:text-black ">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" />
                                    </svg>
                                    <div className='flex flex-col'>
                                        <span className="flex-1 ml-8 font-light whitespace-nowrap">Annonce</span>
                                        <h6 className="flex-1 ml-8 whitespace-nowrap">{user?.annonces.length || 0}</h6>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>

                </div>
                <div className=' '>
                    {open ?
                        <div className="grid grid-cols-4 gap-4 m-8 w-full ">
                            {Annonce && Annonce.map((annonce) => {
                                return <div><Link to={`/Details/${annonce.id}`} key={annonce.id}> <div key={annonce.id}><AnnonceTemplate annonce={annonce} /></div></Link><button type="button" className="text-white bg-red-500 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-md text-sm px-3 py-2.5 text-center mb-2 mt-1 ml-10" onClick={() => handleDeleteAnnone(annonce.id)}>supprimer</button></div>
                            })}
                        </div> :

                        <div class="m-8 w-full bg-white overflow-x-auto">
                            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                <thead class="text-xs text-gray-700 uppercase bg-white dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" class="px-6 py-3">
                                            message
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            annonce
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            nom expiditeur
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            email expiditeur
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            tel expiditeur
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {messages && messages.map((m) => {
                                        return(
                                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={m.id}>
                                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    {m.corp}
                                                </th>
                                                <td class="px-6 py-4">
                                                    {m.annonce.titre}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {m.user.name}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {m.user.email}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {m.user.numeroDeTelephone}
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default ConsulterProfile;