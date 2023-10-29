/* eslint-disable react/no-unescaped-entities */
import desktopImage from "../../assets/images/desktop.png";

function OurCompany() {
  return (
    <div>
      <div>
        <div className="max-w-screen-xl mx-auto px-5 md:flex items-center gap-10">
          <div className="md:w-1/2 relative mb-5 md:mb-0">
            <div className="absolute inset-0 -z-10 flex items-center justify-center">
              <div className="h-2/5 w-2/5 rounded-full bg-[#00D094] blur-3xl shadow-lg"></div>
            </div>
            <div className="absolute md:top-10 md:left-10 shadow-2xl px-5 py-2 rounded-lg">
              <h3 className=" text-3xl md:text-5xl font-semibold text-[#0A4FD5]">
                10 Years
              </h3>
              <p className="text-lg">Consulting Experience</p>
            </div>
            <img src={desktopImage} alt="" className="w-full rounded-lg z-20" />
            <div className="absolute bottom-4 md:bottom-24 bg-white right-0  shadow-2xl px-5 py-2 rounded-lg">
              <h3 className="text-3xl md:text-5xl font-semibold text-[#0A4FD5]">
                25K+
              </h3>
              <p className="text-lg">Satisfied Customers</p>
            </div>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-5xl font-bold">
              Meet <span className="text-[#0A4FD5]">Our Company</span> Unless
              Miss The Opportunity
            </h2>
            <p className="text-[#6B777F] text-base py-5">
              Hey there! So glad you stopped by to Meet Our Company. Don't miss
              out on this opportunity to learn about what we do and the amazing
              team that makes it all happen! Our company is all about creating
              innovative solutions and providing top-notch services to our
              clients. From start to finish, we're dedicated to delivering
              results that exceed expectations.
            </p>
            <div>
              <button className="bg-[#00D094] border border-[#00D094]  text-center text-xl px-4 md:px-7 pt-4 pb-2 rounded-lg">
                Explore More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurCompany;
