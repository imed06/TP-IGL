import * as React from 'react';
import NavBar from '../Components/NavBar';
import { useState, useEffect } from 'react';
import { Drawer } from '@mui/material'
import Box from '@mui/material/Box';
import { FcShop } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import AnnonceTemplate from './AnnonceTemplate';
import { useAnnonceContext } from '../hooks/useAnnonceContext';


const Home = () => {
    const [annonces, setAnnonces] = useState(null)
    const [annoncesRech, setAnnoncesRech] = useState(null)
    const [annoncesFilt, setAnnoncesFilt] = useState(null)
    const [page, setPage] = useState(1);
    const [state, setState] = useState({ right: false, });

    useEffect(() => {
        const getAnnonces = async () => {
            const response = await fetch("http://127.0.0.1:5000/annonce/?page=" + page)
            const json = await response.json()
            if (response.ok) {
                if (json.length !== 0) {
                    json.sort((a, b) => b.Date.localeCompare(a.Date));
                    setAnnonces(json)
                }
            }
        }
        getAnnonces()
    }, [page])

    const handleChange = (event, value) => {
        setPage(value);
      };


    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState({ ...state, [anchor]: open });
    };

    return (
        <div className='h-full w-full' >
            <div className='h-full w-full flex flex-col justify-between' style={{ "backgroundColor": "#f5f5f5" }}>
                <div className="w-full flex flex-col sticky top-0  ">
                    <NavBar setAnnoncesRech={setAnnoncesRech} setAnnoncesFilt={setAnnoncesFilt} />
                </div>
                <div>
                    <React.Fragment key="right">
                        <Drawer className=" h-full w-72 sticky rounded-md top-0" anchor='right' open={state["right"]} onClose={toggleDrawer("right", false)} >
                            <Box sx={{ width: 350 }} className="h-full" >
                                <div className='h-full flex items-center flex-col justify-between divide-y divide-gray-300'>
                                    <div className='w-full h-16 text-lg flex flex-row justify-around items-center top-0 bg-gray-100 font-bold text-gray-900 shadow'>
                                        <div></div>
                                        <div className='flex flex-row items-center '>
                                            <div className='cursor-pointer mr-2'>
                                                <FcShop size={30} />
                                            </div>
                                            Nom d'annoceur
                                        </div>
                                        <div className='cursor-pointer' onClick={toggleDrawer("right", false)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className='flex flex-row items-center p-2 w-full'>
                                        <input type="text" className="bg-gray-50 border border-gray-500 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Ecrire" required />
                                        <svg aria-hidden="true" className="w-8 h-8 rotate-45 ml-2 cursor-pointer" fill="blue" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path></svg>
                                    </div>
                                </div>
                            </Box>
                        </Drawer>
                    </React.Fragment>
                </div>
                <div className='mt-8 flex h-full w-full'>
                    <div className="grid grid-cols-4 gap-3 m-8 w-full ">
                        {annoncesRech || annoncesFilt ? annoncesRech ? annoncesRech.map((annonce) => {
                            return <Link to={`/Details/${annonce.id}`} key={annonce.id}> <div key={annonce.id}><AnnonceTemplate annonce={annonce} /></div></Link>
                        }) : annoncesFilt.map((annonce) => {
                            return <Link to={`/Details/${annonce.id}`} key={annonce.id}> <div key={annonce.id}><AnnonceTemplate annonce={annonce} /></div></Link>
                        })
                            : annonces && annonces.map((annonce) => {
                                return <Link to={`/Details/${annonce.id}`} key={annonce.id}> <div key={annonce.id}><AnnonceTemplate annonce={annonce} /></div></Link>
                            })
                        }
                    </div>
                </div>
                <div className='flex justify-center mb-10'>
                    <Stack spacing={2}>
                        <Pagination count={20} page={page} color="secondary" onChange={handleChange} />
                    </Stack>
                </div>
            </div>
        </div >
    )
}

export default Home