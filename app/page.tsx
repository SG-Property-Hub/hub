// "use client";

import { fetchHouses } from "@utils";
import { HomeProps } from "@types";
import { propDist, propType } from "@constants";
import { HouseCard, ShowMore, SearchBar, CustomFilter, Hero } from "@components";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";

export default async function Home({ searchParams }: HomeProps) {
  // const pathname = usePathname()
  const allHouses = await fetchHouses({
    //manufacturer: searchParams.manufacturer || "",
    // year: searchParams.year || 2022,
    // fuel: searchParams.fuel || "",
    limit: searchParams.limit || 48
    // model: searchParams.model || "",
  });

  const isDataEmpty = !Array.isArray(allHouses) || allHouses.length < 1 || !allHouses;
  // router.replace(router.asPath);
  return (
    <main className='overflow-hidden' >
      <Hero />

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

            <ShowMore
              pageNumber={(searchParams.limit || 10) / 10}
              isNext={(searchParams.limit || 10) > allHouses.length}
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
