import React from 'react'
import {BsSearch} from 'react-icons/bs'
import jmb from '../../Assets/jumboimage.jpg'
export const Jumbotron = ({image,text}) => {
    image?image:image =jmb
  return (
    <section>
        <div className='w-full h-[60vh] overflow-hidden jumbo object-contain bg-fixed md:bg-bottom bg-cover '>
           <div className="overlay md:backdrop-blur-sm ">
            <div className="flex justify-center align-middle flex-col gap-10 z-10">
                  <div className='flex flex-row md:gap-10 gap-20 justify-center'>
                    <span className='font-semibold md:text-6xl text-3xl text-white font-germania-One font'>Find your home</span>
                    <span className='font-semibold md:text-6xl text-3xl  text-[#A47A48] font-germania-One'>Find your place</span>
                  </div>
                  <div>
                  <div>
                      
                      <div class="relative mt-1 rounded-md shadow-sm md:max-w-[50%] w-[100%]  mx-auto flex flex-row gap-2 justify-center">
                        <div class="pointer-events-none absolute inset-y-0 md:left-0 right-[180%] top-3 md:top-0 flex md:items-center pl-3">
                           <span class=" sm:text-sm "><BsSearch className='md:text-2xl'/></span> 
                        </div>
                        <input type="text" name="price" id="price" class=" block md:w-full rounded-md border-gray-300 md:h-10 px-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
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
