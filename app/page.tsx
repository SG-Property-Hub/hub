import { fetchCars } from "@utils";
import { HomeProps } from "@types";
import { propDist, propType } from "@constants";
import { HouseCard, ShowMore, SearchBar, CustomFilter, Hero } from "@components";

export default async function Home({ searchParams }: HomeProps) {
  const allHouses = await fetchCars(
    //{manufacturer: searchParams.manufacturer || "",
    // year: searchParams.year || 2022,
    // fuel: searchParams.fuel || "",
    // limit: searchParams.limit || 10,
    // model: searchParams.model || "",}
    );

  const isDataEmpty = !Array.isArray(allHouses) || allHouses.length < 1 || !allHouses;

  return (
    <main className='overflow-hidden'>
      <Hero />

      <div className='mt-12 padding-x padding-y max-width' id='discover'>
        <div className='home__text-container'>
          <h1 className='text-4xl font-extrabold'>House Catalogue</h1>
          <p>Explore out houses you might like</p>
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
