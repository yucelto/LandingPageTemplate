"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  const isActive = router.asPath;
  return (
    <nav className="bg-gradient-to-r from-blue-500 to-red-600 text-white py-4 fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center text-lg font-bold">
        <Link href="/">Your Logo</Link>
        <div className="space-x-8">
          <Link href="#home" className="hover:text-gray-300 hover:underline">
            Home
          </Link>
          <Link
            href="#partners"
            className={`hover:text-gray-300 hover:underline ${
              isActive ? "underline" : ""
            }`}
          >
            Partners
          </Link>
          <Link href="#about" className="hover:text-gray-300 hover:underline">
            About Us
          </Link>
          <Link href="#works" className="hover:text-gray-300 hover:underline">
            Our Works
          </Link>
          <Link
            href="#services"
            className="hover:text-gray-300 hover:underline"
          >
            Our Services
          </Link>
          <Link
            href="#testimonials"
            className="hover:text-gray-300 hover:underline"
          >
            Testimonials
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
