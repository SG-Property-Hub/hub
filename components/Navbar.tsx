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
          src='/logo_sgp.png'
          alt='logo'
          width={128}
          height={25}
          className='object-contain'
        />
      </Link>

      <div className='flex justify-between'> 
        <Link href="https://server.vietdoo.engineer/maps" className="mr-5">
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
      </div>
      
    

    </nav>
  </header>
);

export default NavBar;
