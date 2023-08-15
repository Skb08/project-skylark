import { julius } from "@/fonts";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <Image src="/images/hero.png" width={400} height={250} alt="" />
      <div className={"font-thin text-2xl mt-8 " + julius.className}>
        Coming Soon...
      </div>
    </main>
  );
}
