'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const worksData = [
  {
    title: 'Modern Apartment',
    imageUrl: '/img/our-works/delta-dubai.jpg',
    url: 'https://my.matterport.com/show/?m=2ipFsQz3Sdh&play=0&qs=1&hl=1&play=1',
  },
  {
    title: 'Cozy Home',
    imageUrl: '/img/our-works/delta-dubai-2.jpg',
    url: 'https://my.matterport.com/show/?m=kKDdAUChWMB&play=1',
  },
  {
    title: 'Luxury Villa',
    imageUrl: '/img/our-works/deniz-ist-3bed.jpg',
    url: 'https://my.matterport.com/show/?m=carVHHGF8uR&play=1',
  },
  {
    title: 'Spacious Loft',
    imageUrl: '/img/our-works/deniz-istanbul-mercan.jpg',
    url: 'https://my.matterport.com/show/?m=NDXTvMjdbG3&cloudEdit=1&sr=-.03,.4&ss=108&play=1',
  },
  {
    title: 'Charming Cottage',
    imageUrl: '/img/our-works/emaar.jpg',
    url: 'https://my.matterport.com/show/?m=qeghtsjd7JX&play=1',
  },
  {
    title: 'Sleek Office',
    imageUrl: '/img/our-works/optimum-modern.jpg',
    url: 'https://my.matterport.com/show/?m=sXuQHBMwWSA&play=1',
  },
];

const Works = () => {
  return (
    <section id='works' className='bg-gray-100 py-16 text-center'>
      <div className='mx-auto w-3/4'>
        <h2 className='text-3xl font-bold text-gray-800 mb-4'>Projects</h2>
        <p className='text-gray-600 mb-8'>Check out some of our recent projects</p>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {worksData.map((work, index) => (
            <Link href={work.url} key={index}>
              <a target='_blank'>
                <div
                  key={index}
                  className='bg-white rounded-lg shadow-lg overflow-hidden flex flex-col items-center'
                  style={{ cursor: 'pointer' }}>
                  <div className='relative h-56 w-full'>
                    <Image src={work.imageUrl} alt={work.title} layout='fill' className='object-cover' />
                  </div>
                  <div className='bg-gray-200 w-full p-4 text-gray-800 font-semibold'>{work.title}</div>
                </div>
              </a>
            </Link>
          ))}
        </div>
        <Link href='https://turkeyrealestatexhibition.com'>
          <a target='_blank'>
            <button className='mt-8 bg-teal-500 hover:bg-teal-700 text-white font-bold py-3 px-10 cursor-pointer border-2 rounded-full'>
              Vist Exhibition
            </button>
          </a>
        </Link>
      </div>
    </section>
  );
};

export default Works;
