import { GoogleLogin } from '@react-oauth/google';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import jwt_decode from "jwt-decode";
import { useAuthContext } from '../hooks/useAuthContext';
import { useAnnonceContext } from '../hooks/useAnnonceContext';
import image from "../images/hero_illustration.png"
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';


const Authentification = ({ setEmail, setToken }) => {
    const [typeUser, setTypeUser] = React.useState('');

    const handleChange = (event) => {
        setTypeUser(event.target.value)
    };
    const navigate = useNavigate()
    const [error, setError] = useState(null)
    const { dispatch } = useAuthContext()
    const { dispatchAnnonce } = useAnnonceContext()

    useEffect(() => {
        setTimeout(function () {
            setError(null);
        }, 10000);
    }, [error])

    const onSuccessSignUp = async (credentialResponse) => {
        const id_token = credentialResponse.credential
        var decoded = jwt_decode(id_token);
        setToken(id_token)
        setEmail(decoded.email)
        const response = await fetch("http://localhost:5000/authenticate/singup", {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                id_token: id_token,
            })
        }).catch(e => {
            setError(e)
        })
        const json = await response?.json()
        if (response?.ok) {
            if (!json.UserType) {
                localStorage.setItem('user', JSON.stringify(json))
                dispatch({ type: 'LOGIN', payload: json })
                dispatchAnnonce({ type: 'SET_ANNONCE', payload: json.annonces })
                navigate("/InfoUser")
            } else {
                localStorage.setItem('user', JSON.stringify(json))
                dispatch({ type: 'LOGIN', payload: json })
                dispatchAnnonce({ type: 'SET_ANNONCE', payload: json.annonces })
                navigate("/admin")
            }
        }
    }

    const onSuccessLogin = async (credentialResponse) => {
        const id_token = credentialResponse.credential
        setToken(id_token)
        const response = await fetch("http://localhost:5000/authenticate/login", {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                id_token: id_token,
            })
        }).catch(e => {
            setError(e)
        })
        const json = await response?.json()
        if (response?.ok) {
            if (!json.UserType) {
                localStorage.setItem('user', JSON.stringify(json))
                dispatch({ type: 'LOGIN', payload: json })
                dispatchAnnonce({ type: 'SET_ANNONCE', payload: json.annonces })
                navigate("/Home")
            } else {
                localStorage.setItem('user', JSON.stringify(json))
                dispatch({ type: 'LOGIN', payload: json })
                dispatchAnnonce({ type: 'SET_ANNONCE', payload: json.annonces })
                navigate("/admin")
            }
        }
        if (response.status === 404) setError("error")
    }
    return (
        <div className="bg-gray-200 flex items-center justify-between flex-col h-full" style={{ backgroundColor: "#E6F0FF", minHeight: "100vh" }}>
            <div className='flex mt-2 justify-around w-full'>
                <div className='flex items-center'><img src="https://flowbite.com/docs/images/logo.svg" className="h-6" alt="Flowbite Logo" />

                    <h1 className=" font-bold ml-2 text-center" style={{
                        fontSize: "32px",
                        color: "#000336",
                        fontWeight: "bold",


                    }}>Real Estate</h1>
                </div>
                <div id="login">
                    <GoogleLogin
                        onSuccess={onSuccessLogin}
                        onError={() => {
                            console.log('Login Failed');
                        }}
                        width="90"
                    />
                </div>
            </div>
            <div className='flex w-full h-full mb-12 items-center'>
                <div className='flex flex-col justify-center ml-20 items-center h-full w-full'>
                    <h1 className=" font-bold mb-5  text-center" style={{
                        fontSize: "56px",
                        color: "#000336",
                        fontWeight: "bold",
                        margin: 2,

                    }}>Discover a place where you'll love to live.</h1>
                    <p className="text-gray-900 text-center text-lg mb-8">Sign up with Google to start using our app.</p>
                    <div className='flex items-center'>
                        <div id="signup"><GoogleLogin
                            onSuccess={onSuccessSignUp}
                            onError={() => {
                                console.log('Login Failed');
                            }}
                            shape="circle"
                            theme="filled_black"
                            size="large"
                            width="100"
                            text="signup_with"
                        />
                        </div>
                    </div>
                </div>
                <div className=' justify-center items-center flex mr-60'>
                    <img src={image} style={{ width: 950 }}></img>

                </div>
            </div>

            {error && (<div className="flex p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                <svg aria-hidden="true" className="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path></svg>
                <span className="sr-only">Info</span>
                <div>
                    <span className="font-medium">Erreur!</span> Utilisateur non existant ou déja existe.
                </div>
            </div>
            )}
        </div>
    );
};

export default Authentification;
