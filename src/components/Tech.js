import React from 'react';

// IMAGES

// Languages
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import Javascript from '../assets/javascript.png';
import Rust from '../assets/rust.png';
import Dart from '../assets/dart.png';
import Python from '../assets/python.png';

// Back end
import MongoDB from '../assets/mongo.png';
import Node from '../assets/node.png';

// Frameworks
import ReactImage from '../assets/react.png';
import Flutter from '../assets/flutter.png';
import Vue from '../assets/vue.png';

// Front end framework
import Tailwind from '../assets/tailwind.png'
import Bootstrap from '../assets/bootstrap.png';
import MaterialUI from '../assets/materialui.png';

// Version Control & Hosting
import Firebase from '../assets/firebase.png';
import GitHub from '../assets/git.png';
import Java from '../assets/java.png';

const Tech = () => {
  return (

    <div name='technologies' className='w-full md:h-screen bg-[#f8fafc] text-sky-500 py-8'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className="pt-9">
                <p className='text-4xl font-bold inline border-b-4 border-sky-500'>Technologies</p>
                <p className='py-4 text-zinc-600'>Here are the languages, frameworks, and hosting services im skilled in.</p>
            </div>
            
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>

                { /*HTML*/ }
                <div className='pt-8 shadow-md shadow-zinc-600 hover:scale-110 duration-500'>
                    <div className='w-20 mx-auto text-zinc-600'>
                        <img src={ HTML } alt='HTML Icon'/>
                        <p className='my-4'>HTML</p>
                    </div>
                </div>

                { /*CSS*/ }
                <div className='pt-8 shadow-md shadow-zinc-600 hover:scale-110 duration-500'>
                    <div className='w-20 mx-auto text-zinc-600'>
                        <img src={ CSS } alt='CSS Icon'/>
                        <p className='my-4'>CSS</p>
                    </div>
                </div>

                { /*Javascript*/ }
                <div className='pt-8 shadow-md shadow-zinc-600 hover:scale-110 duration-500'>
                    <div className='w-20 mx-auto text-zinc-600'>
                        <img src={ Javascript } alt='Javascript Icon'/>
                        <p className='my-4'>Javascript</p>
                    </div>
                </div>

                { /*Rust*/ }
                <div className='pt-8 shadow-md shadow-zinc-600 hover:scale-110 duration-500'>
                    <div className='w-20 mx-auto text-zinc-600'>
                        <img src={ Rust } alt='Rust Icon'/>
                        <p className='my-4'>Rust</p>
                    </div>
                </div>

                { /*Dart*/ }
                <div className='pt-8 shadow-md shadow-zinc-600 hover:scale-110 duration-500'>
                    <div className='w-20 mx-auto text-zinc-600'>
                        <img src={ Dart } alt='Dart Icon'/>
                        <p className='my-4'>Dart</p>
                    </div>
                </div>
                
                { /*Python*/ }
                <div className='pt-8 shadow-md shadow-zinc-600 hover:scale-110 duration-500'>
                    <div className='w-20 mx-auto text-zinc-600'>
                        <img src={ Python } alt='Python Icon'/>
                        <p className='my-4'>Python</p>
                    </div>
                </div>

                { /*Java*/ }
                <div className='pt-8 shadow-md shadow-zinc-600 hover:scale-110 duration-500'>
                    <div className='w-20 mx-auto text-zinc-600'>
                        <img src={ Java } alt='Java Icon'/>
                        <p className='my-4'>Java</p>
                    </div>
                </div>

                { /*MongoDB*/ }
                <div className='pt-8 shadow-md shadow-zinc-600 hover:scale-110 duration-500'>
                    <div className='w-20 mx-auto text-zinc-600'>
                        <img src={ MongoDB } alt='MongoDB Icon'/>
                        <p className='my-4'>MongoDB</p>
                    </div>
                </div>

                { /*Node*/ }
                <div className='pt-8 shadow-md shadow-zinc-600 hover:scale-110 duration-500'>
                    <div className='w-20 mx-auto text-zinc-600'>
                        <img src={ Node } alt='Node Icon'/>
                        <p className='my-4'>Node</p>
                    </div>
                </div>

                { /*ReactImage*/ }
                <div className='pt-8 shadow-md shadow-zinc-600 hover:scale-110 duration-500'>
                    <div className='w-20 mx-auto text-zinc-600'>
                        <img src={ ReactImage } alt='ReactImage Icon'/>
                        <p className='my-4'>React</p>
                    </div>
                </div>

                { /*Vue*/ }
                <div className='pt-8 shadow-md shadow-zinc-600 hover:scale-110 duration-500'>
                    <div className='w-20 mx-auto text-zinc-600'>
                        <img src={ Vue } alt='Vue Icon'/>
                        <p className='my-4'>Vue</p>
                    </div>
                </div>

                { /*Flutter*/ }
                <div className='pt-8 shadow-md shadow-zinc-600 hover:scale-110 duration-500'>
                    <div className='w-20 mx-auto text-zinc-600'>
                        <img src={ Flutter } alt='Flutter Icon'/>
                        <p className='my-4'>Flutter</p>
                    </div>
                </div>

                { /*Tailwind*/ }
                <div className='pt-8 shadow-md shadow-zinc-600 hover:scale-110 duration-500'>
                    <div className='w-20 mx-auto text-zinc-600'>
                        <img src={ Tailwind } alt='Tailwind Icon'/>
                        <p className='my-4'>Tailwind</p>
                    </div>
                </div>

                { /*Bootstrap*/ }
                <div className='pt-8 shadow-md shadow-zinc-600 hover:scale-110 duration-500'>
                    <div className='w-20 mx-auto text-zinc-600'>
                        <img src={ Bootstrap } alt='Bootstrap Icon'/>
                        <p className='my-4'>Bootstrap</p>
                    </div>
                </div>

                { /*Material UI*/ }
                <div className='pt-8 shadow-md shadow-zinc-600 hover:scale-110 duration-500'>
                    <div className='w-20 mx-auto text-zinc-600'>
                        <img src={ MaterialUI } alt='MaterialUI Icon'/>
                        <p className='my-4'>Material UI</p>
                    </div>
                </div>

                { /*Firebase*/ }
                <div className='pt-8 shadow-md shadow-zinc-600 hover:scale-110 duration-500'>
                    <div className='w-20 mx-auto text-zinc-600'>
                        <img src={ Firebase } alt='Firebase Icon'/>
                        <p className='my-4'>Firebase</p>
                    </div>
                </div>

                { /*Git*/ }
                <div className='pt-8 shadow-md shadow-zinc-600 hover:scale-110 duration-500'>
                    <div className='w-20 mx-auto text-zinc-600'>
                        <img src={ GitHub } alt='git Icon'/>
                        <p className='my-4'>Git</p>
                    </div>
                </div>

            </div>

        </div>
    </div>
  )
}

export default Tech;