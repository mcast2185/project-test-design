'use client';

import { useEffect } from 'react';
import type { AppProps } from 'next/app';
import Lenis from '@studio-freight/lenis';
import { ThemeProvider } from 'next-themes';

import '../styles/globals.css';


function MyApp({ Component, pageProps }: AppProps) {

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);
  }, []);

  return (
    <ThemeProvider enableSystem={true} attribute="class">
        <Component {...pageProps} />
    </ThemeProvider>
  );
};


export default MyApp;