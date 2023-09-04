import Link from "next/link";
import Image from "next/image";

import CustomButton from "./CustomButton";

const openInNewTab = (url:string) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
}

const NavBar = () => (
  
  <header className='w-full  absolute z-10'>
    <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-transparent'>
      <Link href='/' className='flex justify-center items-center'>
        <Image
          src='/logo.png'
          alt='logo'
          width={118}
          height={18}
          className='object-contain'
        />
      </Link>

      <Link href="https://server.vietdoo.engineer/maps">
        <CustomButton
          title="Maps"
          containerStyles="bg-primary-blue text-white rounded-full min-w-[130px] ml-40"
        />
    </Link>
      

      <CustomButton
        title='Sign in'
        btnType='button'
        containerStyles='text-primary-blue rounded-full bg-white min-w-[130px]'
      />

      

    </nav>
  </header>
);

export default NavBar;
