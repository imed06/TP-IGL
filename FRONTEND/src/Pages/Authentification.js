import { GoogleLogin } from '@react-oauth/google';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import jwt_decode from "jwt-decode";
import { useAuthContext } from '../hooks/useAuthContext';

const Authentification = ({ setEmail, setToken }) => {
    const navigate = useNavigate()
    const [error, setError] = useState(null)
    const { dispatch } = useAuthContext()

  useEffect(() => {
    setTimeout(function () {
      setError(null);
    }, 10000);
  }, [error]);

    const onSuccessSignUp = async (credentialResponse) => {
        const id_token = credentialResponse.credential
        var decoded = jwt_decode(id_token);
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
            setEmail(decoded.email)
            const { token } = json
            setToken(token)
            navigate("/InfoUser")
        }
    }
  };

    const onSuccessLogin = async (credentialResponse) => {
        const id_token = credentialResponse.credential
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
            localStorage.setItem('user', JSON.stringify(json))
            dispatch({ type: 'LOGIN', payload: json })
            navigate("/Home")
        }
        if (response.status === 404) setError("error")
    }
    return (
        <div className="bg-gray-200 h-screen flex items-center justify-between flex-col">
            <div className='flex flex-col justify-center items-center h-screen w-full'>
                <h1 className="text-3xl font-bold mb-5 text-center">Welcome to our App</h1>
                <p className="text-gray-600 text-center mb-8">Sign up with Google to start using our app.</p>
                <GoogleLogin
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
                <div className='p-2'></div>
                <GoogleLogin
                    onSuccess={onSuccessLogin}
                    onError={() => {
                        console.log('Login Failed');
                    }}
                    width="90"
                />
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
      )}
    </div>
  );
};

export default Authentification;
