import Image from 'next/image';
import React from 'react'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import logo from '../images/bari.png';
export default function Background() {
  return (
   <section className='max-w-5xl mx-auto flex md:flex-row flex-col mt-6'>
    {/* {left-part-start} */}
    <div className="p-5 max-w-lg text-white">
    <h1 className='p-5'>I am a Full Stack Developer </h1>
    {/* <p> As a full-stack developer, my professional expertise encompasses both front-end and back-end development, making me a versatile and valuable asset to any tech team. I possess a deep understanding of programming languages, frameworks, and databases, allowing me to create dynamic and responsive web applications that meet the needs of clients and end-users alike. With years of experience in the field, I have honed my skills in software development, project management, and problem-solving, ensuring that I can deliver high-quality products on time and within budget..</p> */}
    {/* <button className="group flex justify-center items-center bg-gradient-to-r from-cyan-500 to-blue-500  py-2 px-4 rounded-lg">Profile
   < MdOutlineKeyboardArrowRight size={20} className="group-hover:rotate-90 duration-500"/>
    </button> */}
    </div>
        {/* {left-part-ends} */}
        {/* right area  */}
        <div>
        <Image src={logo} alt='photo' className='md: w-1/2 mx-auto'/>
        </div>

   </section>
  )
}
