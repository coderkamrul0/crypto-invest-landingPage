import BannerImage from "../../assets/images/magnifying_glass.png";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaArrowRight,
  FaRegPlayCircle,
} from "react-icons/fa";
import './HeroSection.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

function HeroSection() {
  return (
    <div className="pt-32 md:pt-0">
      <div className="max-w-screen-xl mx-auto px-5 md:flex items-center min-h-screen">
        <div data-aos="fade-right" className="md:w-1/2">
          <h1 className=" text-3xl md:text-5xl lg:text-6xl font-bold">
            Invest Your Money With{" "}
            <span className="text-[#0A4FD5]">Higher Return</span>
          </h1>
          <p className="text-[#747F86] text-xl my-10">
            Anyone can invest money to different currency to increase their
            earnings by the help of Bitrader through online.
          </p>
          <div className="flex gap-3">
            <button className="bg-[#00D094] border border-[#00D094]  text-center text-xl px-4 md:px-7 pt-4 pb-2 rounded-lg flex gap-3">
              Get Started <FaArrowRight />
            </button>
            <button className="bg-transparent border border-[#0A4FD5] text-center text-xl px-4 md:px-7 pt-4 pb-2 rounded-lg flex gap-3 text-[#0A4FD5] hover:bg-[#0A4FD5] hover:text-white transition-all">
              Watch Video <FaRegPlayCircle />
            </button>
          </div>
          <h5 className="font-bold text-lg my-10">Follow Us</h5>
          <div className="flex items-center gap-4">
            <div className="bg-[#00D094] cursor-pointer h-10 w-10 rounded-full flex items-center justify-center">
              <FaFacebookF />
            </div>
            <div className="border transition-all cursor-pointer hover:bg-[#00D094] h-10 w-10 rounded-full flex items-center justify-center">
              <FaLinkedinIn />
            </div>
            <div className="border transition-all cursor-pointer hover:bg-[#00D094] h-10 w-10 rounded-full flex items-center justify-center">
              <FaInstagram />
            </div>
            <div className="border transition-all cursor-pointer hover:bg-[#00D094] h-10 w-10 rounded-full flex items-center justify-center">
              <FaYoutube />
            </div>
            <div className="border transition-all cursor-pointer hover:bg-[#00D094] h-10 w-10 rounded-full flex items-center justify-center">
              <FaTwitter />
            </div>
          </div>
        </div>
        <div className="md:w-1/2 hero-image-container flex justify-center items-center">
          <img src={BannerImage} alt="search image" className="hero-image" />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
