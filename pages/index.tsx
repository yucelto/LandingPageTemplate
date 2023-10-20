import { NextPage } from 'next';
import AboutUs from '../components/about-us';
import HomePage from '../components/homepage';
import Navbar from '../components/navbar';
import OurServices from '../components/our-services';
import Works from '../components/our-works';
import Partners from '../components/partners';
import Testimonials from '../components/testimonials';

const Home: NextPage = () => {
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
};

export default Home;
