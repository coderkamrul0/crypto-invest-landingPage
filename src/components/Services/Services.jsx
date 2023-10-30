import { useState } from "react";
import service1Img from "../../assets/images/service1.png";
import service2Img from "../../assets/images/service2.png";
import service3Img from "../../assets/images/service3.png";
import service4Img from "../../assets/images/service4.png";
import service5Img from "../../assets/images/service5.png";
import service6Img from "../../assets/images/service6.png";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const services = [
  {
    id: 1,
    icon: service1Img,
    title: "Strategy Consulting",
    desc: "A social assistant thats flexible can accommodate your schedule and needs, making life easier.",
  },
  {
    id: 2,
    icon: service2Img,
    title: "Financial Advisory",
    desc: "Modules transform smart trading by automating processes and improving decision-making.",
  },
  {
    id: 3,
    icon: service3Img,
    title: "Management",
    desc: "There, it's me, your friendly neighborhood reporter's news analyst processes and improving",
  },
  {
    id: 4,
    icon: service4Img,
    title: "Supply Optimization",
    desc: "Hey, have you checked out that new cryptocurrency platform? It's pretty cool and easy to use!",
  },
  {
    id: 5,
    icon: service5Img,
    title: "HR consulting",
    desc: "Hey guys, just a quick update on exchange orders. There have been some changes currency!",
  },
  {
    id: 6,
    icon: service6Img,
    title: "Marketing consulting",
    desc: "Hey! Just wanted to let you know that the price notification module processes is now live!",
  },
];

function Services() {
  const [hoveredService, setHoveredService] = useState(null);

  const handleMouseEnter = (serviceId) => {
    setHoveredService(serviceId);
  };

  const handleMouseLeave = () => {
    setHoveredService(null);
  };

  return (
    <div>
      <div className="max-w-screen-xl mx-auto px-5 my-20">
        <div className="text-center">
          <h4 className=" text-3xl md:text-5xl font-semibold">
            <span className=" text-[#0A4FD5]">Services</span> We Offer
          </h4>
          <p className="text-lg text-[#6B777F] py-8">
            We offer the best services around - from installations to <br />
            repairs, maintenance, and more!
          </p>
        </div>
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service) => (
              <div data-aos="fade-up"
                key={service.id}
                className="flex flex-col items-center gap-4 px-16 text-center py-14 rounded-xl hover:cursor-pointer transition-all duration-300"
                style={{
                  background:
                    "linear-gradient(38deg, rgba(243,246,249,1) 0%, rgba(244,247,250,1) 100%)",
                  border: `2px solid white`,
                  borderColor:
                    hoveredService === service.id ? "#00D094" : "white",
                }}
                onMouseEnter={() => handleMouseEnter(service.id)}
                onMouseLeave={handleMouseLeave}
              >
                <div className="bg-white rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-5 mb-5">
                  <img src={service.icon} alt="" />
                </div>
                <h4
                  className="text-2xl"
                  style={{
                    color:
                      hoveredService === service.id ? "#00D094" : "inherit",
                  }}
                >
                  {service.title}
                </h4>
                <p className="text-lg text-[#6B777F]">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
