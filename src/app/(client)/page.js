import Loader from "@/components/ui/LoadingAnimation";
import Ads from "@/components/layout/home1/pages/landing-page/Ads";
import Banner from "@/components/layout/home1/pages/landing-page/Banner";
import { Category } from "@/components/layout/home1/pages/landing-page/Category";
import FlashSaleCountdown from "@/components/layout/home1/pages/landing-page/FlashSale";
import { NewArrival } from "@/components/layout/home1/pages/landing-page/NewArrival";
import Offer from "@/components/layout/home1/pages/landing-page/Offer";



import Service from "@/components/layout/home1/pages/landing-page/Service";
import Testimonial from "@/components/layout/home1/pages/landing-page/Testimonial/Testimonial";
import Tranding from "@/components/layout/home1/pages/landing-page/Tranding";
import Footer from "@/components/layout/Footer/Footer";


export default function Home() {
  return (
    <section className="overflow-hidden">
      <Loader />
      <Banner />
      <Category />
      <Tranding />
      <Offer />
      <Service />
      <Ads />
      <NewArrival />
      <Testimonial />
      <Footer />
    </section>
  );
}
