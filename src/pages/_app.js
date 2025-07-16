import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import Header from '@/components/Header/Header';
import Head from 'next/head';
import "../styles/globals.css";

// Import fonts from next/font/google
import { Poppins, DM_Sans } from 'next/font/google';

// Create font instances with desired weights
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600',"700"],
  variable: '--font-poppins',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400',"500", '700'],
  variable: '--font-dm-sans',
});

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return (
    <main className={`${poppins.variable} ${dmSans.variable}`}>
      <Head>
        <link rel="icon" href="/fav.ico" />
      </Head>
      <Header />
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
