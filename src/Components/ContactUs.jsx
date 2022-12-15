import React from 'react'
// import Anime, { anime } from 'react-anime';
import {AiFillPhone,AiFillMail,} from 'react-icons/ai'

import {MdLocationOn} from 'react-icons/md'
export const ContactUs = () => {
  return (
    <section className='font-poppins md:absolute lg:mt-56 md:mt-80 w-full '>
      <div className= "flex flex-col justify-center text-center">
      
            <div className="flex flex-col justify-center text-center">
            <h1 className='border-b-2 w-80  text-center text-3xl mx-auto p-2'>
                Contact us
            </h1>
            <span className=' w-3 h-3 rounded-full bg-[#A47A48] mx-auto translate-y-[-7px]'></span>
            </div>
        {/* <div className="flex flex-row">

        </div> */}
        <div className='md:w-[90%] w-full text- mx-auto mt-10 '>
          <div className='grid md:grid-cols-3 grid-cols-1 md:gap-0 gap-6 h-[25vh] '>
            <div className='testflex hover:shadow-lg'>
              <AiFillPhone className=''/>
              <p className='text-[1rem] my-6'>Phone Number</p>
              <p className='md:my-3 my-1 text-[1rem]  text-gray-600'>+234 847 277 0923</p>
            </div>
            <div className='testflex hover:shadow-lg '>
            <AiFillMail/>
            <p className='text-[1rem] my-6'>Email</p>
            
            <p className='md:my-3 my-1 text-[1rem]  text-gray-600'>grandia.10@gmail.com</p>
            </div>
            <div className='testflex hover:shadow-lg'>
            <MdLocationOn/>
            <p className='text-[1rem] my-6'>Location</p>
            <p className='md:my-3 my-1 text-[1rem] text-gray-600'>6391 Elgin St. Celina, Delaware </p>
            <p></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
