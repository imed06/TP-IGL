import React, { useEffect } from 'react'
import NavBar from '../Components/NavBar'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { useParams } from 'react-router-dom'
import Messagerie from './Messagerie'
import { Link } from "react-router-dom"

const DetailsAnnonce = _ => {
    const { id } = useParams()
    const [annonce, setAnnonce] = useState(null)
    const [isOpen, setIsOpen] = useState(false)
    const [image, setImage] = useState([])
    var Image = [];

    useEffect(() => {
        const getAnnonce = async () => {
            const response = await fetch("http://127.0.0.1:5000/annonce/" + id)
            const json = await response.json()
            if (response.ok) {
                setAnnonce(json)
                console.log(json)
                if (json.images.length !== 0) {
                    Image = json.images[0]?.lien.split(",")
                    if (Image !== undefined) {
                        Image = Image.map((m) =>
                            "images/" + m
                        )
                        console.log(Image)
                        setImage(Image)
                    }
                }
            }
        }
        getAnnonce()
    }, [])

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    const openMap = (url) => {
        window.open(url, '_blank', 'noreferrer');
    };

    return (
        <div className='flex flex-col  h-full' style={{ "backgroundColor": "#f5f5f5" }}>
            <div className="w-full flex flex-col  sticky top-0 ">
                <NavBar setAnnoncesRech={() => null} setAnnoncesFilt={() => null} />
            </div>
            <div className='mt-8 mx-40' >
                <h1 className=" text-4xl " >{annonce && annonce.titre}</h1>
                <div className='flex flex-row justify-between mt-4'>
                    <div></div>
                    <button className=" hover:bg-gray-200 rounded-lg hover:text-blue-700 text-black py-2 px-2  inline-flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="blue" className="w-5 h-5">
                            <path fillRule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clipRule="evenodd" />
                        </svg>
                        <span className='ml-1  '>Afficher toutes les photos</span>
                    </button>
                </div>
                {annonce && annonce?.images.length !== 0 ? annonce?.images[0].lien.includes("/upload") ? (
                    <div className='grid grid-cols-3 grid-flow-col gap-2 mt-2'>
                        {
                            annonce?.images.slice(0, 3).map((image) => {
                                return (<img
                                    className='object-cover rounded-md w-full h-full'
                                    src={"http://www.annonce-algerie.com" + image.lien}
                                    alt='/'
                                />
                                )
                            })
                        }
                    </div>
                ) : annonce?.images[0].lien.includes("/algerie") ?
                    (<div className='grid grid-cols-3 grid-flow-col gap-2 mt-2'>
                        {
                            annonce?.images.slice(0, 3).map((image) => {
                                return (<img
                                    className='object-cover rounded-md w-full h-full'
                                    src={image.lien}
                                    alt='/'
                                />
                                )
                            })
                        }
                    </div>
                    ) : <div className='grid grid-cols-3 grid-flow-col gap-2 mt-2'>
                        {
                            image.length !== 0 && image.slice(0, 3).map((m) => {
                                return (<img
                                    className='object-cover rounded-md w-full h-full'
                                    src={require(`../${m}`)} alt='/'
                                />
                                )
                            })

                        }

                    </div>
                    : <h1 className='flex justify-center text-3xl mt-8 mb-16'>Aucune images disponible</h1>
                }
                <div className='flex flex-row justify-between mt-8'>
                    <div>
                        <div className=" inset-0 flex items-center justify-center">
                            <button type="button" onClick={() => openMap('https://www.google.com/maps/place/' + annonce.localisation)} className="flex flex-row text-white bg-gray-800 hover:bg-gray-900 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 ">
                                Afficher sur map
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 ml-1">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <Messagerie annonce={annonce} />
                </div>
                <div className="overflow-hidden bg-white shadow sm:rounded-lg mt-4">
                    <div className="px-4 py-5 sm:px-6 flex flex-row">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#FF9119" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                        </svg>
                        <h3 className="text-lg ml-1 font-medium leading-6 text-gray-900">Details sur AI</h3>
                    </div>
                    <div className="border-t border-gray-200">
                        <dl>
                            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-md font-medium text-gray-700">Catégorie</dt>
                                <dd className="mt-1 text-md text-gray-900 sm:col-span-2 sm:mt-0">{annonce && annonce.categories}</dd>
                            </div>
                            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-700">Type d'immobilier</dt>
                                <dd className="mt-1 text-md text-gray-900 sm:col-span-2 sm:mt-0">{annonce && annonce.typeDuBien}</dd>
                            </div>
                            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-md font-medium text-gray-700">Surface</dt>
                                <dd className="mt-1 text-md text-gray-900 sm:col-span-2 sm:mt-0">{annonce && annonce.surfaces}</dd>
                            </div>
                            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-md font-medium text-gray-700">Prix</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{annonce && annonce.prix}</dd>
                            </div>
                            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-md font-medium text-gray-700">Adresse</dt>
                                <dd className="mt-1 text-md text-gray-900 sm:col-span-2 sm:mt-0">
                                    <ul>
                                        <li>{annonce && annonce.localisation}</li>
                                    </ul>
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>
                <div className="overflow-hidden mt-4 bg-white shadow sm:rounded-lg">
                    <div className="px-4 py-5 sm:px-6 flex flex-row items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#FF9119" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                        </svg>
                        <h3 className="text-lg ml-1 font-medium leading-6 text-gray-900">Description</h3>
                    </div>
                    <div className="border-t border-gray-200">
                        <dl>
                            <div className="bg-white px-4 py-5  sm:px-6">
                                <dt className="text-md font-medium text-gray-700">{annonce && annonce.description}</dt>
                            </div>
                        </dl>
                    </div>
                </div>
                <div>
                    <div className='flex flex-col mt-8 mb-3'>
                        <div className='flex flex-row justify-center '>
                            <div className='flex flex-col mr-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#FF9119" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <h3 className="text-lg  font-medium leading-6 text-gray-900">Contact et Cordonnées</h3>

                        </div>
                        <div className="overflow-hidden  mt-2">
                            <div className="flex flex-row justify-around py-8 px-6 ">
                                <div className='flex items-center flex-col'>
                                    <div className=' bg-[#46b5d1] p-5 rounded-full mb-4'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-5 h-5">
                                            <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div className="text-gray-500 ">
                                        <span className='text-black'>Nom : </span><span className="text-md font-medium text-black">{annonce && annonce.creator && annonce.creator.name}</span>
                                    </div>
                                </div>
                                <div className='flex items-center flex-col'>
                                    <div className=' bg-[#46b5d1] p-5 rounded-full mb-4'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-5 h-5">
                                            <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div className="text-gray-500 ">
                                        <span className='text-black'>Adresse : </span><span className="text-md tracking-tight font-medium text-black ">{annonce && annonce.creator && annonce.creator.adresse}</span>
                                    </div>
                                </div>

                                <div className='flex items-center flex-col'>
                                    <div className=' bg-[#46b5d1] p-5 rounded-full mb-4'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-5 h-5">
                                            <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div className="text-gray-500">
                                        <span className='text-black'>Phone : </span><span className="text-md font-medium text-[#46b5d1]">{annonce && annonce.creator && "0" + annonce.creator.numeroDeTelephone}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div >
    )
}

export default DetailsAnnonce
