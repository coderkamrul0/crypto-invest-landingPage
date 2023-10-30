import { useState } from "react";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="shadow-lg fixed top-0 left-0 right-0 bg-white z-50">
      <div className="max-w-screen-xl mx-auto px-5 flex justify-between py-2 items-center relative">
        <h3 className="text-4xl font-bold">
          Trade<span className="text-[#00D094]">X</span>
        </h3>

        {/* Mobile Menu Icon */}
        <div className="md:hidden" onClick={toggleMobileMenu}>
          <svg
            className="w-6 h-6 cursor-pointer"
            fill="#00D094"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMobileMenuOpen ? (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 5H16V7H4V5ZM4 10H16V12H4V10ZM4 15H16V17H4V15Z"
                fill="#00D094"
              />
            ) : (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3 7H17V5H3V7ZM17 10H3V12H17V10ZM3 17V15H17V17H3Z"
                fill="#00D094"
              />
            )}
          </svg>
        </div>

        {/* Desktop Menu */}
        <ul
          className={`md:flex md:gap-5 md:text-lg md:font-semibold ${
            isMobileMenuOpen
              ? " absolute top-12 right-5 bg-[#00D094] w-full flex flex-col gap-2 pl-10 py-5 transition-all"
              : "hidden"
          }`}
        >
          <li
          
            className={`${
              isMobileMenuOpen ? "hover:text-white" : "hover:text-[#00d097]"
            } transition-all cursor-pointer`}
          >
            Home
          </li>
          <li
            className={`${
              isMobileMenuOpen ? "hover:text-white" : "hover:text-[#00d097]"
            } transition-all cursor-pointer`}
          >
            About
          </li>
          <li
            className={`${
              isMobileMenuOpen ? "hover:text-white" : "hover:text-[#00d097]"
            } transition-all cursor-pointer`}
          >
            Services
          </li>
          <li
            className={`${
              isMobileMenuOpen ? "hover:text-white" : "hover:text-[#00d097]"
            } transition-all cursor-pointer`}
          >
            Pricing
          </li>
          <li
            className={`${
              isMobileMenuOpen ? "hover:text-white" : "hover:text-[#00d097]"
            } transition-all cursor-pointer`}
          >
            Contact
          </li>
        </ul>

        <button className="bg-[#00D094] px-5 text-xl pt-2 pb-1 rounded-md hidden md:block">
          Join Now
        </button>
      </div>
    </div>
  );
}

export default Header;
