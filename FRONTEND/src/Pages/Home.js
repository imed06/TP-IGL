import * as React from 'react';
import SideBar from '../Components/SideBar';
import pic1 from '../images/pic1.jpeg'
import pic2 from '../images/pic2.jpeg'
import pic3 from '../images/pic3.jpeg'
import pic4 from '../images/pic4.jpeg'
import pic5 from '../images/pic5.jpeg'
import { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';

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
    return (
        <div className='flex flex-col h-full' style={{ "backgroundColor": "#f5f5f5" }}>
            <div className="w-full flex flex-col sticky top-0  ">
                <SideBar />
            </div>
            <div className='mt-8 h-screen'>
                <div className="grid grid-cols-4 gap-3 m-8">
                    <div className=" cursor-pointer bg-white max-w-xs  rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                        <div className=" flex flex-col">
                            <div className='  w-full h-72 group'>
                                <div
                                    style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
                                    className='w-full flex-col justify-between flex items-center h-full rounded-md bg-center bg-cover duration-500'
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
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">In the night Apart</h5>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">4 Bedrooms - 2 Bathrooms - 2.5M</p>
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">$753,00/<span className='text-gray-700 font-normal'>Year</span></h5>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home