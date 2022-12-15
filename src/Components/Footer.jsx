import React from 'react'
import {AiFillFacebook,AiOutlineTwitter} from 'react-icons/ai'
export const Footer = () => {
  return (
    <footer className='md:min-h-[30vh] min-h-[35vh] w-full  bg-black lg:mt-[85vh] md:mt-[90vh] mt-[50vh]  bg-opacity-80'>
        <div className="flex flex-col lg:w-[60%] md:w-[80%] w-full justify-center md:mx-auto lg:p-8 md:p-4 py-4 px-4  gap-4">
          <div className="grid md:grid-cols-5 grid-cols-2 text-white font-medium md:gap-0 text-center">
            <h1>Home</h1>
            <h1 className=''>About</h1>
            <h1 className=''>Services</h1>
            <h1 className=''>Community</h1>
            <h1 className=''>Contact Us</h1>
          </div>
          <div className="flex md:flex-row flex-col gap-4">
            <AiOutlineTwitter className='text-3xl text-blue-400 my-auto md:mx-0 mx-auto'/>
            <AiFillFacebook className='text-3xl text-blue-400 bg-white border-transparent my-auto md:mx-0 mx-auto'/>
            <div className="flex flex-row w-full ">
              <input className='md:w-[80%] w-[200px] md:mx-0 mx-auto'   type="text" name="" id="" />
              <button className='md:w-[30%] w-[30%] -translate-x-6 text-white text-xl font-medium text-center p-1 bg-[#A47A48]'>Subscribe</button>
            </div>
          </div>
          <p className='text-white lg:w-[1000px] lg:-translate-x-12 md:ml-0 ml-2 my-2 p-2'>By using our site, you acknowledge that you have read and understand our Cookie Policy, Privacy Policy, and our Terms of Service. </p>
        </div>
    </footer>
  )
}
