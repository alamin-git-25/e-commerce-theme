import Banner from "@/components/landing-page/Banner";
import { Category } from "@/components/landing-page/Category";
import Offer from "@/components/landing-page/Offer";
import Tranding from "@/components/landing-page/Tranding";


export default function Home() {
  return (
    <section>
      <Banner />
      <Category />
      <Tranding />

    </section>
  );
}
