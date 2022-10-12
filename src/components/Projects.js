import React from 'react';

// Images
import MernShop from '../assets/mern-shop.png'
import CodersCorner from '../assets/cc.png';
import Calaxy from '../assets/calaxy.png';
import Mingo from '../assets/mingo.png';
import CalaxyWeb from '../assets/calaxy-web.png';
import hbar from '../assets/hbar.png';
import Pokemon from '../assets/pokedex.png';
import Teacher from '../assets/teacher.png';
import Landing from '../assets/landing.png';
import Photo from '../assets/photo.png';
import Weather from '../assets/weather.png';
import Organizer from '../assets/organizer.png';
import SpentIt from '../assets/spent-it.png';

const Projects = () => {
  return (
    <div>
        <div name='projects' className='w-full md:h-screen bg-[#f8fafc] text-sky-500'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-sky-500'>Work</p>
                    <p className='py-6 text-zinc-600'>Take a gander at some of the projects i've worked on and have been a part of! Hover over and click on the Code button to see the insides of each project and the technology used to create it. The Demo button will show you the deployed project. Some projects have a Video button that leads you to my tutorial for that app.</p>
                </div>

            <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-4'>

                 {/* SPENT-IT */}
                 <div
                    style={{ backgroundImage: `url(${SpentIt})`, height: '350px' }}
                    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                >
                    <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white tracking-wider'>
                        SPENT-IT (React Native)
                    </span>
                    <div className='pt-8 text-center'>
                        <a target="_blank" rel="noreferrer" href='https://www.youtube.com/shorts/Nuesl4Mm8oQ'>
                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                            Demo
                        </button>
                        </a>
                        <a target="_blank" rel="noreferrer" href='https://github.com/davidlindnerjr/expense-tracker'>
                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                            Code
                        </button>
                        </a>
                    </div>
                    </div>
                </div>

                {/* MERN Shop */}
                <div
                    style={{ backgroundImage: `url(${MernShop})`, height: '350px' }}
                    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                >
                    <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white tracking-wider'>
                        MERN Stack Shop
                    </span>
                    <div className='pt-8 text-center'>
                        <a target="_blank" rel="noreferrer" href='https://mern-shop-dl.herokuapp.com/'>
                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                            Demo
                        </button>
                        </a>
                        <a target="_blank" rel="noreferrer" href='https://github.com/davidlindnerjr/MERN-Stack-Ecommerce-Shop'>
                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                            Code
                        </button>
                        </a>
                    </div>
                    </div>
                </div>
                
                {/* CodersCorner */}
                <div
                    style={{ backgroundImage: `url(${CodersCorner})`, height: '350px' }}
                    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                >
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            The Coders Corner
                        </span>
                        <div className='pt-8 text-center'>
                            <a target="_blank" rel="noreferrer" href='https://the-coders-corner.herokuapp.com/'>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                Demo
                            </button>
                            </a>
                            <a target="_blank" rel="noreferrer" href='https://github.com/davidlindnerjr/the-coders-corner'>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                Code
                            </button>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Calaxy Mobile */}
                <div
                    style={{ backgroundImage: `url(${Calaxy})`, height: '350px' }}
                    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                >
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Calaxy Mobile
                        </span>
                        <div className='pt-8 text-center'>
                            <a target="_blank" rel="noreferrer" href='https://apps.apple.com/us/app/calaxy/id1538454413'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    App Store
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                
                {/* CalaxyWeb */}
                <div
                    style={{ backgroundImage: `url(${CalaxyWeb})`, height: '350px' }}
                    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                >
                    <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white tracking-wider'>
                        Calaxy Web
                    </span>
                    <div className='pt-8 text-center'>
                        <a target="_blank" rel="noreferrer" href='https://www.calaxy.com/'>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                Visit
                            </button>
                        </a>
                    </div>
                    </div>
                </div>

                {/* Mingo */}
                <div
                    style={{ backgroundImage: `url(${Mingo})`, height: '350px' }}
                    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                >
                    <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white tracking-wider'>
                        Mingo
                    </span>
                    <div className='pt-8 text-center'>
                        <a target="_blank" rel="noreferrer" href='https://apps.apple.com/us/app/mingo/id1327553905'>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                App Store
                            </button>
                        </a>
                    </div>
                    </div>
                </div>

                {/* HBAR */}
                <div
                    style={{ backgroundImage: `url(${hbar})`, height: '350px' }}
                    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                >
                    <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white tracking-wider'>
                        Hedera Rust SDK
                    </span>
                    <div className='pt-8 text-center'>
                        <a target="_blank" rel="noreferrer" href='https://github.com/launchbadge/hedera-crypto-rust'>
                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                            Code
                        </button>
                        </a>
                    </div>
                    </div>
                </div>

                {/* Pokedex */}
                <div
                    style={{ backgroundImage: `url(${Pokemon})`, height: '350px' }}
                    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                >
                    <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white tracking-wider'>
                        React Pokedex
                    </span>
                    <div className='pt-8 text-center'>
                        <a target="_blank" rel="noreferrer" href='https://github.com/davidlindnerjr/react-pokedex'>
                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                            Code
                        </button>
                        </a>
                        <a target="_blank" rel="noreferrer" href='https://react-pokedex-7fe58.web.app/'>
                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                            Demo
                        </button>
                        </a>
                        <a target="_blank" rel="noreferrer" href='https://www.youtube.com/watch?v=A5SpI1fVfvU&t=2s'>
                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                            Video
                        </button>
                        </a>
                    </div>
                    </div>
                </div>

                {/* Teacher */}
                <div
                    style={{ backgroundImage: `url(${Teacher})`, height: '350px' }}
                    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                >
                    <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white tracking-wider'>
                        MERN Teacher Website
                    </span>
                    <div className='pt-8 text-center'>
                        <a target="_blank" rel="noreferrer" href='https://github.com/davidlindnerjr/Ms.JL-Teacher-Website'>
                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                            Code
                        </button>
                        </a>
                        <a target="_blank" rel="noreferrer" href='https://sarahjl.herokuapp.com/'>
                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                            Demo
                        </button>
                        </a>
                    </div>
                    </div>
                </div>

                 {/* Reign Landing */}
                 <div
                    style={{ backgroundImage: `url(${Landing})`, height: '350px' }}
                    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                >
                    <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white tracking-wider'>
                        React Product Landing Page
                    </span>
                    <div className='pt-8 text-center'>
                        <a target="_blank" rel="noreferrer" href='https://www.youtube.com/watch?v=YcWYR4iPVJ4'>
                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                            Video
                        </button>
                        </a>
                    </div>
                    </div>
                </div>

                {/* AB Photo */}
                <div
                    style={{ backgroundImage: `url(${Photo})`, height: '350px' }}
                    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                >
                    <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white tracking-wider'>
                        AB Photo Adventures - React
                    </span>
                    <div className='pt-8 text-center'>
                        <a target="_blank" rel="noreferrer" href='https://abphotoadventures.com/'>
                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                            Demo
                        </button>
                        </a>
                    </div>
                    </div>
                </div>

                {/* Weather Dashboard */}
                <div
                    style={{ backgroundImage: `url(${Weather})`, height: '350px' }}
                    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                >
                    <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white tracking-wider'>
                        Weather Dashboard - JQuery
                    </span>
                    <div className='pt-8 text-center'>
                        <a target="_blank" rel="noreferrer" href='https://davidlindnerjr.github.io/WeatherDashboard/'>
                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                            Demo
                        </button>
                        </a>
                        <a target="_blank" rel="noreferrer" href='https://github.com/davidlindnerjr/WeatherDashboard'>
                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                            Code
                        </button>
                        </a>
                    </div>
                    </div>
                </div>

                {/* Life Organizer */}
                <div
                    style={{ backgroundImage: `url(${Organizer})`, height: '350px' }}
                    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                >
                    <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white tracking-wider'>
                        Life Organizer - JQuery
                    </span>
                    <div className='pt-8 text-center'>
                        <a target="_blank" rel="noreferrer" href='https://davidlindnerjr.github.io/Life-Organizer/'>
                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                            Demo
                        </button>
                        </a>
                        <a target="_blank" rel="noreferrer" href='https://github.com/davidlindnerjr/Life-Organizer'>
                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                            Code
                        </button>
                        </a>
                    </div>
                    </div>
                </div>


            </div>
            </div>           
        </div>
    </div>
  )
}

export default Projects;