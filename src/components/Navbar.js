import React, { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link } from 'react-scroll';

// Assets
import Avatar from '../assets/avatar.png';
import Resume from '../assets/Resume.pdf';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#f8fafc] text-sky-500'>
            {/* <div>
                <img src={ Avatar } alt="Avater logo" style={{ width: '65px' }}/>
            </div> */}

            
            <ul className='hidden md:flex'>
                <li>
                    <Link to='home' smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to='about' smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                <li>
                    <Link to='technologies' smooth={true} duration={500}>
                        Technologies
                    </Link>
                </li>
                <li>
                    <Link to='projects' smooth={true} duration={500}>
                        Projects
                    </Link>
                </li>
                <li>
                    <Link to='contact' smooth={true} duration={500}>
                        Contact
                    </Link>
                </li>
            </ul>
            

            { /* Hamburger menu */}
            <div onClick={handleClick} className='md:hidden z-10'>
                {!nav ? <FaBars/> : <FaTimes/>}
            </div>

            { /* Mobile Menu */}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#f8fafc] flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to='home' smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to='about' smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to='technologies' smooth={true} duration={500}>
                        Technologies
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to='projects' smooth={true} duration={500}>
                        Projects
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
                        Contact
                    </Link>
                </li>
            </ul>

            { /* Social Icons */}
            <div className='hidden lg:flex fixed flex-col top-[35%] left-0 text-white'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-800'>
                        <a className='flex justify-between items-center w-full' target="_blank" without rel="noreferrer" href='https://www.linkedin.com/in/davidlindnerjr/'>
                            LinkedIn <FaLinkedin size={30}/>
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-700'>
                        <a className='flex justify-between items-center w-full' target="_blank" without rel="noreferrer" href='https://github.com/davidlindnerjr'>
                            GitHub <FaGithub size={30}/>
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                        <a className='flex justify-between items-center w-full' target="_blank" without rel="noreferrer" href='https://www.youtube.com/channel/UC5BMmH2DvXboFMSiUBquCww/videos'>
                            YouTube <FaYoutube size={30}/>
                        </a>
                    </li> 
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500'>
                        <Link to='contact' smooth={true} duration={500}>
                            <a className='flex justify-between items-center w-full' href='/'>
                                Email
                            </a>
                        </Link>
                        <HiOutlineMail size={30}/>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-400'>
                        <a className='flex justify-between items-center w-full' href={Resume} rel="noreferrer" download target="_blank">
                            Resume <BsFillPersonLinesFill size={30}/>
                        </a>
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default Navbar;