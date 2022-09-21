import React from 'react';

// Images
import MernShop from '../assets/mern-shop.png'
import CodersCorner from '../assets/cc.png';
import Calaxy from '../assets/calaxy.png';
import Mingo from '../assets/mingo.png';
import CalaxyWeb from '../assets/calaxy-web.png';
import hbar from '../assets/hbar.png';

const Projects = () => {
  return (
    <div name='projects' className='w-full md:h-screen bg-[#f8fafc] text-sky-500'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-sky-500'>Work</p>
                <p className='py-6 text-zinc-600'>Take a gander at some of the projects i've worked on and have been a part of!</p>
            </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
            <div
                style={{ backgroundImage: `url(${MernShop})` }}
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

            <div
                style={{ backgroundImage: `url(${CodersCorner})` }}
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

            <div
                style={{ backgroundImage: `url(${Calaxy})` }}
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

            <div
                style={{ backgroundImage: `url(${CalaxyWeb})` }}
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

            <div
                style={{ backgroundImage: `url(${Mingo})` }}
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

            <div
                style={{ backgroundImage: `url(${hbar})` }}
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

        </div>
        </div>           
    </div>
  )
}

export default Projects;