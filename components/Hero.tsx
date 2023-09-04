"use client";

import Image from "next/image";


import { CustomButton } from "@components";

const Hero = () => {
  const handleScroll = () => {
    const nextSection = document.getElementById("discover");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Find House super easy!
        </h1>

        <p className="hero__subtitle">
          Streamline your house buying experience with our effortless booking
          process.
        </p>

        <CustomButton
          title="Explore Houses"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero-house2.png" alt="hero" fill className="object-contain" 
            style={{ transform: 'scale(1.3)' }}
          />
        </div>

        <div className="hero__image-overlay" />
      </div>
    </div>
  );
};

export default Hero;
