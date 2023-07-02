import './globals.css';
import { Noto_Sans_TC } from 'next/font/google';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeContextProvider from '@/context/HomeContext';

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
          <Header />
          {children}
          <Footer />
        </HomeContextProvider>
      </body>
    </html>
  );
}
