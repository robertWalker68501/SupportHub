import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { FaTicket } from "react-icons/fa6";
import { FaBoxes } from "react-icons/fa";
import { MdLocalShipping } from "react-icons/md";
import { FaUser } from "react-icons/fa6";

const Home = () => {
  return (
  <>
      <section className="bg-gray-100 py-10 mt-20">
      <div className="wrapper">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-5xl font-light mb-1">SupportHub</h2>
            <p className="text-base md:text-lg leading-relaxed">
              is a comprehensive customer support platform designed specifically for supply chain operations. Our solution bridges the communication gap between suppliers, logistics partners, and end customers, providing real-time visibility and instant support at every step of the delivery journey.
            </p>
            <Button size='lg' className="bg-cyan-600 mt-6 md:mt-10 hover:bg-cyan-900">Learn More</Button>
          </div>
          <div className="w-full md:w-1/2 shadow-lg">
            <Image src="/assets/images/hero-01.jpeg" alt="Home Hero" className="object-contain rounded-md object-center w-full" width={500} height={500} />
          </div>
        </div>
      </div>
    </section>

    <section>
      <div className="wrapper">
        <h2 className="text-3xl font-light my-20">Why Use SupporHub</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FaTicket className="text-cyan-600" size={40} />
                <h3>Reduce support response times</h3>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Streamline your support workflow with automated ticket routing and real-time notifications, ensuring customer inquiries are addressed within minutes, not hours.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FaBoxes className="text-cyan-600" size={40} />
                <h3>Improve supply chain transparency</h3>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Gain real-time visibility into your supply chain operations, from order placement to delivery, empowering you to make informed decisions and optimize your logistics processes.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MdLocalShipping className="text-cyan-600" size={43} />
                <h3>Minimize shipping delays and issues</h3>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Track shipments in real-time, identify potential delays, and proactively address issues before they impact your customers.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FaUser className="text-cyan-600" size={26} />
                <h3>Enhance customer satisfaction</h3>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Provide customers with a seamless and efficient support experience, ensuring their needs are met promptly and effectively.
              </p>
            </CardContent>
          </Card>
        </div>
        
      </div>
    </section>
  </>

  );
}

export default Home;
