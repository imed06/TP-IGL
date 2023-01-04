import React from 'react'
import PremierPage from './Premierpage';
import { useState } from 'react';
import { useMediaQuery } from '../hooks/useMediaQuery';
import Navbar from './scenes_premier_page/Navbar';

export default function Accueil() {
    const [selectedPage,setSelectedPage] = useState("Home");
    const isAbouveMediumScreens = useMediaQuery("(min-width: 1060px)");
  return (
    <div>
        <Navbar
        selectedPages={selectedPage}
        setSelectedPages={setSelectedPage}
        >
        </Navbar>
    </div>
  )
}

