import Image from "next/image";
// "use client";
// import { useRouter } from 'next/router';

import CustomButton from "@components/CustomButton";

// import Cart from 'components/cart';
// import OpenCart from 'components/cart/open-cart';
import LogoSquare from '@components/logo-square';
// import { getMenu } from 'lib/shopify';
// import { Menu } from 'lib/shopify/types';
import Link from 'next/link';
import { Suspense } from 'react';
// import MobileMenu from './mobile-menu';
import Search from './search';

const SITE_NAME = 'SGP Hub';

export default async function Navbar() {
  return (
    <nav className="relative flex items-center justify-between p-4 lg:px-6">
      <div className="block flex-none md:hidden">
        {/* <MobileMenu menu={menu} /> */}
      </div>
      <div className="flex w-full items-center">
        <div className="flex w-full md:w-1/3">
          <Link href="/" className="mr-2 flex w-full items-center justify-center md:w-auto lg:mr-6">
            <LogoSquare />
            <div className="ml-2 flex-none text-sm font-medium uppercase md:hidden lg:block">
              {SITE_NAME}
            </div>
          </Link>
          {/* {menu.length ? (
            <ul className="hidden gap-6 text-sm md:flex md:items-center">
              {menu.map((item: Menu) => (
                <li key={item.title}>
                  <Link
                    href={item.path}
                    className="text-neutral-500 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          ) : null} */}
        </div>
        <div className="hidden justify-center md:flex md:w-1/3">
          {/* <Search /> */}
        </div>
        
        <div className="flex justify-end md:w-1/3">
          <Suspense>
            <Link href="/maps" className="mr-5">
            <CustomButton
              title="Bản đồ"
              containerStyles="bg-primary-blue text-white rounded-full min-w-[130px]"
            />
            </Link>
            <CustomButton
              title='Đăng nhập'
              btnType='button'
              containerStyles='text-primary-blue rounded-full bg-white min-w-[130px]'
            />
          </Suspense>
        </div>
      </div>
    </nav>
  );
}

// const NavBar = () => (
  
//   <header className='w-full'>
//     <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-transparent'>
//       <Link href='/' className='flex justify-center items-center'>
//         <Image
//           src='/logo_sgp.png'
//           alt='logo'
//           width={128}
//           height={25}
//           className='object-contain'
//         />
//       </Link>

//       <div className='flex justify-between'> 
//         <Link href="/maps" className="mr-5">
//           <CustomButton
//             title="Bản đồ"
//             containerStyles="bg-primary-blue text-white rounded-full min-w-[130px]"
//           />
//         </Link>
        

//         <CustomButton
//           title='Đăng nhập'
//           btnType='button'
//           containerStyles='text-primary-blue rounded-full bg-white min-w-[130px]'
//         />
//       </div>
      
    

//     </nav>
//   </header>
// );

// export default NavBar;
