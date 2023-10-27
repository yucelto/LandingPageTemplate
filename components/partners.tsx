import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Partners = () => {
  const partners = [
    { icon: "/icon/university-solid.svg", alt: "Partner 1" },
    { icon: "/icon/users-cog-solid.svg", alt: "Partner 2" },
    { icon: "/icon/volleyball-ball-solid.svg", alt: "Partner 3" },
    { icon: "/icon/wine-glass-alt-solid.svg", alt: "Partner 4" },
    { icon: "/icon/yin-yang-solid.svg", alt: "Partner 5" },
  ];

  return (
    <motion.section
      id="partners"
      className="bg-gray-100 py-16 flex flex-col items-center"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 2.5 }}
    >
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Partners
      </h2>
      <div className="container mx-auto flex justify-center items-center space-x-8">
        {partners.map((partner, index) => (
          <motion.div
            key={index}
            className="w-32 h-32 bg-white rounded-lg shadow-lg flex items-center justify-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: (2.5 / partners.length) * (index + 1) }}
          >
            <Image
              src={partner.icon}
              alt={partner.alt}
              width={64}
              height={64}
            />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Partners;
