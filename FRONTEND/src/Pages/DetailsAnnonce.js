import React from 'react'
import SideBar from '../Components/SideBar'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

function DetailsAnnonce() {
    const [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }
    return (
        <div className='flex flex-col  h-full' style={{ "backgroundColor": "#f5f5f5" }}>
            <div className="w-full flex flex-col  sticky top-0 ">
                <SideBar />
            </div>
            <div className='mt-8 mx-40' >
                <h1 className=" text-4xl " >Vente Niveau De Villa F3 Alger Bir Mourad Rais</h1>
                <div className='flex flex-row justify-between mt-4'>

                    <button className=" hover:bg-gray-200 rounded-lg hover:text-blue-700 text-black py-2 px-2  inline-flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="blue" className="w-5 h-5">
                            <path fillRule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clipRule="evenodd" />
                        </svg>
                        <span className='ml-1  '>Afficher toutes les photos</span>
                    </button>

                    <button className="hover:bg-gray-200 hover:text-red-700 text-black py-2 px-2 rounded-lg inline-flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="red" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                        </svg>
                        <span className='ml-1 '>Sauvegarder</span>
                    </button>
                </div>
                <div className='grid grid-cols-3 grid-flow-col gap-2 mt-2'>

                    <img
                        className='object-cover rounded-md w-full h-full'
                        src='https://images.unsplash.com/photo-1602002418082-a4443e081dd1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80'
                        alt='/'
                    />
                    <img
                        className='object-cover rounded-md w-full h-full'
                        src='https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80'
                        alt='/'
                    />
                    <img
                        className='object-cover rounded-md w-full h-full'
                        src='https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80'
                        alt='/'
                    />
                </div>
                <div className='flex flex-row justify-between mt-8'>
                    <div>
                        <div className=" inset-0 flex items-center justify-center">

                            <button type="button" onClick={openModal} className="flex flex-row text-white bg-gray-800 hover:bg-gray-900 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 ">
                                Afficher sur map
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 ml-1">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
                                </svg>
                            </button>
                        </div>
                        <Transition appear show={isOpen} as={Fragment}>
                            <Dialog as="div" className="relative z-10" onClose={closeModal}>
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-out duration-300"
                                    enterFrom="opacity-0"
                                    enterTo="opacity-100"
                                    leave="ease-in duration-200"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <div className="fixed inset-0 bg-black bg-opacity-25" />
                                </Transition.Child>

                                <div className="fixed inset-0 overflow-y-auto">
                                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                                        <Transition.Child
                                            as={Fragment}
                                            enter="ease-out duration-300"
                                            enterFrom="opacity-0 scale-95"
                                            enterTo="opacity-100 scale-100"
                                            leave="ease-in duration-200"
                                            leaveFrom="opacity-100 scale-100"
                                            leaveTo="opacity-0 scale-95"
                                        >
                                            <Dialog.Panel className="w-full max-w-3xl h-screen transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all flex justify-between flex-col">
                                                <Dialog.Title
                                                    as="h3"
                                                    className="text-lg font-medium leading-6 text-gray-900 flex flex-row items-center"
                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                                    </svg>
                                                    Position
                                                </Dialog.Title>
                                                <div className="mt-2 h-full">
                                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3238.879189409016!2d-0.5906774804453733!3d35.72918958085848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd7e62b744aa1023%3A0xc2ed0bd1129073ff!2sPALAIS%20D&#39;OR!5e0!3m2!1sen!2sdz!4v1671441155728!5m2!1sen!2sdz" className='w-full h-full rounded-lg border' allowfullscreen></iframe>
                                                </div>

                                                <div className="mt-4 flex flex-row justify-center">

                                                    <button
                                                        type="button"
                                                        className="inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                                        onClick={closeModal}
                                                    >
                                                        Fermer
                                                    </button>
                                                </div>
                                            </Dialog.Panel>
                                        </Transition.Child>
                                    </div>
                                </div>
                            </Dialog>
                        </Transition>
                    </div>
                    <div>
                        <button type="button" className="text-white inline-flex items-center bg-[#F7BE38] hover:bg-[#F7BE38]/90  font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2  focus:outline-none ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                            </svg>
                            <span className='ml-1'>CONTACTER</span>
                        </button>
                    </div>
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
                                <dd className="mt-1 text-md text-gray-900 sm:col-span-2 sm:mt-0">Vente</dd>
                            </div>
                            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-700">Type d'immobilier</dt>
                                <dd className="mt-1 text-md text-gray-900 sm:col-span-2 sm:mt-0">Terrain</dd>
                            </div>
                            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-md font-medium text-gray-700">Surface</dt>
                                <dd className="mt-1 text-md text-gray-900 sm:col-span-2 sm:mt-0">300 m2</dd>
                            </div>
                            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-md font-medium text-gray-700">Prix</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">6 million</dd>
                            </div>
                            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-md font-medium text-gray-700">Adresse</dt>
                                <dd className="mt-1 text-md text-gray-900 sm:col-span-2 sm:mt-0">
                                    <ul>
                                        <li>Wilaya : Alger</li>
                                        <li>Commune : Alger centre</li>
                                        <li>Adresse : Sidi yahia</li>
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
                                <dt className="text-md font-medium text-gray-700">Vente ou location
                                    Niveau villa
                                    3 pièce 85m2 chacune
                                    + Cuisine + douche et toilettes + terrace

                                    Wilaya d’Alger - bir mourad rais ( quartier les sources )

                                    ( pièces détachées renault ) repère

                                    vente : 2milliard 200
                                    location : 55000DA mois</dt>
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
                                        <span className='text-black'>Nom : </span><span className="text-md font-medium text-black">Triki imed</span>
                                    </div>
                                </div>
                                <div className='flex items-center flex-col'>
                                    <div className=' bg-[#46b5d1] p-5 rounded-full mb-4'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-5 h-5">
                                            <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div className="text-gray-500 ">
                                        <span className='text-black'>Adresse : </span><span className="text-md tracking-tight font-medium text-black ">Alger,Sidi yahia 24</span>
                                    </div>
                                </div>

                                <div className='flex items-center flex-col'>
                                    <div className=' bg-[#46b5d1] p-5 rounded-full mb-4'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-5 h-5">
                                            <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div className="text-gray-500">
                                        <span className='text-black'>Phone : </span><span className="text-md font-medium text-[#46b5d1]">0551236598</span>
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