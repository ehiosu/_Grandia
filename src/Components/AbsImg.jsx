import React from 'react'
import image from '../../Assets/Minijumbo.jpg'
export const AbsImg = ({img,justify,translate,width}) => {
    img?img=img:img=image
    justify?justify:justify='justify-end'
    width?width:width='w-[30%]'
    translate?translate:translate='md:translate-y-[-100px] translate-y-[-75px]'
  return (
    <div className={`flex w-full ${justify} md:h-[30%]`}>
        <div className={`w-[60%] md:${width}   `}>
            <img src={img} alt="" className={`z-10  ${translate} object-contain shadow-md bg-fixed md:bg-bottom bg-cover`}/>

        </div>
    </div>
  )
}
