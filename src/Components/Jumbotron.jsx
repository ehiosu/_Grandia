import React from 'react'
import {BsSearch} from 'react-icons/bs'
import jmb from '../../Assets/jumboimage.jpg'
export const Jumbotron = ({image,text}) => {
    image?image:image =jmb
  return (
    <section>
        <div className='w-full md:h-[80vh] overflow-hidden jumbo object-contain bg-fixed md:bg-bottom bg-cover '>
           <div className="overlay md:backdrop-blur-sm w-full">
            <div className="flex justify-center align-middle flex-col gap-10 z-10">
                  <div className='flex flex-row md:gap-10 gap-20 justify-center'>
                    <span className='font-semibold md:text-6xl text-3xl text-white font-germania-One font'>Find your home</span>
                    <span className='font-semibold md:text-6xl text-3xl  text-[#A47A48] font-germania-One'>Find your place</span>
                  </div>
                  <div>
                  <div className='w-full'>
                      
                      <div className="relative mt-1 rounded-md shadow-sm md:w-[80%] w-[96%]  md:mx-auto flex flex-row gap-4 md:justify-center justify-start ml-[-110px] ">
                        <div className="pointer-events-none absolute inset-y-0 md:left-0 md:right-[100%]  flex items-center pl-3">
                           <span className=" sm:text-6xl "><BsSearch className='md:text-2xl text-3xl my-auto '/></span> 
                        </div>
                        <input type="text" name="price" id="price" className=" block md:w-full rounded-md w-[250px] border-gray-300 md:h-14 px-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm text-3xl h-12 " />
                       <button className='   bg-[#A47A48] text-white py-2 md:px-10 px-6 text-center rounded-md'>Search</button>
                      </div>
                    </div>
                  </div>
              </div>
           </div>
        </div>
    </section>
  )
}
