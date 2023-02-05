import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SideBar from '../Components/SideBar'
import { useAnnonceContext } from '../hooks/useAnnonceContext'
import { useAuthContext } from '../hooks/useAuthContext'

function AjouterAnnonce() {
    const { user } = useAuthContext()
    const { Annonce, dispatchAnnonce } = useAnnonceContext()
    const navigate = useNavigate()
    const [titre, setTitre] = useState()
    const [categorie, setCategorie] = useState()
    const [type, setType] = useState()
    const [surface, setSurface] = useState()
    const [prix, setPrix] = useState()
    const [localisation, setLocalisation] = useState()
    const [filePaths, setFilePaths] = useState([]);
    const [description, setDescription] = useState()

    useEffect(() => {
        images.push(image)
        console.log(images)
    }, [image])

    const handleAjouterAnnonce = async () => {
        console.log(encodeURIComponent(images.join(',')))
        const response = await fetch(`http://localhost:5000/annonce?userid=${user.id}&paths=${filePaths}`, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                titre: titre,
                categories: categorie,
                typeDuBien: type,
                surfaces: surface,
                description: description,
                localisation: localisation,
                prix: prix,
                Date: "222",
                nom_contact: user.name,
                adresse_contact: user.adresse,
                email_contact: user.email,
                tlphn_contact: user.numeroDeTelephone,
            })
        })
        const json = await response.json()
        navigate("/Home")
        user.annonces.push(json)
        localStorage.setItem('user', JSON.stringify(user))
        dispatchAnnonce({ type: 'SET_ANNONCE', payload: user.annonces })
    }
    const handleImageChange = (event) => {
        const selectedFiles = Array.from(event.target.files);
        const filePaths = selectedFiles.map((file) => file.name);
        setFilePaths(filePaths);
      };
    return (
        <div className='flex flex-col items-center h-screen w-full'>
            <div className=" flex items-center bg-white justify-between p-2 shadow-md w-full ">
                <SideBar />
                <div className='flex '>
                    <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-8" alt="Flowbite Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap ">Real Estate</span>
                </div>
                <div className='bg-white'></div>
            </div>
            <div>
                <h1 className='text-3xl mt-3'>Ajouter une nouvelle annonce</h1>
            </div>
            <div class="w-full max-w-lg mt-8">
                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                            Titre
                        </label>
                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" onChange={(e) => setTitre(e.target.value)} />
                    </div>
                    <div class="w-full md:w-1/2 px-3">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                            Catégorie
                        </label>
                        <div class="relative">
                            <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" onChange={(e) => setCategorie(e.target.value)}>
                                <option>Vente</option>
                                <option>Echange</option>
                                <option>Location</option>
                                <option>Location pour vacances</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                            Type Du Bien
                        </label>
                        <div class="relative">
                            <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" onChange={(e) => setType(e.target.value)}>
                                <option>Terrain</option>
                                <option>Terrain Agricole</option>
                                <option>Appartement</option>
                                <option>Maison</option>
                                <option>Bungalow</option>
                            </select>

                        </div>
                    </div>
                    <div class="w-full md:w-1/2 px-3">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                            Surface
                        </label>
                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" onChange={(e) => setSurface(e.target.value)} />
                    </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                            Prix
                        </label>
                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" onChange={(e) => setPrix(e.target.value)} />
                    </div>
                    <div class="w-full md:w-1/2 px-3">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                            Localisation
                        </label>
                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" onChange={(e) => setLocalisation(e.target.value)} />
                    </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full px-3">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                            Images
                        </label>
                        <input multiple="multiple" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="file" onChange={handleImageChange} />
                    </div>
                </div>
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                    Description
                </label>
                <textarea className="bg-gray-200 border border-gray-200 rounded-lg w-full py-2 px-4 text-gray-700 h-32 focus:outline-none focus:bg-white focus:border-gray-500" id="message" placeholder="Enter votre description ici" onChange={(e) => setDescription(e.target.value)}></textarea>
                <div class=" flex justify-center">
                    <button class="shadow mt-5 bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button" onClick={handleAjouterAnnonce}>
                        Ajouter Annonce
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AjouterAnnonce
