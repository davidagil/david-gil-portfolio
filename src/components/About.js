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
                <div className="max-w-[1000px] w-full flex justify-center items-center text-zinc-600 px-4">
                <div className="">
                    <p className="pb-2 text-lg">
                    Full Stack Software Engineer with a strong passion for front-end development, specializing in building responsive and user-friendly web and mobile applications. Experienced in modern web frameworks including React and Vue, with expertise in styling using Tailwind CSS and Material UI. Skilled in mobile development with Flutter SDK (Android/iOS) and React Native. On the back end, contributed to projects leveraging Rust for REST APIs and SDKs in the cryptocurrency space, alongside proficiency in the JavaScript ecosystem including Node.js, Express, and MongoDB/Mongoose.
                    </p>
                    <p className="pb-2 text-lg">
                    Beyond technical expertise, I have led cross-functional teams to deliver large-scale projects, overseeing requirements, guiding developers, and ensuring successful implementation of high-impact solutions that improved efficiency and reduced costs.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About;