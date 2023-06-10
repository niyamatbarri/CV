import React from 'react'
import {GrLinkedin} from 'react-icons/gr';
import {FaGithub } from 'react-icons/fa';


export default function Icons() {
  return (
    <div className="top-[30vh] fixed">

      <div className='ml-[-90px] my-14  w-[150px] hover:ml-0 duration-500 flex  justify-between  gap-1 text-lg text-center fixed text-white bg-gray-600 top-[60vh] w-36 py-3 px-5 rounded-r-xl'>Linkedin
      <GrLinkedin size={25} />
      </div>
                {/* <Link href={"https://github.com/niyamatbarri"} target={"_blank"}> */}

      <div className='ml-[-85px] my-20  w-[150px] hover:ml-0 duration-500 flex  justify-between  gap-1 text-lg fixed  text-white bg-gray-600 top-[70vh] w-35 py-3 px-5 rounded-r-xl'>
         
        Github
       <FaGithub size={25}/>
      </div>
            {/* </Link> */}

       
       

    </div>
  )
}
