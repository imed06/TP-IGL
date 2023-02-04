import * as React from 'react';
import { Alert } from '@mui/material';
import { useAuthContext } from '../hooks/useAuthContext';
import { useState, useEffect, } from 'react';


function Messagerie(props) {
    const { user } = useAuthContext()
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState("");
    const annonce = props.annonce
    const [err, setErr] = useState(null)

    useEffect(() => {
        setTimeout(function () {
            setErr(null);
        }, 10000);
    }, [err])

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClickClose = () => {
        setOpen(false);
    };

    const handleSendMessage = async () => {
        if (message !== "" ) {
            const response = await fetch(`http://127.0.0.1:5000/messagerie/messagerie?message=${message}&user_id=${user.id}&annonce_id=${annonce.id}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                })
            })
            const json = await response.json()
            console.log(json)
            setErr(response.status)

            if (response.ok) {
            }
        }
    }

    return (
        <div >
            {annonce?.creator !== null ?
                <button type="button" className="text-white inline-flex items-center bg-[#F7BE38] hover:bg-[#F7BE38]/90  font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2  focus:outline-none " onClick={handleClickOpen}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                    </svg>
                    <span className='ml-1'>CONTACTER</span>
                </button>
                :
                <button type="button" className="text-white disabled inline-flex items-center bg-[#F7BE38] hover:bg-[#F7BE38]/90  font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2  focus:outline-none ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                    </svg>
                    <span className='ml-1'>CONTACTER</span>
                </button>}
            {err &&
                <div className="fixed top-0 right-0 w-72  bg-white rounded-lg shadow-xl mt-4 mr-2">
                    <Alert severity="success">Message envoyer avec Succès!</Alert>
                </div>
            }
            {open && <div className="fixed bottom-0 right-0 w-72  bg-white rounded-lg shadow-xl p-6 mb-4">
                <div className="flex items-center justify-between">
                    <h2 className="text-lg font-medium">Envoyer Message</h2>
                    <button className="text-gray-500 hover:text-gray-600" onClick={handleClickClose}>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                    </button>
                </div>
                <div className="mt-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2">
                            Message:
                        </label>
                        <textarea className="bg-gray-200 border border-gray-200 rounded-lg w-full py-2 px-4 text-gray-700 h-32 focus:outline-none focus:bg-white focus:border-gray-500" id="message" placeholder="Enter votre message ici" onChange={(e) => setMessage(e.target.value)}></textarea>

                    </div>
                    <div className='flex justify-end'>
                        <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-2 px-4 rounded-lg" type="button" onClick={handleSendMessage}>
                            Send
                        </button>
                    </div>
                </div>
            </div>}

        </div>
    );
}

export default Messagerie