import { julius } from "@/fonts";
import Image from "next/image";
import ExecutiveBody from '@/components/ExecutiveBody';
import Gallery from '@/components/Gallery';

import HomeComponent from "@/components/Home";

export default function Home() {
  return (

    <div className="overflow-hidden max-w-[100vw]">
      <HomeComponent/>

    </div>
    // <main className="flex min-h-screen flex-col items-center justify-center">
    //   <Image src="/images/hero.png" width={400} height={250} />
    //   <div className={"font-thin text-2xl mt-8 " + julius.className}>
    //     Coming Soon...
    //   </div>
    // </main>
  );
}
