"use client";

import { useState } from "react";
import Image from "next/image";

import { calculateCarRent, generatePrice } from "@utils";
import { HouseProps } from "@types";
import CustomButton from "./CustomButton";
import HouseDetails from "./HouseDetails";

interface HouseCardProps {
  house: HouseProps;
}

const HouseCard = ({ house }: HouseCardProps) => {
  // const { city_mpg, year, make, model, transmission, drive } = car;
  const { title, dist, img, url, rooms, size, price, long, lat} = house;
  const [isOpen, setIsOpen] = useState(false);

  // const carRent = calculateCarRent(city_mpg, year);

  return (
    <div className="car-card group">
      <div className="car-card__content" style={{ height: '100px' }}>
        <h3 className="car-card__content-title">
          {title}
        </h3>
      </div>

      <p className='flex mt-6 text-[22px] leading-[38px] font-extrabold'>
        {/* <span className='self-start text-[14px] leading-[17px] font-semibold'>$</span> */}
        {generatePrice(price)}
        <span className='text-[15px] font-medium'> VND</span>
      </p>

      <div className='relative w-full h-40 my-3 object-contain'>
        <Image src={img} alt='house model' fill priority className='object-contain' layout="fill" objectFit="cover" />
      </div>

      <div className='relative flex w-full mt-2'>
        <div className='flex group-hover:invisible w-full justify-between text-grey'>
          <div className='flex flex-col justify-center items-center gap-2'>
            <Image src='/type.png' width={20} height={20} alt='steering wheel' />
            <p className='text-[14px] leading-[17px]'>
              {title === "a" ? "Đất" : "Nhà"}
            </p>
          </div>
          <div className="car-card__icon">
            <Image src="/square.png" width={20} height={20} alt="seat" />
            <p className="car-card__icon-text">{size}</p>
          </div>
          <div className="car-card__icon">
            <Image src="/room.png" width={20} height={20} alt="seat" />
            <p className="car-card__icon-text">{rooms}</p>
          </div>
          
        </div>

        <div className="car-card__btn-container">
          <CustomButton
            title='View More'
            containerStyles='w-full py-[16px] rounded-full bg-primary-blue'
            textStyles='text-white text-[14px] leading-[17px] font-bold'
            rightIcon='/right-arrow.svg'
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>

      <HouseDetails isOpen={isOpen} closeModal={() => setIsOpen(false)} house={house} />
    </div>
  );
};

export default HouseCard;
