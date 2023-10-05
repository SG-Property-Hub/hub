import "./globals.css";

import Footer from "@components/layout/footer";
import NavBar from "@components/layout/navbar";
import { ReactNode, Suspense } from 'react';

export const metadata = {
  title: "SG Property Hub",
  description: "Tìm bất động sản thông minh",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='vi'>
      <body className='relative'>
        <NavBar />
        <Suspense>
          {children}
        </Suspense>
        <Footer />
      </body>
    </html>
  );
}
