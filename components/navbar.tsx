'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { MenuIcon } from '@heroicons/react/outline';
import { LightningBoltIcon } from '@heroicons/react/solid';
import { motion } from 'framer-motion';

const links = [
  {
    label: 'Home',
    href: '#home',
  },
  {
    label: 'Partners',
    href: '#partners',
  },
  {
    label: 'About Us',
    href: '#about',
  },
  {
    label: 'Projects',
    href: '#projects',
  },
  {
    label: 'Services',
    href: '#services',
  },
  {
    label: 'Testimonials',
    href: '#testimonials',
  },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const isActive = (path: string) => router.asPath === path;

  return (
    <nav className='flex items-center justify-between bg-gradient-to-r from-blue-500 to-red-600 text-white fixed w-full top-0 z-20 h-14 px-4 shadow-md select-none'>
      <div className='flex items-center gap-2 text-white text-lg'>
        <motion.div initial={{ y: '-100%' }} animate={{ y: 0 }} transition={{ duration: 0.4 }}>
          <Link href='/'>
            <LightningBoltIcon className='w-8 h-8' />
          </Link>
        </motion.div>
        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
          Exhibition
        </motion.span>
      </div>
      <motion.ul className='hidden md:flex gap-6' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
        {links.map((link) => (
          <li key={link.label} className='space-x-6 md:space-x-8'>
            <Link href={link.href} passHref>
              <a className={`text-white hover:text-gray-300 ${isActive(link.href) && 'border-b-2 border-white'}`}>{link.label}</a>
            </Link>
          </li>
        ))}
      </motion.ul>
      {isMenuOpen === true && (
        <motion.ul
          className='md:hidden absolute left-0 right-0 top-full flex flex-col items-center gap-6 bg-gray-100 shadow-md py-4'
          initial={{ x: '-100%' }}
          animate={{ x: 0 }}>
          {links.map((link) => (
            <li key={link.label} onClick={(_) => setIsMenuOpen(false)}>
              <Link href={link.href} passHref>
                <a className={`text-gray-800 ${isActive(link.href) && 'underline'}`}>{link.label}</a>
              </Link>
            </li>
          ))}
        </motion.ul>
      )}
      <MenuIcon onClick={(_) => setIsMenuOpen((prevState) => !prevState)} className='cursor-pointer md:hidden h-8 w-8' />
    </nav>
  );
};

export default Navbar;
