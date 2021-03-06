/* eslint-disable react/no-danger */
import React from 'react';
import Document, {
  Html, Head, Main, NextScript,
} from 'next/document';
import { ServerStyleSheets } from '@material-ui/core/styles';
import createEmotionServer from 'create-emotion-server';
import theme from '../styles/FlipTheme';
import { cache } from './_app';

const { extractCritical } = createEmotionServer(cache);

const googleTag = () => ({
  __html: `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-0XSSDTM3SN');
    `,
});

const facebookPixel = () => ({
  __html: `!function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', '496665948447459');
  fbq('track', 'PageView');
  `,
});

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <script src="//code-sa1.jivosite.com/widget/IC19Vp2268" async />
          <script dangerouslySetInnerHTML={facebookPixel()} />
          <noscript>
            <img
              height="1"
              width="1"
              alt="facebook pixel"
              style={{ display: "none" }}
              src="https://www.facebook.com/tr?id=496665948447459&ev=PageView&noscript=1"
            />
          </noscript>
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-0XSSDTM3SN"
          />
          <script dangerouslySetInnerHTML={googleTag()} />
          {/* PWA primary color */}
          <meta name="theme-color" content={theme.palette.primary.main} />
          <link rel="shortcut icon" href="/favicon.ico" />
          <meta property="og:locale" content="pt_BR" />
          <meta property="og:url" content="https://www.flipcrm.com.br" />
          <meta
            property="og:title"
            content="Sua imobili??ria realmente digital!"
          />
          <meta property="og:site_name" content="Flip" />
          <meta
            property="og:description"
            content="Seu objetivo ?? vender e alugar mais? Ajudamos voc?? a fazer mais neg??cios!"
          />
          <meta
            property="og:image"
            content="https://www.flipcrm.com.br/OG-image.png"
          />
          <meta property="og:image:type" content="image/png" />
          <meta property="og:image:width" content="400" />
          <meta property="og:image:height" content="400" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with static-site generation (SSG).
MyDocument.getInitialProps = async (ctx) => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  // Render app and page and get the context of the page with collected side effects.
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () => originalRenderPage({
    enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
  });

  const initialProps = await Document.getInitialProps(ctx);
  const styles = extractCritical(initialProps.html);

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [
      ...React.Children.toArray(initialProps.styles),
      sheets.getStyleElement(),
      <style
        key="emotion-style-tag"
        data-emotion-css={styles.ids.join(' ')}
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: styles.css }}
      />,
    ],
  };
};
