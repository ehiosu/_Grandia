import React from 'react'

import { data } from '../RestaurantData'
export const Hotels = () => {
  return (
    <section  className=' md:h-[30vh] font-Poppins mt-52'>
        <div className='   flex flex-col justify-center text-center overflow-hidden'>
            <h1 className='border-b-2 w-80 p-0 text-center text-3xl mx-auto'>
                Top Hotels
                <div className='relative w-6 h-6 rounded-full bg-[#A47A48] left-[48%] top-3'></div>
            </h1>
              <div className="w-[80vw] mx-auto overflow-hidden ">
              <div className="flex my-4 w-[200%] gap-2">
                <div className="flex w-[100%] animate-marquee-infinite gap-2">
                  {
                    data.map((restaurant)=>{
                      return <div >
                        <img src={restaurant.Image} alt="" className='bg-fixed  object-cover w-80 h-52 ' />
                        <p className='mt-2 mb-4  font-semibold font-poppins'>{restaurant.Title}</p>
                        <p className='font-black'>{restaurant.Text}</p>
                      </div>
                    })
                  }
                </div>
                <div className="flex w-[100%] animate-marquee-infinite  gap-2">
                {
                    data.map((restaurant)=>{
                      return <div>
                        <img src={restaurant.Image} alt="" className='object-cover bg-fixed w-80 h-52'/>
                        <p className='mt-2 mb-4 font-semibold'>{restaurant.Title}</p>
                        <p className='font-black'>{restaurant.Text}</p>
                      </div>
                    })
                  }
                </div>
              </div>
              </div>

            </div>
            
        
    </section>
  )
}
