import ClientReview from "./components/ClientReview/ClientReview";
import ContactUs from "./components/ContactUs/ContactUs";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import OurCompany from "./components/OurCompany/OurCompany";
import PricePlaning from "./components/PricePlaning/PricePlaning";
import Services from "./components/Services/Services";

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <OurCompany />
      <Services />
      <PricePlaning />
      <ClientReview />
      <ContactUs />
      <Footer />
    </>
  );
}

export default App;
