import React from 'react'
import Image from '../../assets/my-image/maryam_profile_image.jpg'

function Hero() {
  return (
   
      <div className="md-w-full w-full h-fit xl:mx-4 px-3 text-[#2F4F4F]">
        <div className="flex flex-col md:flex-row  ">
                <div className="col-md-6 w-full h-50 xl:py-8 p-4 xl:space-y-5 rounded-tl-3xl rounded-bl-3xl bg-[#f7edd1]">
                       
                 <h1 className="display-4 flex flex-col text-gray-700 xl:space-y-3 xl:p-5">Hi, I’m <span className='font-mono font-extrabold from-neutral-800 text-3xl xl:text-5xl my-3'>Maryam Afzal</span> <span className='text-base xl:text-lg border-b w-fit border-[3556B2F] uppercase'>a Frontend Developer</span></h1>
                
                 <p className='m-3 py-3 text-gray-500 xl:space-y-3 xl:p-5 xl:w-3/4 xl:text-2xl'>I design and build modern, responsive websites that bring ideas to life.</p> 
                 <div className='w-full xl:p-5 m-2 flex flex-col space-y-2'>
                 <button className='w-1/2  bg-[#556B2F] text-white p-2 xl:p-3 cursor-pointer' >Veiw my work</button>
                 <button className='w-1/2 bg-[#556B2F] text-white p-2 xl:p-3 cursor-pointer'>Contact me</button>
                 </div>
                </div>

                <div className="col-md-8 w-full h-50">
                        <img className=' w-full rounded-tr-3xl rounded-br-3xl' type="image" src={Image} alt="img"/>
                </div>

        </div>
      </div>
   
  )
}

export default Hero
