import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#f8fafc]'>

        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-sky-500'>Howdy! My name is</p>
            <h2 className='text-4xl sm:text-7xl font-bold'>David Lindner</h2>
            <h2 className='text-4xl sm:text-7xl font-bold text-zinc-600'>I'm a Full Stack Software Engineer.</h2>
            <p className='text-zinc-600 py-4 max-w-[700px]'>
                I specialize in building exceptional mobile and web applications using a multitude of
                different technologies. I'm focused on building beautiful, and responsive, full stack 
                projects.
            </p>
            <div>
                <button className='text-sky-500 group border-2 border-sky-500 px-6 py-3 flex items-center hover:bg-sky-500 hover:text-white'>
                    <Link to='projects' smooth={true} duration={500}>
                        View Projects
                    </Link>
                    <span className='group:hover:rotate-90 duration-300'>
                        <HiArrowNarrowRight className='ml-3'/>
                    </span>
                </button>
            </div>
        </div>

    </div>
  )
}

export default Home;