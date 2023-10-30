import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import SignupForm from './signupForm';
import { reverse } from 'dns';

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const HomePage = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>();
  const [isSignupFormVisible, setSignupFormVisible] = useState(false);

  const handleSignupButtonClick = () => {
    setSignupFormVisible(true);
  };

  const handleSignupFormClose = () => {
    setSignupFormVisible(false);
  };

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => {
      clearInterval(countdownInterval);
    };
  }, []);

  function calculateTimeLeft() {
    const targetDate = new Date('2023-12-11T00:00:00').getTime();
    const now = new Date().getTime();
    const timeDifference = targetDate - now;

    if (timeDifference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  }

  return (
    <section id='home' className='relative h-screen flex flex-col justify-center items-center'>
      <div className='absolute top-0 left-0 w-full h-full'>
        <Image src='/img/istanbul.jpg' alt='Background' layout='fill' objectFit='cover' />
        <div className='absolute top-0 left-0 w-full h-full bg-black opacity-30'></div>
      </div>
      <div className='text-center relative'>
        <motion.h3
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='text-4xl md:text-5xl lg:text-6xl text-[#1E3A8A] font-bold mb-2'>
          Discover Your Dream Home in Istanbul
        </motion.h3>
        <motion.h3
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className='text-4xl md:text-5xl lg:text-6xl text-white mb-2'>
          A Digital Real Estate Revolution
        </motion.h3>
        <motion.h4
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className='text-2xl text-white mb-8'>
          Revolutionizing Real Estate
        </motion.h4>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className='text-2xl text-white mb-8'>
          Meticulously Modeled, Virtually Explored, Expertly Guided - Your Future Home Crafted Digitally
        </motion.p>
        <div className='text-white font-bold text-2xl flex justify-center mb-16'>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
            className='border-2 mx-2 w-20 p-3 rounded-md bg-slate-300/50 text-gray-800 shadow-md'
            title='Days'>
            {timeLeft?.days}D
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6 }}
            className='border-2 mx-2 w-20 p-3 rounded-md bg-slate-300/50 text-gray-800 shadow-md'
            title='Hours'>
            {timeLeft?.hours}H
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8 }}
            className='border-2 mx-2 w-20 p-3 rounded-md bg-slate-300/50 text-gray-800 shadow-md'
            title='Minutes'>
            {timeLeft?.minutes}M
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className='border-2 mx-2 w-20 p-3 rounded-md bg-slate-300/50 text-gray-800 shadow-md'
            title='Seconds'>
            {timeLeft?.seconds}S
          </motion.div>
        </div>
        <motion.button
          animate={{ boxShadow: ['0 0 10px 10px rgba(255,165,0,0.4)', 'none', 'none', 'none'] }}
          transition={{ repeat: Infinity, repeatType: 'loop', delay: 3 }}
          className='bg-teal-500 hover:bg-teal-700 text-white font-bold py-3 px-10 rounded-full cursor-pointer border-2'
          onClick={handleSignupButtonClick}>
          Sign Up
        </motion.button>
        {isSignupFormVisible === true && <SignupForm isVisible={isSignupFormVisible} onClose={handleSignupFormClose} />}
      </div>
    </section>
  );
};

export default HomePage;
