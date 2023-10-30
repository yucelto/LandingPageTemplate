import React from 'react';
import Image from 'next/image';

const AboutUs = () => {
  return (
    <section id='about' className='bg-gray-200 py-16'>
      <div className='flex flex-col lg:flex-row items-center justify-center'>
        <div className='relative h-64 w-64 mb-8 lg:mb-0 lg:mr-8'>
          <Image src='/img/about-us-test.jpg' alt='About Us' layout='fill' objectFit='cover' className='rounded-full' />
        </div>
        <div className='text-center lg:text-left max-w-lg'>
          <h2 className='text-3xl font-bold text-gray-800 mb-4'>About Us</h2>
          <p className='text-gray-600 mb-6 mx-8 md:mx-0 text-justify'>
            Mulkiyet is a digital 3D exhibition platform. We specialize in modeling our partners new projects in Turkey,
            especially in Istanbul, and presenting them to our clients. Our approach is focused on providing trustable, reliable,
            and realistic representations. The prices we present are real, allowing our clients to make well-informed decisions.
            At Mulkiyet, we build trust and offer opportunities for understanding and investing in Turkey.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
