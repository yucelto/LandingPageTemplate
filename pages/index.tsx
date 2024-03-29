import { NextPage } from 'next';
import AboutUs from '../components/about-us';
import HomePage from '../components/homepage';
import Navbar from '../components/navbar';
import OurServices from '../components/our-services';
import Works from '../components/our-works';
import Partners from '../components/partners';
import Testimonials from '../components/testimonials';
import ContactUs from '../components/contact-us';

const Home: NextPage = () => {
  return (
    <div className='md:mt-14'>
      <Navbar />
      <HomePage />
      <Partners />
      <AboutUs />
      <Works />
      <OurServices />
      <Testimonials />
      <ContactUs />
    </div>
  );
};

export default Home;
