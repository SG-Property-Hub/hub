// import Grid from 'components/grid';
// import ProductGridItems from 'components/layout/product-grid-items';
// import { defaultSort, sorting } from 'lib/constants';
// import { getProducts } from 'lib/shopify';

// export const runtime = 'edge';

// export const metadata = {
//   title: 'Search',
//   description: 'Search for products in the store.'
// };

// export default async function SearchPage({
//   searchParams
// }: {
//   searchParams?: { [key: string]: string | string[] | undefined };
// }) {
//   const { sort, q: searchValue } = searchParams as { [key: string]: string };
//   const { sortKey, reverse } = sorting.find((item) => item.slug === sort) || defaultSort;

//   const products = await getProducts({ sortKey, reverse, query: searchValue });
//   const resultsText = products.length > 1 ? 'results' : 'result';

//   return (
//     <>
//       {searchValue ? (
//         <p className="mb-4">
//           {products.length === 0
//             ? 'There are no products that match '
//             : `Showing ${products.length} ${resultsText} for `}
//           <span className="font-bold">&quot;{searchValue}&quot;</span>
//         </p>
//       ) : null}
//       {products.length > 0 ? (
//         <Grid className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
//           <ProductGridItems products={products} />
//         </Grid>
//       ) : null}
//     </>
//   );
// }

// "use client";

import { fetchHouses } from "@utils";
import { HomeProps } from "@types";
import { propDist, propType } from "@constants";
import { HouseCard, Pagination, SearchBar, CustomFilter, Hero } from "@components";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";

export default async function Home({ searchParams }: HomeProps) {
  
  const allHouses = await fetchHouses({
    page: searchParams.page || 1
  });
  const maxPages = 20;
  const isDataEmpty = !Array.isArray(allHouses) || allHouses.length < 1 || !allHouses;
  // router.replace(router.asPath);
  return (
    <main className='overflow-hidden' >

      <div className='mt-12 padding-x padding-y max-width' id='discover'>
        <div className='home__text-container'>
          <h1 className='text-4xl font-extrabold'>Danh Sách Bất Động Sản</h1>
          <p>Tìm ngay bất động sản phù hợp với bạn</p>
        </div>

        <div className='home__filters'>
          <SearchBar />

          <div className='home__filter-container'>
            <CustomFilter title='Nhà' options={propType} />
            <CustomFilter title='Quận' options={propDist} />
          </div>
        </div>

        {!isDataEmpty ? (
          <section>
            <div className='home__cars-wrapper'>
              {allHouses?.map((house) => (
                <HouseCard house={house} />
              ))}
            </div>

            <Pagination
              page={(searchParams.page || 1) / 1}
              maxPages={maxPages}
              isNext={allHouses.length > 0}
            />
          </section>
        ) : (
          <div className='home__error-container'>
            <h2 className='text-black text-xl font-bold'>Oops, no results</h2>
            <p>{allHouses?.message}</p>
          </div>
        )}
      </div>
    </main>
  );
}
