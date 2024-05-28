// "use client";

import { HouseProps, FilterProps } from "@types";
import useSWR from 'swr'


export const updateSearchParams = (type: string, value: string) => {
  const searchParams = new URLSearchParams(window.location.search);
  searchParams.set(type, value);
  const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

  return newPathname;
};

export const deleteSearchParams = (type: string) => {

  const newSearchParams = new URLSearchParams(window.location.search);
  newSearchParams.delete(type.toLocaleLowerCase());
  const newPathname = `${window.location.pathname}?${newSearchParams.toString()}`;

  return newPathname;
};

export async function fetchHouses(
    filters: FilterProps
  ) {
  const { manufacturer, year, model, fuel } = filters;
  const url =`${process.env.API_URL}/api/products?limit=8`
  const response = await fetch(url);

  const result = await response.json();
  return result;
}

export async function fetchHouse(id: string) {
  try {
    const url =`${process.env.API_URL}/api/product?id=${id}`
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    const result = await response.json();
    return result;
    } catch (error) {
      return null;
    }
}






const fetcher = (url:string) => fetch(url, {mode: 'no-cors'}).then(res => res)

// export function fetchHouse(
//     id: string
//   ) {

//   const { data, error, isLoading } = useSWR(`https://api.vietdoo.engineer/api/products?limit=1`, fetcher)
//   return {
//     data: data,
//     isLoading,
//     isError: error
//   }
// }

export const generatePrice = (price:number) => {
  //add dots to price
  const price_string = price.toLocaleString()
  return `${price_string}`;
} 

export const generateCarImageUrl = (house: HouseProps, angle?: string) => {
  const url = new URL("https://cdn.imagin.studio/getimage");
  // const { make, model, year } = car;

  // url.searchParams.append('customer', process.env.NEXT_PUBLIC_IMAGIN_API_KEY || '');
  // url.searchParams.append('make', make);
  // url.searchParams.append('modelFamily', model.split(" ")[0]);
  // url.searchParams.append('zoomType', 'fullscreen');
  // url.searchParams.append('modelYear', `${year}`);
  // // url.searchParams.append('zoomLevel', zoomLevel);
  // url.searchParams.append('angle', `${angle}`);

  return `${url}`;
} 
