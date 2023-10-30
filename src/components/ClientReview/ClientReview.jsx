import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import client1 from "../../assets/images/client1.png";
import client2 from "../../assets/images/client2.png";
import client3 from "../../assets/images/client3.png";
import "./ClientReview.css";

function ClientReview() {
  const reviews = [
    {
      id: 1,
      name: "John Doe",
      title: "Great Platform for Beginners",
      description:
        "The platform is user-friendly and perfect for those new to crypto. I found the interface very intuitive.",
      image: client1,
    },
    {
      id: 2,
      name: "Alice Smith",
      title: "Excellent Customer Support",
      description:
        "I had a few issues initially, but the customer support was incredibly responsive and solved my problems quickly.",
      image: client2,
    },
    {
      id: 3,
      name: "Bob Johnson",
      title: "Secure and Trustworthy",
      description:
        "Security is my top concern, and this platform takes it seriously. I feel confident and safe investing here.",
      image: client3,
    },
    {
      id: 4,
      name: "Emma Wilson",
      title: "Impressive Investment Options",
      description:
        "The variety of investment options is impressive. I found several options that aligned with my goals.",
      image: client1,
    },
    {
      id: 5,
      name: "Mike Brown",
      title: "Smooth Transactions",
      description:
        "I've never faced any issues with transactions. They are quick and smooth, making the experience hassle-free.",
      image: client2,
    },
    {
      id: 6,
      name: "Sophia Garcia",
      title: "Educational Resources Are Helpful",
      description:
        "The educational resources provided helped me understand the market better. Great for learning!",
      image: client3,
    },
  ];

  return (
    <div className="bg-[#F1F6FD]">
      <div className="max-w-screen-xl mx-auto px-5 pb-10">
        <div className="pb-10">
          <h4 className="text-3xl md:text-5xl font-semibold">
            Connect With <span className="text-[#0A4FD5]">Our Clients</span>
          </h4>
          <p className="text-lg text-[#6B777F]">
            We love connecting with our clients to hear about their experiences
            and how we can improve.
          </p>
        </div>
        <Swiper
          slidesPerView={1}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          navigation={false}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={30}
          className="mySwiper"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id}>
              <div className="p-10 shadow-xl bg-white rounded-2xl">
                <p className="pb-5 text-lg text-[#6B777F]">
                  {review.description}
                </p>
                <hr />
                <div className="flex items-center gap-5 pt-5">
                  <img src={review.image} alt={review.name} />
                  <div>
                    <h4 className="font-semibold">{review.name}</h4>
                    <p className="text-[#6B777F]">{review.title}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default ClientReview;
