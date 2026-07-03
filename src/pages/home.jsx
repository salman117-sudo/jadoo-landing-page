import { Navbar,Footer } from "@layout";
import {
  HeroSection, BestServices, Destination,Booking, Country, Information} from "@sections";

function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <BestServices />
      <Destination />
      <Booking />
      <Country />
      <Information />
      <Footer />
    </div>
  );
}

export default Home;

