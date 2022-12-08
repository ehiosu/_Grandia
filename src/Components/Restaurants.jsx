import React from 'react'

import { data } from '../RestaurantData'
export const Restaurants = () => {
  return (
    <section  className=' md:h-[30vh]  '>
        <div className='  w-full  flex flex-col justify-center text-center'>
            <h1 className='border-b-2 w-80 p-0 text-center text-3xl mx-auto'>
                Top Restaurants
                <div className='relative w-6 h-6 rounded-full bg-[#A47A48] left-[48%] top-3'></div>
            </h1>
           <div className="relative flex flex-row justify-center mx-auto my-6 animate-marquee-infinite">
           {
                data.map((restaurant,id)=>{
                 return <div key={id} className=' w-80 h-80 object-contain  mx-2'>
                    <img src={restaurant.Image} alt="" className='   '/>
                    <p>{restaurant.Title}</p>
                    <p>{restaurant.Text}</p>
                 </div>   
                })
            }
            {
                data.map((restaurant,id)=>{
                 return <div key={id} className='w-80 h-80   mx-2'>
                    <img src={restaurant.Image} alt="" className='   '/>
                    <p>{restaurant.Title}</p>
                    <p>{restaurant.Text}</p>
                 </div>   
                })
            }
            {
                data.map((restaurant,id)=>{
                 return <div key={id} className='w-80 h-80   mx-2'>
                    <img src={restaurant.Image} alt="" className='   '/>
                    <p>{restaurant.Title}</p>
                    <p>{restaurant.Text}</p>
                 </div>   
                })
            }
            
           </div>

            </div>
            
        
    </section>
  )
}
