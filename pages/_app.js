import Head from 'next/head'
import '../style/index.css'
import GlobalStyle from "../src/theme/GlobalStyle";
import BarraDeNavegacao from '../src/components/barraDeNavegacao';
import Footer from '../src/components/footer';

const navPlaceHolder = {
  paddingTop: '56px',
}

export default function MyApp({ Component, ...pageProps }) {
  return (
    <div style={navPlaceHolder}>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Expositores em Acrílico" />
        <title>Art Acril</title>
      </Head>
      <GlobalStyle />
      <BarraDeNavegacao />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}
