import { julius, poppins } from '@/fonts'
import Image from 'next/image'
import React from 'react'


const HomeComponent = () => {
  return (
    <div className={poppins.className}>
      <div className=" w-full px-[30px] h-[100%] bg-slate-900 relative  align-bottom" >

        <div className="heading relative flex justify-center">
          <div><Image src="/images/home/Group 7.png " alt="" width={1000} height={250} /></div>

        </div>
        <div className="box flex justify-center"  >
          <div className="w-[1065px] h-[338px] bg-slate-400 bg-opacity-10 absolute mt-[1rem] " >
            <div className="rows flex justify-evenly items-center my-[4rem] ">
              <Image src="/images/hero/airplane-1.png" alt="" width={270} height={180} />
              <Image src="/images/hero/airplane-2.png" alt="" width={270} height={180} />
              <Image src="/images/hero/airplane-3.png" alt="" width={270} height={180} />

            </div>

            <div />
            <div className="w-[407.65px] h-[396px] ml-[68rem] mt-[-21rem] bg-pink-600 absolute rounded-full blur-[172.93px] " />

          </div>


        </div>
        <div className="vectors absolute max-md:hidden  ">

          <Image width={1400} height={350} src="/images/home/Vector1.png" className="mt-[25rem]  " alt="" />
          <Image width={1400} height={350} src="/images/home/Vector 10.svg" className="mt-[-7rem]  " alt="" />
          <Image width={1400} height={350} src="/images/home/Vector 10.svg" className="mx-[50rem]  transform -scale-x-100  -scale-y-100 -rotate-12 mt-[-12rem]" alt="" />

          <Image width={1400} height={350} src="/images/home/Vector 10.svg" className="-rotate-[32deg] mt-[-07rem] mr-[-5rem] stroke-2 " alt="" />
          <div className="w-[600px] h-[600px] bg-violet-700 bg-opacity-100 rounded-full blur-[358px] relative mt-[-27rem] ml-[84rem]" ><div />

          </div>
        </div>

        <div className="w-[407.65px] h-[396px]  mt-[22rem] ml-[-12rem] bg-pink-600 absolute rounded-full blur-[172.93px] "></div>
        <div className=" flex flex-col mt-[25rem]  justify-center">
          <div className="about text-white text-[26.20px] md:mb-[5rem] mb-[2rem] font-Poppins px-[20px]">
            <h1 className={'  text-center md:text-[50px] text-[21px] ' + julius.className}>ABOUT US</h1></div>
          <div className="max-w-[1135px] w-full mx-auto px-[7px] text-white md:text-[26.20px]  font-Poppins  text-start ">Welcome to the Clubhouse of Aeromodeling Enthusiasts! We are a passionate group of engineers and aviation enthusiasts dedicated to the world of drones, RC planes, and rockets. Our club is a hub for the sharing of innovative ideas and the exchange of effective knowledge, favoring practical and theoretical advances in remodeling designs.<br /><br />We thrive on pushing the boundaries of aeromodeling through cutting-edge technology and out-of-the-box thinking. Our members actively contribute to the development and exploration of Engineering. drones, RC planes, and rockets. We foster an environment that encourages creativity, collaboration, and the exchange of ideas, allowing us to stay at the forefront of the field.<br /><br />We specialize in the design and Engineering of versatile drones and planes tailored for specific purposes, including payload transportation. Our expertise ensures efficient and reliable aerial systems that meet the diverse needs of industries, research, and other applications.<br />Through workshops, discussions and practical projects, we strive to improve our practical skills as well as deepen our theoretical knowledge. Our club serves as a platform to present and refine innovative designs, allowing members to learn from each other and contribute to the growth of overall <br /> UDAAN - A dynamic community where passion meets innovation.
            <br /><p className='mb-[20px] text-[16.67px] '> <br /> <br />President: PratyushNayak <br />
              Vice President: Bikram Jena <br /></p></div>
          <div className="w-[600px] h-[600px] bg-violet-700 bg-opacity-120 absolute mt-[62rem] ml-[-24rem] rounded-full blur-[408px]" />
          <div className=" max-w-[1135px] mx-auto flex md:flex-row flex-col justify-around text-white">
            <div className=' flex md:flex-col  gap-x-[2rem] md:mt-[160px] mt-[100px] '><Image src="/images/home/facad_udaan 1.png" className='md:w-[15rem] w-[6rem] aspect-square  ' alt="" width={200} height={200} />
              <p> Dr. Balaji P S <br />

                Assistant Professor <br />
                Dept. Of Mechanical Engg. </p></div>

            <div><p className=' max-w-[1135px]  text-white mt-[2rem] md:mt-[8rem] mx-auto md:text-[26.20px] md:pl-[8rem]  text-start '>As a faculty advisor, I have been privileged to oversee the growth of Udaan Club since 2008,   which are dynamic, innovative, and versatile. Our club has attracted members who share a deep passion for aviation. Under my guidance, they have recently introduced Drone subsystems, adding a new dimension to our activities. As we continue to evolve,
              I invite all individuals to contribute in any way possible. towards the success and development of Udaan Club. Whether through sharing expertise, organizing workshops, securing sponsorships, or simply fostering a supportive environment, every contribution is valuable. By working together, we can nurture the next generation of aviation enthusiasts, fuel their curiosity, and ignite their passion for exploration and innovation. Udaan Club is not only about aviation; they also cultivate teamwork, leadership, and critical thinking skills, preparing our members for a bright future in any field they choose to pursue.
            </p></div>
          </div>




        </div>

        <div className="studentActivityCenter">
          <Image width={1400} height={350} src="/images/home/Vector 9.png" className="ml-[65%] relative mb-[-15rem] md:hidden" alt="" />
          <h1 className={' text-white md:text-[50px] uppercase  font-thin mt-[7rem] text-[21px] mx-auto md:mb-[2rem] mb-[1rem] text-center ' + julius.className}>Student Activity Centre</h1>
          <p className=' max-w-[1135px] text-white mx-auto  md:text-[25.20px] text-start '>The Student Activity Center(SAC) at NIT Rourkela plays a vital role in the promotion and development of various clubs, including the UDAAN Club. It serves as a platform that encourages students' extra-curricular talents and fosters their all-round personality development. The center provides ample opportunities for students to engage in a wide range of activities and events that align with their interests and goals. Through active participation in the UDAAN Club, students can hone their skills, enhance their leadership abilities, and collaborate with like-minded individuals. With the support and resources offered by the Student Activity Center, the Club can thrive and help students reach their goals, while fostering a vibrant and dynamic campus environment. For more details, reach out to website.nitrkl.ac.in/SAC/</p>
        </div>
        <div className='container flex justify-center md:mb-[4rem] mt-[4rem] mb-[2rem] '><h1 className={'uppercase max-w-[1135px] md:text-[45px] text-white text-[21px]  ' + julius.className}>contact us</h1></div>
        <div className="contactUs">

          <div className="row1 flex justify-center flex-wrap gap-x-[4rem] gap-y-[1rem]  md:justify-evenly  ">
            <div className="socialMedia1 flex  gap-2 md:gap-4"><Image width={40} height={40} src="/images/home/insta.svg" className='w-10 h-10' alt="" ></Image>
              <p className='uppercase  w-[164px] h-[29px] mr-[6.667%]  text-white text-[25px] font-normal'>udaan_nitr</p>
            </div>
            <div className="socialMedia2 flex  gap-2 md:gap-4"><Image width={40} height={40} src="/images/home/twitter 1.svg" className='w-10 h-10' alt="" ></Image>
              <p className='uppercase  w-[164px] h-[29px] mr-[6.667%] text-white text-[25px] font-normal '>udaan_nitr</p>
            </div>
            <div className="socialMedia3 flex gap-2 md:gap-4"><Image width={40} height={40} src="/images/home/linkedin 2.svg" className='w-10 h-10' alt="" ></Image>
              <p className='uppercase  w-[164px] h-[29px] mr-[6.667%] text-white text-[25px] font-normal'>udaan_nitr</p>
            </div>


          </div>
          <div className="gmail flex justify-center items-center md:mt-[5rem] mt-[4rem] gap-x-[1rem] ">
            <div> <Image src="/images/home/gmail 1.svg" className="w-10 h-10" alt="" width={40} height={40} /></div>
            <div className='text-white    md:text-[25px] font-normal'><p>nitrudaan07@gmail.com</p>
            </div>

          </div>
          <div className="w-[407.65px] h-[396px]  mt-[-10rem] ml-[-12rem] bg-pink-600 absolute rounded-full blur-[172.93px] "></div>
          <Image width={1400} height={350} src="/images/home/Vector 10.svg" className='rotate-[17deg] relative max-md:hidden ' alt="" />
          <Image width={1400} height={350} src="/images/home/Vector 10.svg" className='relative mt-[-13rem] rotate-[155deg] max-md:hidden  ml-[45rem]' alt="" />
          <Image width={1400} height={350} src="/images/home/Vector 10.svg" className='-rotate-[17deg] mt-[-45rem] ml-[42rem] max-md:hidden  relative ' alt="" />


          <div className=" flex flex-wrap text-white justify-center md:mt-0 mt-[3rem] gap-x-[2rem] gap-y-[2rem] mx-auto w-full max-w-[1135px ] pb-8">
            {/* <div className='flex mx-auto'> <div><p className='md:text-[26.50px]'>President:</p>
        <div className="logo w-[23px] mx-auto h-[23px] mt-[0.5rem] flex items-center "><Image width={16} height={16} src="/images/home/phone.svg" alt="" />
        <div><p className='md:text-[26.50px]'>6371873931</p></div></div></div>
       </div>
        <div className='flex mx-auto md:justify-start '><div><p className=' md:text-[26.50px] '>Vice-president:</p></div>
        <div className="logo w-[23px] mx-auto  h-[23px] mt-[0.5rem] flex items-center"><Image width={16} height={16} src="/images/home/phone.svg" alt="" />
        <div><p className='md:text-[26.50px]'>8018436185</p></div></div> </div>

        <div><p className='text-white md:text-[26.50px]'>PR Head:</p></div>
        <div className="logo w-[23px] ml-[2rem] h-[23px] mt-[0.5rem] "><Image width={16} height={16} src="/images/home/phone.svg" alt="" /></div>
        
        <div><p className='text-white md:text-[26.50px] text-center'>70775 03389</p></div>
         */}

            <div className='flex gap-[20px] min-w-1/2 sm:w-1/3 justify-center'>
              <span>President</span>
              <div className='flex gap-1 items-center'>
                <Image width={16} height={16} src="/images/home/phone.svg" className='w-[16px] mx-auto  h-[16px]' alt="" />
                <span>8018436185</span>
              </div>
            </div>
            <div className='flex gap-[20px] min-w-1/2 sm:w-1/3 justify-center'>
              <span>President</span>
              <div className='flex gap-1 items-center'>
                <Image width={16} height={16} src="/images/home/phone.svg" className='w-[16px] mx-auto  h-[16px]' alt="" />
                <span>8018436185</span>
              </div>
            </div>
            <div className='flex gap-[20px] min-w-1/2 sm:w-1/3 justify-center'>
              <span>President</span>
              <div className='flex gap-1 items-center'>
                <Image width={16} height={16} src="/images/home/phone.svg" className='w-[16px] mx-auto  h-[16px]' alt="" />
                <span>8018436185</span>
              </div>
            </div>
          </div>



        </div>
      </div>
    </div>


  )
}

export default HomeComponent
