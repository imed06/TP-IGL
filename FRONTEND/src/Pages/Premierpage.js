import React from 'react'
import '../styles/PremierPage.css'
import logo from '../images/logo.png'
import SideBar from '../Components/SideBar'
export default function PremierPage() {
  return (
    <div>
        <div>
            <div className='mini_navbar'>
              <button id='home'>Home</button>
              <button id='about_us'>About us</button>
              <button id='sign_in'>sign up</button>

            </div>
        </div>
        <div className="h-full  ">
           <div id="premier_partie" className='flex flex-row '>
              <div>
                     <h1>Rent your dream house with us </h1>   
              </div>
              <div className="logo bg-slate-50">
                 <img src={logo} className="logoA rounded-full" alt="logo" />     
              </div>
               
              </div>  
              
              <div className="about_us">About us</div>
        </div>

    </div>
  )
}
