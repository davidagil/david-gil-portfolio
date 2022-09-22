import React from 'react';

// Images
import Youtube from '../assets/youtube.png'
import Blog  from '../assets/blog.png';
import Udemy from '../assets/udemy.png';

const Content = () => {
  return (
    <div className='w-full h-screen text-sky-500 bg-[#f8fafc] pb-9'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-1 gap-8'>
                <div className='sm:text-center pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-sky-500'>
                        Content
                    </p>
                </div>
            </div>
            <div className='max-w-[1000px] w-full grid grid-cols-1 gap-8'>
                <p className='pb-6 text-center text-zinc-600'>
                    Checkout some of the content i've created from Youtube tutorials to blog posts to my Udemy Course!
                </p>
            </div>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>

                <div></div>

                </div>
                <div className='max-w-[1000px] max-h-[600px] w-full grid sm:grid-cols-2 gap-8 text-zinc-600 px-4 pb-8'>

                    <div
                        style={{ backgroundImage: `url(${Youtube})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                    >
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                YouTube Tutorials
                            </span>
                            <div className='pt-8 text-center'>
                                <a target="_blank" rel="noreferrer" href='https://www.youtube.com/channel/UC5BMmH2DvXboFMSiUBquCww/videos'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    Check it out
                                </button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div
                        style={{ backgroundImage: `url(${Blog})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                    >
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Blog Posts
                            </span>
                            <div className='pt-8 text-center'>
                                <a target="_blank" rel="noreferrer" href='https://thecodingcavalry.com/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    Check it out
                                </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='max-w-[1000px] w-full grid grid-cols-1 gap-8'>
                    <div className='max-w-[1000px] max-h-[600px] w-full grid sm:grid-cols-1 gap-8 text-zinc-600 px-4 pb-8'>
                        <div
                            style={{ backgroundImage: `url(${Udemy})` }}
                            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                        >
                            <div className='opacity-0 group-hover:opacity-100'>
                                <span className='text-2xl font-bold text-white tracking-wider'>
                                    REST API Udemy Course
                                </span>
                                <div className='pt-8 text-center'>
                                    <a target="_blank" rel="noreferrer" href='https://www.udemy.com/course/rest-api-mongodb-express-nodejs/learn/lecture/25708476#overview'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Check it out
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

export default Content;