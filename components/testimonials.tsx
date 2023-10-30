import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const testimonialsData = [
  {
    id: 1,
    name: 'Rich',
    surname: 'Peyman',
    title: 'Iran Sultan',
    quote: 'Lorem ipsum dolor sit amet, kjhkjhconsectetur adipiscing elit. Integer nec odio. Praesent libero.',
    avatar: '/img/our-clients/client-1.jpg',
  },
  {
    id: 2,
    name: 'Princes',
    surname: 'Fatima',
    title: 'Real Estate Marketer',
    quote: 'Lkjhjkhkjhorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.',
    avatar: '/img/our-clients/client-4.jpg',
  },
  {
    id: 3,
    name: 'Bob',
    surname: 'Johnson',
    title: 'User',
    quote: 'Lo54rem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.',
    avatar: '/img/our-clients/client-3.jpg',
  },
];

const Testimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState<number>(0);

  const handleDotClick = (index: number) => {
    setActiveTestimonial(index);
  };

  return (
    <section id='testimonials' className='bg-gray-100 py-16 text-center relative'>
      <h2 className='text-3xl font-bold text-gray-800 mb-16'>Testimonials</h2>
      <div className='mx-auto w-3/4'>
        <motion.div
          key={activeTestimonial}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='relative z-10 bg-white py-16 rounded-lg shadow-lg'>
          <div className='absolute mb-6 rounded-full bg-blue-500 w-20 h-20 flex items-center justify-center overflow-hidden -top-10 left-1/2 transform -translate-x-1/2'>
            <Image
              layout='fill'
              src={testimonialsData[activeTestimonial].avatar}
              alt={`${testimonialsData[activeTestimonial].name} ${testimonialsData[activeTestimonial].surname}`}
              width={100}
              height={100}
              className='rounded-full'
            />
          </div>
          <p className='text-gray-800 font-semibold mt-4'>
            {testimonialsData[activeTestimonial].name} {testimonialsData[activeTestimonial].surname}
          </p>
          <span className='text-gray-400'>{testimonialsData[activeTestimonial].title}</span>
          <p className='text-gray-600 mt-4'>{testimonialsData[activeTestimonial].quote}</p>
        </motion.div>
      </div>
      <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2'>
        {testimonialsData.map((_, index) => (
          <div
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-4 h-4 rounded-full ${
              index === activeTestimonial ? 'bg-blue-500' : 'bg-gray-400'
            } cursor-pointer`}></div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
