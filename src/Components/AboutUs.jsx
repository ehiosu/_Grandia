import React from 'react'
import { AbsImg } from './AbsImg'
import image from '../../Assets/aboutus.jpg'
export const AboutUs = () => {
  return (
    <section className='w-full my-14 px-10 py-2 h-full font-Poppins'>
        <div className='flex  text-center justify-between md:flex-row flex-col gap-12 md:gap-0'>
            <img src={image} className='md:w-[50%] md:h-[50%] w-full bg-fixed md:bg-bottom bg-cover' />
            <div className=' flex w-full justify-center flex-col align-top md:p-4 md:mb-96 '>
                <div className="flex flex-col justify-center w-full">
                    <h1 className='font-semibold text-4xl border-b-2 border-[#000000] border-opacity-5 md:p-4 p-2  '>About Grandia </h1>
                    <span className='relative rounded-full bg-[#A47A48] w-5 h-5 translate-y-[-10px] left-[46%] md:left-[50%]'></span>
                    
                        <p className='mx-auto md:max-w-[80%] w-full font-black'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra lacus, dolor senectus quis urna rhoncus. Etiam suspendisse imperdiet eget feugiat scelerisque. Suspendisse quam sed at mattis at. Pretium, auctor non, vitae urna enim elit nisi, turpis quisque. Vitae sed odio dapibus morbi vel.
                        </p>
                    
                </div>
            </div>
            
        </div>


    </section>
  )
}
