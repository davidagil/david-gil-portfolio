import React from 'react';

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#f8fafc] text-sky-500 flex justify-center items-center p-4'>
        <form method='POST' action='https://getform.io/f/a3490681-4360-470c-91cc-576807483a9b' className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-sky-500'>Contact</p>
                <p className='py-4 text-zinc-600'>Fill out the form below to send me an email. Let's get in touch! - <span className='font-bold'>david.a.gil310@gmail.com</span></p>
            </div>
            <input className='text-zinc-600 p-2' type='text' placeholder='Name' name='name'/>
            <input className='text-zinc-600 my-4 p-2' type='email' placeholder='Email' name='email'/>
            <textarea className='text-zinc-600 p-2' name='message' id='' cols='30' rows='10' placeholder='Message'></textarea>
            <button className='text-sky-500 hover:text-white border-2 hover:bg-sky-500 border-sky-500 px-4 py-3 my-8 mx-auto flex items-center'>Submit Email</button>
        </form>
    </div>
  )
}

export default Contact;