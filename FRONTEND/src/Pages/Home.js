import * as React from 'react';
import SideBar from '../Components/SideBar';
import pic1 from '../images/pic1.jpeg'
import pic2 from '../images/pic2.jpeg'
import pic3 from '../images/pic3.jpeg'
import pic4 from '../images/pic4.jpeg'
import pic5 from '../images/pic5.jpeg'
import { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { Drawer } from '@mui/material'
import Box from '@mui/material/Box';
import { FcShop } from 'react-icons/fc';

const Home = () => {
    const slides = [
        {
            url: pic1,
        },
        {
            url: pic2,
        },


        {
            url: pic4,
        },
        {
            url: pic5,
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const [state, setState] = React.useState({
        right: false,
    });
    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };
    return (
        <div className='flex flex-col h-full' style={{ "backgroundColor": "#f5f5f5" }}>
            <div className="w-full flex flex-col sticky top-0  ">
                <SideBar />
            </div>
            <React.Fragment key="right">
                <Drawer className=" h-screen w-72 sticky rounded-md top-0" anchor='right' open={state["right"]} onClose={toggleDrawer("right", false)} >
                    <Box sx={{ width: 350 }} className="h-full" >
                        <div className='h-full flex items-center flex-col justify-between divide-y divide-gray-300'>
                            <div className='w-full h-16 text-lg flex flex-row justify-around items-center top-0 bg-gray-100 font-bold text-gray-900 shadow'>
                                <div></div>
                                <div className='flex flex-row items-center '>
                                    <div className='cursor-pointer mr-2'>
                                        <FcShop size={30} />
                                    </div>
                                    Nom d'annoceur
                                </div>
                                <div className='cursor-pointer' onClick={toggleDrawer("right", false)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </div>
                            </div>
                            <div className='flex flex-row items-center p-2 w-full'>
                                <input type="text" className="bg-gray-50 border border-gray-500 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Ecrire" required />
                                <svg aria-hidden="true" className="w-8 h-8 rotate-45 ml-2 cursor-pointer" fill="blue" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path></svg>
                            </div>
                        </div>
                    </Box>
                </Drawer>
            </React.Fragment>
            <div className='mt-8 h-screen'>
                <div className="grid grid-cols-4 gap-3 m-8">
                    <div className=" cursor-pointer bg-white max-w-xs  rounded-lg shadow-md ">
                        <div className=" flex flex-col">
                            <div className='  w-full h-72 group'>
                                <div
                                    style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
                                    className='w-full flex-col justify-between flex items-center h-full rounded-sm bg-center bg-cover duration-500'
                                >
                                    <div className='flex w-full justify-between flex-row p-3 '>
                                        <div></div>
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(0, 0, 0, 0.5)" className="w-6 h-6" stroke='white'>
                                                <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                                            </svg>

                                        </div>
                                    </div>
                                    <div className='flex w-full group flex-row justify-between  p-2'>
                                        <div className='hidden group-hover:block top-[50%] text-lg rounded-full p-2 bg-white text-black cursor-pointer' onClick={prevSlide}>
                                            <BsChevronCompactLeft size={15} />
                                        </div>
                                        <div className='hidden group-hover:block top-[50%] text-lg rounded-full p-2 bg-white text-black cursor-pointer' onClick={nextSlide}>
                                            <BsChevronCompactRight size={15} />
                                        </div>
                                    </div>
                                    <div></div>
                                </div>
                            </div>
                            <div className=' divide-y divide-gray-300'>
                                <div className='p-3' >
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 "> Location Local Alger Bordj el bahri </h5>
                                    <div className='flex flex-row items-center justify-between '>
                                        <h5 className=" text-2xl  tracking-tight text-[#e95903] ">6 millions</h5>
                                    </div>
                                </div>
                                <div className='flex flex-row justify-between py-2 px-3'>
                                    <div>environ 4 jours</div>
                                    <div onClick={toggleDrawer("right", true)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="black" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Home