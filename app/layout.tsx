import "./globals.css";

import { Footer, NavBar } from "@components";

export const metadata = {
  title: "SG Property Hub",
  description: "Tìm bất động sản thông minh",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='vi'>
      <body className='relative'>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
