import React from 'react';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core';
import { CacheProvider } from '@emotion/core';
import createCache from '@emotion/cache';
import FlipTheme from '../styles/FlipTheme';
import '../styles/globals.css';

export const cache = createCache();

function MyApp({ Component, pageProps }) {
  return (
    <CacheProvider value={cache}>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Flip - vem ser digital de verdade</title>
      </Head>
      <ThemeProvider theme={FlipTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}

export default MyApp;
