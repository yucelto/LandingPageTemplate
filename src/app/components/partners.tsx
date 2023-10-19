import React from "react";

const Partners = () => {
  return (
    <section id="partners" className="bg-gray-100 py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Our Partners
        </h2>
        <div className="flex justify-center items-center space-x-8">
          <div className="w-32 h-32 bg-white rounded-lg shadow-lg flex items-center justify-center">
            <img
              src="/icon/university-solid.svg"
              alt="Partner 1"
              className="object-contain w-16 h-16"
            />
          </div>
          <div className="w-32 h-32 bg-white rounded-lg shadow-lg flex items-center justify-center">
            <img
              src="/icon/users-cog-solid.svg"
              alt="Partner 2"
              className="object-contain w-16 h-16"
            />
          </div>
          <div className="w-32 h-32 bg-white rounded-lg shadow-lg flex items-center justify-center">
            <img
              src="/icon/volleyball-ball-solid.svg"
              alt="Partner 3"
              className="object-contain w-16 h-16"
            />
          </div>
          <div className="w-32 h-32 bg-white rounded-lg shadow-lg flex items-center justify-center">
            <img
              src="/icon/wine-glass-alt-solid.svg"
              alt="Partner 4"
              className="object-contain w-16 h-16"
            />
          </div>
          <div className="w-32 h-32 bg-white rounded-lg shadow-lg flex items-center justify-center">
            <img
              src="/icon/yin-yang-solid.svg"
              alt="Partner 5"
              className="object-contain w-16 h-16"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
