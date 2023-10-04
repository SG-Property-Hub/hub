// import { AddToCart } from '@components/cart/add-to-cart';
import Price from '@components/price';
import Prose from '@components/prose';
// import { Product } from '@lib/shopify/types';
// import { VariantSelector } from './variant-selector';
import { HouseProps } from "@types";
import { generatePrice } from "@utils";

export function ProductDescription({ product }: { product: HouseProps }) {
  return (
    <>
      <div className="mb-6 flex flex-col border-b pb-6 dark:border-neutral-700">
        <h1 className="mb-2 text-4xl font-medium">{product.title}</h1>
        <div className="mr-auto w-auto rounded-full bg-blue-600 p-2 text-sm text-white">
          <Price
            amount={product.price.toString()}
            currencyCode='VND'
          />
        </div>
      </div>
      {/* <VariantSelector options={product.options} variants={product.variants} /> */}

      {product.description ? (
        <Prose
          className="mb-6 text-2xl leading-tight dark:text-black/[80%]"
          html={product.description}
        />
      ) : null}

      {/* <AddToCart variants={product.variants} availableForSale={product.availableForSale} /> */}
    </>
  );
}