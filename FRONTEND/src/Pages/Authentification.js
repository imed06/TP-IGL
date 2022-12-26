import React from 'react'
import Image from '../images/forgotpasswordback.jpg'
import { FcGoogle } from 'react-icons/fc'

function Authentification() {
    return (
        <div className="font-sans antialiased text-gray-600 flex flex-col relative min-h-screen">
            <div className="relative z-10 flex-auto flex items-center justify-center text-sm text-center text-gray-600 py-16 px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-md ">
                    <a href="https://flowbite.com/" className="flex justify-center items-center pl-2.5 mb-5">
                        <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-10" alt="Flowbite Logo" />
                        <h1 className="self-center text-black text-4xl font-bold whitespace-nowrap dark:text-white">Flowbite</h1>
                    </a>
                    <p className="text-center text-lg ">Bienvenue à notre plateforme <br /> créer un compte</p>
                    <button type="button" className="flex justify-center items-center w-full py-2 px-3 border border-transparent rounded-md text-white font-medium bg-[#050708] hover:bg-[#050708]/90 shadow-sm sm:text-xl mt-7 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-50" >
                        <FcGoogle className='mr-2 -ml-1 w-5 h-5' />
                        Sign in with Google
                    </button>
                </div>
            </div>
            <footer className="relative z-10 flex-none text-sm text-center py-4 px-4 sm:px-6 lg:px-8 " >
                <div className="text-gray-900 sm:flex sm:items-center sm:justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                    <div className="rounded-md border cursor-pointer border-gray-300 hover:border-gray-400 py-2 px-10 font-medium flex items-center justify-center">
                        About Us
                        <svg aria-hidden="true" width="11" height="10" fill="none" className="flex-none ml-1.5">
                            <path d="M5.977 9.639L10.616 5 5.977.362l-.895.89L8.19 4.353H.384v1.292H8.19L5.082 8.754l.895.885z" fill="currentColor" />
                        </svg>
                    </div>

                </div>
            </footer>

            <img src={Image} alt="" className="absolute bottom-0 right-0 w-full " />
        </div>
    )
}

export default Authentification