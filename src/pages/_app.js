import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import Header from '@/components/Header/Header';
import Head from 'next/head';
import  "../styles/globals.css"


function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Import Bootstrap JS dynamically to avoid SSR issues
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);
  return (
    <main>
      <Head>
        <link rel="icon" href="/fav.ico" />
      </Head>
      <Header />
      <Component {...pageProps} />
      
    </main>
  );
}

export default MyApp;