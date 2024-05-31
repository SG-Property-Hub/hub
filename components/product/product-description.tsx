
import Price from '@components/price';
import Prose from '@components/prose';

import { HouseProps } from "@types";
import { generatePrice } from "@utils";

export function ProductDescription({ product }: { product: HouseProps }) {
  
  return (
    <>
      <div className="mb-6 flex flex-col border-b pb-6 dark:border-neutral-700">
        <h1 className="mb-2 text-3xl font-medium">{product.title}</h1>
        <div className="mr-auto mt-3 w-auto rounded-full border border-blue-600 p-2 text-lg font-bold text-black">
          <Price
            amount={product.price.toString()}
            currencyCode='VND'
          />
        </div>

      </div>


      {product.description ? (
        <div className="max-h-1/5 overflow-y-auto mb-6">
          <Prose
            className="text-2xl leading-tight dark:text-black/[80%]"
            html={product.description}
          />
        </div>
      ) : null}


    </>
  );
}