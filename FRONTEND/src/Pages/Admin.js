import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import {Routes , Route} from 'react-router-dom';
import Scrapping from './Scrapping';
import Success from './Success';
import Authentification from './Authentification'

export default function Admin() {
    return (
        <div>
         <Routes>
                
                <Route path="/" element={<Scrapping></Scrapping>} />
                <Route path="Success" element={<Success></Success>}/>
                <Route path="Authentification" element={<Authentification/>}/>
            </Routes> 
        </div>
    );
}