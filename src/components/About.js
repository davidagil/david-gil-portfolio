import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen text-sky-500 bg-[#f8fafc] pb-9'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>

                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-sky-500'>
                        About
                    </p>
                </div>

                <div></div>

                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 text-zinc-600 px-4'>
                    <div className='sm:text-right text-4xl font-bold '>
                        <p>
                            Hey there! This is David. Take a look around and see what I have to offer in the world of software engineering.
                        </p>
                    </div>
                    <div>
                        <p className='pb-2'>
                            I am a Full Stack Software Engineer with a passion for the Front End. Designing 
                            and implementing structure and functionality into mobile and web applications 
                            fills me with joy. On the web side, I have experience with frameworks such as 
                            React and Vue; coinciding with CSS frameworks Tailwind, Material UI, and Tailwind 
                            for all of the styling needs. On the flip side, for mobile, I have vast experience 
                            using the Flutter SDK to create Android and iOS applications; along with React Native. 
                        </p>
                    <div>
                        <p className='pb-2'>
                            Towards the Back End, I have been a part of several projects that have used the Rust 
                            programming language such as REST APIs and Software Development Kits for crypto 
                            currency. While Rust is is a great overall language that can be used for both mobile 
                            and web projects; I also have knowledge of the Javascript ecosystem such as 
                            Node, Express, and MongoDB/Mongoose.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About;