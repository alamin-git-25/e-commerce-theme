import Loader from "@/components/hooks/LoadingAnimation";
import Banner from "@/components/landing-page/Banner";
import { Category } from "@/components/landing-page/Category";
import { NewArrival } from "@/components/landing-page/NewArrival";


import Offer from "@/components/landing-page/Offer";
import Service from "@/components/landing-page/Service";
import Tranding from "@/components/landing-page/Tranding";
import Footer from "@/components/layout/Footer/Footer";


export default function Home() {
  return (
    <section className="overflow-hidden">
      <Loader />
      <Banner />
      <Category />
      <Tranding />
      <Service />
      <NewArrival />
      <Footer />
    </section>
  );
}
