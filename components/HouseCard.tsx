"use client";

import { useState } from "react";
import Image from "next/image";

import { generatePrice } from "@utils";
import { HouseProps } from "@types";
import CustomButton from "./CustomButton";
import CustomImage from "./CustomImage";
import HouseDetails from "./HouseDetails";
import Link from "next/link";
import Price from '@components/price';

interface HouseCardProps {
  house: HouseProps;
}

const HouseCard = ({ house }: HouseCardProps) => {

  const { title, thumbnail, location_dist, image, url, attr_total_room, attr_total_area, 
          price, price_string,
          location_long, location_lat, id} = house;
  const [isOpen, setIsOpen] = useState(false);


  return (
    <Link href={`product/${id}`}>
    <div className="house-card group">
      <div className="house-card__content" style={{ height: '100px' }}>
        <h3 className="house-card__content-title">
          {title}
        </h3>
      </div>

      <div className="mr-auto w-auto rounded-full border dark:border-neutral-200 p-2 text-sm text-black flex mt-6 ">
          <Price
            amount={(price !== null) ? price.toString() : price_string}
            currencyCode='VND'
          />
        </div>

      <div className='relative w-full h-40 my-3 object-contain'>
        {/* <Image src={img} alt='house model' fill priority className='object-contain' objectFit="cover" /> */}
          <CustomImage src={thumbnail} alt='house model' fill priority className='object-contain' objectFit="cover" />
      </div>

      <div className='relative flex w-full mt-2'>
        <div className='flex group-hover:invisible w-full justify-between text-grey'>
          <div className='flex flex-col justify-center items-center gap-2'>
            <Image src='/type.png' width={20} height={20} alt='steering wheel' />
            <p className='text-[14px] leading-[17px]'>
              {title === "a" ? "Đất" : "Nhà"}
            </p>
          </div>
          <div className="house-card__icon">
            <Image src="/square.png" width={20} height={20} alt="seat" />
              <p className="house-card__icon-text">{attr_total_area}</p>
          </div>
          <div className="house-card__icon">
            <Image src="/room.png" width={20} height={20} alt="seat" />
              <p className="house-card__icon-text">{attr_total_room}</p>
          </div>
          
        </div>

        <div className="house-card__btn-container">
          
            <CustomButton
              title='Xem thêm'
              containerStyles='w-full py-[16px] rounded-full bg-primary-blue'
              textStyles='text-white text-[14px] leading-[17px] font-bold'
              // rightIcon='/right-arrow.svg'
              // handleClick={() => setIsOpen(true)}
            />     
        </div>
      </div>

      <HouseDetails isOpen={isOpen} closeModal={() => setIsOpen(false)} house={house} />
    </div>
    </Link>
  );
};

export default HouseCard;
