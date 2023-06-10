"use client";
import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi';
import {RxCross1} from 'react-icons/rx';
export default function Header() {
    const [toggle,setToggle] = useState(true)
  return (
    <section className="bg-gray-700 text-white">
   <div className="flex justify-between">
   <h1 className="font-autograph m-9 hover: scale-75 duration-500">Niyamat Bari</h1>
   <ul className="m-7 md:flex hidden">
    <a className="cursor-pointer" href="#home">
    <li className="m-5 text-2xl font-autograph hover:scale-150 duration-300">Home</li>
    </a>
    <a className="cursor-pointer" href="#about">
    <li className="m-5 text-2xl font-autograph hover:scale-150 duration-300">About</li>
    </a>
    {/* <li className="m-5 text-2xl font-autograph hover:scale-150 duration-300">Portfolio</li> */}
    <a className="cursor-pointer" href="#skills">
    <li className="m-5 text-2xl font-autograph hover:scale-150 duration-300">Skills</li>
    </a>
    <a className="cursor-pointer" href="#contact">
    <li className="m-5 text-2xl font-autograph hover:scale-150 duration-300">Contact</li>
    </a>


   </ul>
          <div className="pr-5 md:hidden z-20" onClick={()=>{setToggle(!toggle);
        console.log(toggle);
        }}>
             
        {toggle? <GiHamburgerMenu size={30}/> :<RxCross1 size={30}/>}
          </div>
          {/* overlay start */}
          {!toggle ?
          <div className='fixed top-0 left-0 bg-black h-screen text-red-500  w-full flex items-center justify-center'>
          <ul className="m-7   text-white">
    <li className="m-5 my-2 text-4xl font-autograph  ">Home</li>
    <li className="m-5 my-2 text-4xl font-autograph  ">About</li>
    {/* <li className="m-5 my-2 text-4xl font-autograph  ">Portfolio</li> */}
    <li className="m-5 my-2 text-4xl font-autograph  ">Skills</li>
    <li className="m-5 my-2 text-4xl font-autograph  ">Contact</li>


   </ul> 
          </div>
          :null}
          {/* overlay ends */}

 </div>
  </section>
   )
}
