"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const worksData = [
  {
    title: "Modern Apartment",
    imageUrl: "/img/our-works/delta-dubai.jpg",
    url: "https://my.matterport.com/show/?m=2ipFsQz3Sdh&play=0&qs=1&hl=1&play=1",
  },
  {
    title: "Cozy Home",
    imageUrl: "/img/our-works/delta-dubai-2.jpg",
    url: "https://my.matterport.com/show/?m=kKDdAUChWMB&play=1",
  },
  {
    title: "Luxury Villa",
    imageUrl: "/img/our-works/deniz-ist-3bed.jpg",
    url: "https://my.matterport.com/show/?m=carVHHGF8uR&play=1",
  },
  {
    title: "Spacious Loft",
    imageUrl: "/img/our-works/deniz-istanbul-mercan.jpg",
    url: "https://my.matterport.com/show/?m=NDXTvMjdbG3&cloudEdit=1&sr=-.03,.4&ss=108&play=1",
  },
  {
    title: "Charming Cottage",
    imageUrl: "/img/our-works/emaar.jpg",
    url: "https://my.matterport.com/show/?m=qeghtsjd7JX&play=1",
  },
  {
    title: "Sleek Office",
    imageUrl: "/img/our-works/optimum-modern.jpg",
    url: "https://my.matterport.com/show/?m=sXuQHBMwWSA&play=1",
  },
];

const Works = () => {
  return (
    <section id="works" className="bg-gray-100 py-16 text-center">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Works</h2>
        <p className="text-gray-600 mb-8">
          Check out some of our recent projects
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
          {worksData.map((work, index) => (
            <Link href={work.url} key={index} target="_blank">
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col items-center"
                style={{ cursor: "pointer" }}
              >
                <div className="h-48 w-full">
                  <img
                    src={work.imageUrl}
                    alt={work.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex-1 w-full bg-gray-200 flex justify-center items-center p-4">
                  <p className="text-gray-800 font-semibold">{work.title}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <Link href="https://turkeyrealestatexhibition.com" target="_blank">
          <button className="mt-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            See More Work
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Works;
