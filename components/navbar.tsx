"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  const isActive = (path) => router.asPath === path;

  return (
    <nav className="bg-gradient-to-r from-blue-500 to-red-600 text-white py-4 fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-6">
        <Link href="/">
          <a className="text-white text-lg font-bold">Your Logo</a>
        </Link>
        <div className="space-x-6 md:space-x-8 font-bold">
          <Link href="#home" passHref>
            <a
              className={`text-white hover:text-gray-300 ${
                isActive("#home") && "border-b-2 border-white"
              }`}
            >
              Home
            </a>
          </Link>
          <Link href="#partners" passHref>
            <a
              className={`text-white hover:text-gray-300 ${
                isActive("#partners") && "border-b-2 border-white"
              }`}
            >
              Partners
            </a>
          </Link>
          <Link href="#about" passHref>
            <a
              className={`text-white hover:text-gray-300 ${
                isActive("#about") && "border-b-2 border-white"
              }`}
            >
              About Us
            </a>
          </Link>
          <Link href="#works" passHref>
            <a
              className={`text-white hover:text-gray-300 ${
                isActive("#works") && "border-b-2 border-white"
              }`}
            >
              Projects
            </a>
          </Link>
          <Link href="#services" passHref>
            <a
              className={`text-white hover:text-gray-300 ${
                isActive("#services") && "border-b-2 border-white"
              }`}
            >
              Services
            </a>
          </Link>
          <Link href="#testimonials" passHref>
            <a
              className={`text-white hover:text-gray-300 ${
                isActive("#testimonials") && "border-b-2 border-white"
              }`}
            >
              Testimonials
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
