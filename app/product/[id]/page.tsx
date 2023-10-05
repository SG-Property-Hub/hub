
// "use client";

import { useState } from "react";
import HouseDetails from "@components/HouseDetails";
import { HouseCard, ShowMore, SearchBar, CustomFilter, Hero } from "@components";
import { fetchHouse } from "@utils";
import Link from 'next/link';
import { Suspense } from 'react';

import { ProductDescription } from '@components/product/product-description';
import { Gallery } from '@components/product/gallery';
import { GridTileImage } from '@components/grid/tile';

export interface PageProps {
  params: {
    id: string
  }
}
 
export default async function Page({params}: PageProps ) {
  const {id} = params;
  const data = await fetchHouse(id);
  if (!data) return null;
  const house = data[0]
  const images = new Array(3).fill('https://cdn.chotot.com/XI28WDFwhRO7cWRHD75RFFpTY-8qIQDwwgHe_sBN3gw/preset:view/plain/2fa2de440c0ffca408c3c41ea9d1e437-2846090137772897146.jpg')
  
  return (
    <>
      <script
        type="application/ld+json"
        // dangerouslySetInnerHTML={{
        //   __html: JSON.stringify(productJsonLd)
        // }}
      />
      <div className="mx-auto max-w-screen-2xl px-4">
        {/* <div className="flex flex-col rounded-lg border border-neutral-200 bg-white p-8 dark:border-neutral-800 dark:bg-white md:p-12 lg:flex-row lg:gap-8"> */}
        <div className="flex flex-col rounded-lg border border-neutral-200 bg-white p-8  dark:bg-white md:p-12 lg:flex-row lg:gap-8">
          <div className="h-full w-full basis-full lg:basis-4/6">
            <Gallery
              images={images.map((image:any) => ({
                src: image,
                altText: image
              }))}
            />
          </div>

          <div className="basis-full lg:basis-2/6">
            <ProductDescription product={house} />
          </div>
        </div>
        <Suspense>
          <RelatedProducts id={house.title} />
        </Suspense>
      </div>
    </>
  );
}

async function RelatedProducts({ id }: { id: string }) {
  const house = await fetchHouse(id);
  const relatedProducts = new Array(8).fill(house);

  if (!relatedProducts.length) return null;

  return (
    <div className="py-8">
      <h2 className="mb-4 text-2xl font-bold">Related Products</h2>
      <ul className="flex w-full gap-4 overflow-x-auto pt-1">
        {relatedProducts.map((product:any) => (
          product = product[0],
          <li
            key={product.title}
            className="aspect-square w-full flex-none min-[475px]:w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5"
          >
            <Link className="relative h-full w-full" href={`/product/${product.title}`}>
              <GridTileImage
                alt={product.title}
                label={{
                  title: product.title,
                  amount: product.price.toString(),
                  currencyCode: 'VND'
                }}
                src={'https://cdn.chotot.com/XI28WDFwhRO7cWRHD75RFFpTY-8qIQDwwgHe_sBN3gw/preset:view/plain/2fa2de440c0ffca408c3c41ea9d1e437-2846090137772897146.jpg'}
                fill
                sizes="(min-width: 1024px) 20vw, (min-width: 768px) 25vw, (min-width: 640px) 33vw, (min-width: 475px) 50vw, 100vw"
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}