import HomePage from "./components/homepage";
import Partners from "./components/partners";
import AboutUs from "./components/about-us";
import Works from "./components/our-works";
import OurServices from "./components/our-services";
import Testimonials from "./components/testimonials";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HomePage />
      <Partners />
      <AboutUs />
      <Works />
      <OurServices />
      <Testimonials />
    </main>
  );
}
