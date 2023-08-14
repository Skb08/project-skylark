import { julius } from "@/fonts";
import Image from "next/image";
import ExecutiveBody from '@/components/ExecutiveBody';
import Gallery from '@/components/Gallery';

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center">
        <Image src="/images/hero.png" width={400} height={250} />
        <div className={"font-thin text-2xl mt-8 " + julius.className}>
          Coming Soon...
        </div>
      </main>
      <div>
        <div className='bg-blue-900 min-h-screen'>
          <div className='pt-[4%] pl-[10%]'>
            <h2 className='text-2xl tracking-wide text-white font-julius'>GALLERY</h2>
          </div>
          <div className='font-black w-[30%] pl-[10%]'>
            < hr />
          </div>
          <div >
            <Gallery />
          </div>
        </div>
        <div className='bg-blue-800 min-h-screen '>
          <div className='pt-[5%] pl-[10%]'>
            <h2 className='text-2xl tracking-wide text-white'>EXECUTIVE BODY</h2>
            <h5 className='font-bold text-white'>MEMBERS</h5>
          </div>
          <div className='font-black w-[40%] pl-[10%]'>
            < hr />
          </div>
          <div className='flex justify-center p-2 text-white'>
            <ExecutiveBody />
          </div>
        </div>
      </div>
    </>
  );
}
