import React, { useEffect, useState } from 'react';
import { BsFillPersonFill, BsFillTelephoneFill, BsTelephoneFill } from 'react-icons/bs';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';


function RemplirInfoUser({email,token}) {
    const { dispatch } = useAuthContext()
    const navigate = useNavigate()
    const [nom, setNom] = useState(null);
    const [prenom, setPrenom] = useState(null);
    const [adresse, setAdresse] = useState(null);
    const [tel, setTel] = useState(null);
    const Email = email
    const Token = token

    const handleSubmit = async () => {

        if (nom !== null && prenom !== null && adresse !== null && tel !== null) {
            const response = await fetch("http://localhost:5000/user", {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: nom + " " + prenom,
                    email: Email,
                    numeroDeTelephone: tel,
                    adresse: adresse,
                    token: Token
                })
            })
            const json = await response.json()
            console.log(json)
            if (response.ok) {
                localStorage.setItem('user',JSON.stringify(json))
                dispatch({type: 'LOGIN', payload: json})
                navigate("/Home");
            }
        }
    }

    return (
        <div className="bg-gray-200">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 ">
                    <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
                    Flowbite
                </a>
                <div className="w-full bg-white shadow-md rounded-lg  md:mt-0 sm:max-w-md xl:p-0 ">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                            Créer nouveau compte
                        </h1>
                        <div className=" space-y-8">
                            <div className='flex flex-row items-center justify-between'>
                                <BsFillPersonFill className="w-6 h-6 mr-2" />
                                <div className='flex flex-row items-center justify-between'>
                                    <input type="text" name="nom" id="nom" className="bg-gray-50 border mr-1 border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5 " placeholder="Nom" required="" onChange={(e) => setNom(e.target.value)} />
                                    <input type="text" name="prénom" id="prénom" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5 " placeholder="Prénom" required="" onChange={(e) => setPrenom(e.target.value)} />
                                </div>
                            </div>

                            <div className='flex flex-row items-center'>
                                <FaMapMarkerAlt className="w-6 h-6 mr-2" />
                                <input type="text" name="adresse" id="adresse" placeholder="Adresse" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5 " required="" onChange={(e) => setAdresse(e.target.value)} />
                            </div>
                            <div className='flex flex-row items-center'>
                                <BsFillTelephoneFill className="w-6 h-6 mr-2" />
                                <input type="num" name="numTel" id="numTel" placeholder="Numéro Tel" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5 " required="" onChange={(e) => setTel(e.target.value)} />
                            </div>

                            <button type="button" className="w-full text-white bg-blue-600  focus:ring-4 focus:outline-none font-medium rounded-lg text-md px-5 py-2.5 text-center " onClick={handleSubmit}>Créer un compte</button>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default RemplirInfoUser;
