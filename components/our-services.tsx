'use client';

import React from 'react';
import Image from 'next/image';

const servicesData = [
  {
    title: 'Real Estate Consultation',
    subtitle: 'Expert advice for property investments and transactions',
    icon: '/icon/services/aws.svg',
  },
  {
    title: 'Property Valuation',
    subtitle: 'Accurate property valuation services for fair pricing',
    icon: '/icon/services/concierge-bell-solid.svg',
  },
  {
    title: 'Legal Assistance',
    subtitle: 'Legal support and guidance for property-related issues',
    icon: '/icon/services/concierge-bell-solid (1).svg',
  },
  {
    title: 'Virtual Property Tours',
    subtitle: 'Explore properties online with our virtual tour services',
    icon: '/icon/services/servicestack.svg',
  },
  {
    title: 'Investment Advice',
    subtitle: 'Strategic investment guidance for property portfolios',
    icon: '/icon/services/taxi-solid.svg',
  },
  {
    title: 'Home Interior Design',
    subtitle: 'Personalized interior design services for your dream home',
    icon: '/icon/services/wind-solid.svg',
  },
];

const boxColors = [
  'bg-indigo-400/40',
  'bg-pink-400/40',
  'bg-green-400/40',
  'bg-orange-400/40',
  'bg-yellow-400/40',
  'bg-purple-400/40',
];

const OurServices = () => {
  return (
    <section id='services' className='bg-gray-200 py-16 text-center'>
      <div className='mx-auto w-3/4'>
        <h2 className='text-3xl font-bold text-gray-800 mb-4'>Services</h2>
        <p className='text-gray-600 mb-8'>Explore our top-notch services</p>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12'>
          {servicesData.map((service, index) => (
            <div
              key={index}
              className={`rounded-lg shadow-lg flex flex-col justify-center h-40 md:h-60 relative ${
                boxColors[index % boxColors.length]
              }`}>
              <div className='flex items-center absolute p-4 rounded-full bg-red-200 w-16 h-16 -ml-[2rem]'>
                <Image src={service.icon} alt={service.title} width={40} height={40} />
              </div>
              <div className='flex-1 w-full flex justify-center items-center p-4 m-4'>
                <div className='text-left'>
                  <h3 className='text-xl font-semibold mb-2'>{service.title}</h3>
                  <p className='text-gray-600'>{service.subtitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
