import AppStore from "../AppStore";
import GooglePlay from "../GooglePlay";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-[#00150F] text-white pt-16 pb-5">
      <div className="max-w-screen-xl mx-auto px-5">
        <div className="md:flex gap-10">
          <div className="md:w-1/2 md:pr-20">
            <h5 className="text-3xl font-bold">
              Trade<span className="text-[#00D094]">X</span>
            </h5>
            <p className="text-[#87918E] text-lg py-2">
              Welcome to our trading site! We offer the best, most affordable
              products and services around. Shop now and start finding great
              deals!
            </p>
            <div className="flex gap-5">
              <AppStore />
              <GooglePlay />
            </div>
          </div>
          <div className="md:w-1/2 md:justify-items-end grid grid-cols-2 md:grid-cols-3 pt-5 md:pt-0 ">
            <div>
              <h5 className="font-bold text-lg pb-5">Quick links</h5>
              <ul>
                <li className="text-[#87918E] hover:text-[#00D094] transition-all cursor-pointer">
                  About US
                </li>
                <li className="text-[#87918E] hover:text-[#00D094] transition-all cursor-pointer">
                  Terms
                </li>
                <li className="text-[#87918E] hover:text-[#00D094] transition-all cursor-pointer">
                  Services
                </li>
                <li className="text-[#87918E] hover:text-[#00D094] transition-all cursor-pointer">
                  Features
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold text-lg pb-5">Support</h5>
              <ul>
                <li className="text-[#87918E] hover:text-[#00D094] transition-all cursor-pointer">
                  Conditions
                </li>
                <li className="text-[#87918E] hover:text-[#00D094] transition-all cursor-pointer">
                  Privacy Policy
                </li>
                <li className="text-[#87918E] hover:text-[#00D094] transition-all cursor-pointer">
                  FAQs
                </li>
                <li className="text-[#87918E] hover:text-[#00D094] transition-all cursor-pointer">
                  Support
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold text-lg pb-5">Company</h5>
              <ul>
                <li className="text-[#87918E] hover:text-[#00D094] transition-all cursor-pointer">
                  Careers
                </li>
                <li className="text-[#87918E] hover:text-[#00D094] transition-all cursor-pointer">
                  Updates
                </li>
                <li className="text-[#87918E] hover:text-[#00D094] transition-all cursor-pointer">
                  Job
                </li>
                <li className="text-[#87918E] hover:text-[#00D094] transition-all cursor-pointer">
                  Announce
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-10"/>
        <div className="md:flex justify-between items-center">
          <div>
            <p>
              © 2023 All Rights Reserved By Trade<span className="text-[#00D094]">X</span>
            </p>
          </div>
          <div>
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
        </div>
      </div>
    </div>
  );
}

export default Footer;
