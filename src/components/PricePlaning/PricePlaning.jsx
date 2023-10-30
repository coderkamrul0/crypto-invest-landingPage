import { FaCheckSquare } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

function PricePlaning() {
  return (
    <div className="bg-[#F1F6FD] py-10">
      <div className="max-w-screen-xl mx-auto px-5 mb-20 ">
        <div className="text-center">
          <h4 className=" text-3xl md:text-5xl font-semibold">
            Our
            <span className=" text-[#0A4FD5]"> pricings </span>Plan
          </h4>
          <p className="text-lg text-[#6B777F] py-8">
            We offer the best pricings around - from installations to <br />{" "}
            repairs, maintenance, and more!
          </p>
        </div>

        <div className="md:flex justify-between items-center">
          <div data-aos="fade-right" className="bg-white px-10 py-5 rounded-2xl border-2 border-white hover:border-[#00D094] transition-all cursor-pointer mb-5 md:mb-0">
            <div className="pb-7">
              <h5 className="font-bold uppercase text-xl">Basic</h5>
              <h4 className="text-3xl font-bold py-3">
                <span className="text-[#00D094]">$99/</span>Monthly
              </h4>
            </div>
            <hr />
            <ul className="flex flex-col gap-4 pt-5">
              <li className="flex  gap-3 text-[#6B777F] text-lg">
                <FaCheckSquare className="h-6 w-6 text-[#00D094]" /> Weekly
                online meeting
              </li>
              <li className="flex  gap-3 text-[#6B777F] text-lg">
                <FaCheckSquare className="h-6 w-6 text-[#00D094]" /> Unlimited
                learning access
              </li>
              <li className="flex  gap-3 text-[#6B777F] text-lg">
                <FaCheckSquare className="h-6 w-6 text-[#00D094]" /> 24/7
                technical support
              </li>
              <li className="flex  gap-3 text-[#6B777F] text-lg">
                <FaCheckSquare className="h-6 w-6 text-[#00D094]" /> personal
                training
              </li>
            </ul>
            <button className="w-full border-2 border-[#00D094] py-2 rounded-2xl text-lg pb-0 hover:bg-[#00D094] hover:text-white transition-all mt-5">Chose Plan</button>
          </div>
          <div data-aos="fade-up" className="bg-white px-10 py-5 rounded-2xl border-2 border-[#00D094] mb-5 md:mb-0">
            <div className="pb-7">
              <h5 className="font-bold uppercase text-xl">Standard</h5>
              <h4 className="text-3xl font-bold py-3">
                <span className="text-[#00D094]">$149/</span>Monthly
              </h4>
            </div>
            <hr />
            <ul className="flex flex-col gap-4 pt-5">
              <li className="flex  gap-3 text-[#6B777F] text-lg">
                <FaCheckSquare className="h-6 w-6 text-[#00D094]" /> Weekly
                online meeting
              </li>
              <li className="flex  gap-3 text-[#6B777F] text-lg">
                <FaCheckSquare className="h-6 w-6 text-[#00D094]" /> Unlimited
                learning access
              </li>
              <li className="flex  gap-3 text-[#6B777F] text-lg">
                <FaCheckSquare className="h-6 w-6 text-[#00D094]" /> 24/7
                technical support
              </li>
              <li className="flex  gap-3 text-[#6B777F] text-lg">
                <FaCheckSquare className="h-6 w-6 text-[#00D094]" /> personal
                training
              </li>
              <li className="flex  gap-3 text-[#6B777F] text-lg">
                <FaCheckSquare className="h-6 w-6 text-[#00D094]" /> Business analysis
              </li>
            </ul>
            <button className="w-full border-2 border-[#00D094] py-2 rounded-2xl text-lg pb-0 bg-[#00D094] hover:text-white transition-all mt-5">Chose Plan</button>
          </div>
          <div data-aos="fade-left" className="bg-white px-10 py-5 rounded-2xl border-2 border-white hover:border-[#00D094] transition-all cursor-pointer mb-5 md:mb-0">
            <div className="pb-7">
              <h5 className="font-bold uppercase text-xl">premium</h5>
              <h4 className="text-3xl font-bold py-3">
                <span className="text-[#00D094]">$199/</span>Monthly
              </h4>
            </div>
            <hr />
            <ul className="flex flex-col gap-4 pt-5">
              <li className="flex  gap-3 text-[#6B777F] text-lg">
                <FaCheckSquare className="h-6 w-6 text-[#00D094]" /> With all standard features
              </li>
              <li className="flex  gap-3 text-[#6B777F] text-lg">
                <FaCheckSquare className="h-6 w-6 text-[#00D094]" /> Unlimited
                learning access
              </li>
              <li className="flex  gap-3 text-[#6B777F] text-lg">
                <FaCheckSquare className="h-6 w-6 text-[#00D094]" /> 24/7
                technical support
              </li>
              <li className="flex  gap-3 text-[#6B777F] text-lg">
                <FaCheckSquare className="h-6 w-6 text-[#00D094]" /> personal
                training
              </li>
            </ul>
            <button className="w-full border-2 border-[#00D094] py-2 rounded-2xl text-lg pb-0 hover:bg-[#00D094] hover:text-white transition-all mt-5">Chose Plan</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PricePlaning;
