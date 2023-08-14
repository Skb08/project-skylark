import React from 'react'
import Image from "next/image";

const Gallery = () => {
  return (
    <div className=''>
      <section class="overflow-x-hidden  grid grid-cols-2 max-w-screen gap-10 lg:gap-[4.5rem] p-4  mt-[5%] text-black">

        <div class="mx-auto group bg-white rounded-3xl lg:max-h-full md:max-h-[85%] max-h-[70%]   max-w-md rounded-b-2xl transform duration-500 hover:-translate-y-2 ">
          <div class="content bg-cover bg-center h-64 rounded-2xl max-h-[84%] lg:max-h-full w-full" >
            <Image className='flex items-end w-full h-full object-cover' src={"/images/techkriti.png"} alt="" width="100" height="100" />
          </div>
          <div className='bg-white h-[18%] w-full rounded-xl text-center text-lg sm:text-xl md:text-2xl lg:text-[1.55rem] xl:text-[1.65rem] 2xl:text-[1.75rem] font-normal pt-[2%] font-outfit'>
            <h1>Technoxian</h1>
          </div>
        </div>
        <div class="mx-auto group bg-white rounded-3xl lg:max-h-full md:max-h-[85%] max-h-[70%]  max-w-md rounded-b-2xl transform duration-500 hover:-translate-y-2 ">
          <div class="content bg-cover bg-center h-64 rounded-2xl max-h-[84%] lg:max-h-full w-full" >
            <Image className='flex items-end w-full h-full object-cover' src={"/images/techkriti.png"} alt="" width="100" height="100" />
          </div>
          <div className='bg-white h-[18%] w-full rounded-xl text-center text-lg sm:text-xl md:text-2xl lg:text-[1.55rem] xl:text-[1.65rem] 2xl:text-[1.75rem] font-normal pt-[2%] font-outfit'>
            <h1>Technoxian</h1>
          </div>
        </div>
        <div class="mx-auto group bg-white rounded-3xl lg:max-h-full md:max-h-[85%] max-h-[70%]   max-w-md rounded-b-2xl transform duration-500 hover:-translate-y-2 ">
          <div class="content bg-cover bg-center h-64 rounded-2xl max-h-[84%] lg:max-h-full w-full" >
            <Image className='flex items-end w-full h-full object-cover' src={"/images/aerorix.png"} alt="" width="100" height="100" />
          </div>
          <div className='bg-white h-[18%] w-full rounded-xl text-center text-lg sm:text-xl md:text-2xl lg:text-[1.55rem] xl:text-[1.65rem] 2xl:text-[1.75rem] font-normal pt-[2%] font-outfit'>
            <h1>Technoxian</h1>
          </div>
        </div>
        <div class="mx-auto group bg-white rounded-3xl lg:max-h-full md:max-h-[85%] max-h-[70%]  max-w-md rounded-b-2xl transform duration-500 hover:-translate-y-2 ">
          <div class="content bg-cover bg-center h-64 rounded-2xl max-h-[84%] lg:max-h-full w-full" >
            <Image className='flex items-end w-full h-full object-cover' src={"/images/daily avaition.png"} alt="" width="100" height="100" />
          </div>
          <div className='bg-white h-[18%] w-full rounded-xl text-center text-lg sm:text-xl md:text-2xl lg:text-[1.55rem] xl:text-[1.65rem] 2xl:text-[1.75rem] font-normal pt-[2%] font-outfit'>
            <h1>Technoxian</h1>
          </div>
        </div>
        
        {/* <div class="mx-auto group lg:max-h-full lg:max-w-[45%] max-h-[68%]   max-w-md pb-4 rounded-b-2xl transform duration-500 hover:-translate-y-2 ">
          <div class="content bg-cover bg-center h-64 rounded-2xl max-h-[84%] lg:max-h-full w-full" >
            <Image className='flex items-end w-full h-full bg-black bg-opacity-20  text-sm font-bold  p-4 rounded-2xl object-contain' src={"/images/techkriti.png"} alt="" width="100" height="100" />
          </div>
          <div className='bg-white h-[18%] w-full rounded-xl text-center text-lg sm:text-xl md:text-2xl lg:text-[1.55rem] xl:text-[1.65rem] 2xl:text-[1.75rem]  pt-[2%] font-outfit'>
            <h1>Techkriti'23</h1>
          </div>
        </div>
        <div class="mx-auto group lg:max-h-full lg:max-w-[45%] max-h-[68%] shadow-2xl max-w-md pb-4 rounded-b-2xl transform duration-500 hover:-translate-y-2 ">
          <div class="content bg-cover bg-center h-64 rounded-2xl max-h-[84%] lg:max-h-full w-full" >
            <Image className='flex items-end w-full h-full bg-black bg-opacity-20  text-sm font-bold  p-4 rounded-2xl object-contain' src={"/images/aerorix.png"} alt="" width="100" height="100" />

          </div>
          <div className='bg-white h-[18%] w-full rounded-xl text-center text-lg sm:text-xl md:text-2xl lg:text-[1.55rem] xl:text-[1.65rem] 2xl:text-[1.75rem]  pt-[2%] font-outfit'>
            <h1>Aeroprix'23</h1>
          </div>
        </div>
        <div class="mx-auto group lg:max-h-full lg:max-w-[45%] max-h-[68%] shadow-2xl max-w-md pb-4 rounded-b-2xl transform duration-500 hover:-translate-y-2 ">
          <div class="content bg-cover bg-center h-64 rounded-2xl max-h-[84%] lg:max-h-full w-full" >
            <Image className='flex items-end w-full h-full bg-black bg-opacity-20  text-sm font-bold  p-4 rounded-2xl object-contain' src={"/images/daily avaition.png"} alt="" width="100" height="100" />

          </div>
          <div className='bg-white h-[18%] w-full rounded-xl text-center text-lg sm:text-xl md:text-2xl lg:text-[1.55rem] xl:text-[1.65rem] 2xl:text-[1.75rem] pt-[2%] font-outfit'>
            <h1>Daily Aviation</h1>
          </div>
        </div> */}
      </section>
    </div>
  )
}
export default Gallery;
