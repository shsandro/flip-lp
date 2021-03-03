import React from "react";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/core";
import FlipTheme from "../styles/FlipTheme";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
  <>
    <Head>
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Flip - vem ser digital de verdade</title>
    </Head>
    <body>
      <ThemeProvider theme={FlipTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </body>
  </>
  );
}

export default MyApp;
