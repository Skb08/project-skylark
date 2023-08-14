import React from 'react'
import Image from "next/image";

const ExecutiveBody = () => {
    return (
        <div className='w-full container flex justify-evenly '>
            <div className="p-0 grid grid-cols-2 items-center lg:gap-x-[15%] lg:w-[75%]">

                <div className="ml-[63%] mr-[-63%] flex flex-col  md:flex-row  p-2 ">
                    <div className="relative w-full overflow-hidden">
                        <Image className="object-fit  w-full rounded-t-lg h-full p-4 " src={"/images/Img1.svg"} alt="" width="100" height="100"/>
                    </div>
                    <div className='md:p-4 text-center md:text-left  md:w-[80%]'>
                        <h5 className="mb-2 text-[0.6rem] sm:text-sm xl:text-base font-normal">Pratyush Nayak</h5>
                        <h5 className="mb-2 text-[0.6rem] sm:text-sm xl:text-base font-normal">President</h5>
                        <h5 className="mb-2 text-[0.6rem] sm:text-sm xl:text-base font-normal">3rd year, Metallurgical & Materials Engg.</h5>
                    </div>
                </div>
                <br />

                <div className="flex flex-col   md:flex-row  p-2  ">
                    <div className="relative w-full overflow-hidden">
                        <Image className="object-fit max-h-[10rem] w-full rounded-t-lg h-full p-4" src={"/images/Img2.svg"} alt="" width="100" height="100"/>
                    </div>
                    <div className='p-1  text-center md:text-left md:w-[80%]'>
                        <h5 className="mb-2 text-[0.6rem] sm:text-sm xl:text-base font-normal">Bikram Jena</h5>
                        <h5 className="mb-2 text-[0.6rem] sm:text-sm xl:text-base font-normal">Vice President</h5>
                        <h5 className="mb-2 text-[0.6rem] sm:text-sm xl:text-base font-normal">3rd year, Industrial Design</h5>
                    </div>
                </div>
                <div className="flex flex-col   md:flex-row  p-2 ">
                    <div className="relative w-full overflow-hidden">
                        <Image className="object-fit max-h-[10rem] w-full rounded-t-lg h-full p-4" src={"/images/Img3.svg"} alt="" width="100" height="100"/>
                    </div>
                    <div className='p-1 md:p-4 text-center md:text-left md:w-[80%]'>
                        <h5 className="mb-1 sm:mb-2 text-[0.6rem] sm:text-sm xl:text-base font-normal">Dibyarchana Nayak</h5>
                        <h5 className="mb-1 sm:mb-2 text-[0.6rem] sm:text-sm xl:text-base font-normal">PR &Sponsership Head</h5>
                        <h5 className="mb-1 sm:mb-2 text-[0.6rem] sm:text-sm xl:text-base font-normal">3rd year, Ceramic Engg.</h5>
                    </div>
                </div>

                <div className="flex flex-col   md:flex-row  p-2 ">
                    <div className="relative w-full overflow-hidden">
                        <Image className="object-fit max-h-[10rem] w-full rounded-t-lg h-full p-4" src={"/images/Img4.svg"} alt="" width="100" height="100"/>
                    </div>
                    <div className='p-1 md:p-4 text-center md:text-left md:w-[80%]'>
                        <h5 className="mb-2 text-[0.6rem] sm:text-sm xl:text-base font-normal">Kartik Gurjar</h5>
                        <h5 className="mb-2 text-[0.6rem] sm:text-sm xl:text-base font-normal">Rocket lead</h5>
                        <h5 className="mb-2 text-[0.6rem] sm:text-sm xl:text-base font-normal">3rd year, Industrial Design</h5>
                    </div>
                </div>
                <div className="flex flex-col   md:flex-row  p-2 ">
                    <div className="relative w-full overflow-hidden">
                        <Image className="object-fit max-h-[10rem]  w-full rounded-t-lg h-full p-4 " src={"/images/Img5.svg"} alt="" width="100" height="100"/>
                    </div>
                    <div className='p-1 md:p-4 text-center md:text-left md:w-[80%]'>
                        <h5 className="mb-1 sm:mb-2 text-[0.6rem] sm:text-sm xl:text-base font-normal">Sumedh Sheshrao Gajghate</h5>
                        <h5 className="mb-1 sm:mb-2 text-[0.6rem] sm:text-sm xl:text-base font-normal">RC Plane Lead</h5>
                        <h5 className="mb-1 sm:mb-2 text-[0.6rem] sm:text-sm xl:text-base font-normal">3rd year, Industrial Design</h5>
                    </div>
                </div>
                <div className="flex flex-col   md:flex-row  p-2 ">
                    <div className="relative w-full overflow-hidden">
                        <Image className="object-fit max-h-[10rem]  w-full rounded-t-lg h-full p-4" src={"/images/Img6.svg"} alt="" width="100" height="100"/>
                    </div>
                    <div className='p-1 md:p-4  text-center md:text-left md:w-[80%]'>
                        <h5 className="mb-2 text-[0.6rem] sm:text-sm xl:text-base font-normal">Swapnil Gaikwad</h5>
                        <h5 className="mb-2 text-[0.6rem] sm:text-sm xl:text-base font-normal">Drone Lead</h5>
                        <h5 className="mb-2 text-[0.6rem] sm:text-sm xl:text-base font-normal">2rd year, Integrated MSc Mathematics</h5>
                    </div>
                </div>
                <div className="flex flex-col   md:flex-row p-4 lg:p-1 ">
                    <div className="relative w-full overflow-hidden">
                        <Image className="object-fit max-h-[10rem] w-full rounded-t-lg h-full p-4 " src={"/images/Img7.svg"} alt="" width="100" height="100"/>
                    </div>
                    <div className='p-1 md:p-4 text-center md:text-left md:w-[80%]'>
                        <h5 className="mb-1 sm:mb-2 text-[0.6rem] sm:text-sm xl:text-base font-normal">Uday Kumar Nayak</h5>
                        <h5 className="mb-1 sm:mb-2 text-[0.6rem] sm:text-sm xl:text-base font-normal">Management HEad</h5>
                        <h5 className="mb-1 sm:mb-2 text-[0.6rem] sm:text-sm xl:text-base font-normal">3rd year, Electrical & communication Engg.</h5>
                    </div>
                </div>

            </div>
        </div >
    )
}
export default ExecutiveBody;
