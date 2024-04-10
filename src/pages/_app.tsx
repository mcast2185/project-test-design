import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { Canvas } from '@react-three/fiber';

import '../styles/globals.css';




function MyApp({ Component, pageProps }: AppProps) {

  return (
    <ThemeProvider enableSystem={true} attribute="class">
      {/* <Canvas> */}
        <Component {...pageProps} />
      {/* </Canvas> */}
    </ThemeProvider>
  );
};


export default MyApp;