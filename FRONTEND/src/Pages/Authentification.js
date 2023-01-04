// import React from 'react'
// import Image from '../images/AuthBackground.jpg'
// import { FcGoogle } from 'react-icons/fc'
// import { useState, useEffect } from 'react';
// import { gapi } from "gapi-script";
// import GoogleLogin from 'react-google-login';
// import { useSignup } from '../hooks/useSignup';
// import { useLogin } from '../hooks/useLogin';
// import { useNavigate } from 'react-router';


// function Authentification() {
//     const navigate = useNavigate();
//     const clientID = clientid

//     const {signup,error,isLoading} = useSignup()
//     const {login,error_1,isLoading_1} = useLogin()

//     const onSuccessSignUp = async (response) => {
//         console.log(response)
//         await signup(response.profileObj.email,response.accessToken,response.tokenId)
//         if(!error){
//             navigate('./InfoUser')
//         }
//     }
//     const onSuccessLogin = async (response) => {
//         console.log(response)
//         await login(response.profileObj.email,response.accessToken,response.tokenId)  
//         if(!error_1){
//             navigate('./Home')
//         }
//     }
//     const onFailure = (response) => {
//         console.log("Something went wrong");
//     }
//     useEffect(() => {
//         const start = () => {
//             gapi.auth2.init({
//                 clientId: clientID,
//             });
//         }
//         gapi.load("client:auth2", start);
//     }, []);
//     return (
//         <div className="font-sans antialiased text-gray-600 flex flex-col relative min-h-screen">
//             <div className="relative z-10 flex-col flex items-center justify-center text-sm text-center text-gray-600 py-16 px-4 sm:px-6 lg:px-8">
//                 <div className="w-full max-w-md ">
//                     <p className="text-center text-lg ">Bienvenue à notre plateforme <br /> créer un compte</p>
//                 </div>
//                 <div className='m-10'>
//                     <GoogleLogin
//                         clientId={clientID}
//                         onSuccess={onSuccessLogin}
//                         onFailure={onFailure}
//                         buttonText="Sign In with Google"
//                         cookiePolicy={"single_host_policy"}
//                         theme={'dark'}
//                     />
//                 </div>
//                 <div>
//                     <GoogleLogin
//                         clientId={clientID}
//                         onSuccess={onSuccessSignUp}
//                         onFailure={onFailure}
//                         buttonText="Sign Up with Google"
//                         cookiePolicy={"single_host_policy"}
//                         theme={'dark'}
//                     />
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Authentification
