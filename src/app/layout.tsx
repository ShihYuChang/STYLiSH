/* eslint-disable camelcase */
import HomeContextProvider from '@/context/HomeContext';
import { Noto_Sans_TC } from 'next/font/google';
import Footer from './components/Footer';
import Header from './components/Header';
import MobileFooter from './components/MobileFooter';
import './globals.css';

const noto_sans = Noto_Sans_TC({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head>
        <title>STYLiSH</title>
      </head>
      <body className={`${noto_sans.className} text-custom-grey`}>
        <HomeContextProvider>
          <div className='min-h-screen flex flex-col'>
            <Header />
            <div className='grow'>{children}</div>
            <Footer />
            <MobileFooter />
          </div>
        </HomeContextProvider>
      </body>
    </html>
  );
}
