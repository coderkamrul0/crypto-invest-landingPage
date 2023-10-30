import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaPhoneAlt,
  FaEnvelope,
  FaLocationArrow,
} from "react-icons/fa";

function ContactUs() {
  return (
    <div>
      <div className="max-w-screen-xl mx-auto px-5 py-10 md:flex gap-20">
        <div className="md:w-1/3 flex flex-col gap-5 md:gap-14">
          <h5 className="text-3xl font-semibold">
            Lets{" "}
            <span className="text-[#0A4FD5]">
              Get In Touch <br />
            </span>
            With Us
          </h5>
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

          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <div className="bg-[#dfe6f7] cursor-pointer h-14 w-14 rounded-full flex items-center justify-center">
                <FaPhoneAlt className="h-10" />
              </div>
              <div>
                <p className="text-lg text-[#747F86]">0123456789</p>
                <p className="text-lg text-[#747F86]">0123456789</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-[#dfe6f7] cursor-pointer h-14 w-14 rounded-full flex items-center justify-center">
                <FaEnvelope className="h-10" />
              </div>
              <div>
                <p className="text-lg text-[#747F86]">info@gmail.com</p>
                <p className="text-lg text-[#747F86]">hello@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-[#dfe6f7] cursor-pointer h-14 w-14 rounded-full flex items-center justify-center">
                <FaLocationArrow className="h-10" />
              </div>
              <div>
                <p className="text-lg text-[#747F86]">1205 Dhaka</p>
                <p className="text-lg text-[#747F86]">Bangladesh</p>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-2/3">
          <form className="pb-8 mb-4 pt-5 md:pt-0">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-lg font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Your name"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-lg font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Your email"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-lg font-bold mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full pt-4 pb-10 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                placeholder="Your message"
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-[#00D094] font-bold w-full pt-3 pb-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Contact Us Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
