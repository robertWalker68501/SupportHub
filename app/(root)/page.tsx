import { Button } from "@/components/ui/button";
import Image from "next/image";

const Home = () => {
  return (
    <div className="bg-gray-100 py-10 mt-20">
      <div className="wrapper">
        <div className="flex">
        <div className="w-1/2 my-auto">
        <h2 className="text-5xl font-light mb-1">SupportHub</h2>
          <p className="mr-20 text-lg">
            is a comprehensive customer support platform designed specifically for supply chain operations. Our solution bridges the communication gap between suppliers, logistics partners, and end customers, providing real-time visibility and instant support at every step of the delivery journey.
          </p>
          <Button size='lg' className="bg-cyan-600 mt-10 hover:bg-cyan-900">Learn More</Button>
        </div>
        <div className="shadow-lg w-1/2">
          <Image src="/assets/images/hero-01.jpeg" alt="Home Hero" className="object-contain rounded-md object-center w-full" width={500} height={500} />
        </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
