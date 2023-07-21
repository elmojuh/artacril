import Head from 'next/head'
import '../style/index.css'
import GlobalStyle from "../src/theme/GlobalStyle";
import BarraDeNavegacao from '../src/components/barraDeNavegacao';
import Footer from '../src/components/footer';


export default function MyApp({ Component, ...pageProps }) {
  return (
    <div>
      <Head>
        <title>Art Acril</title>
      </Head>
      <GlobalStyle />
      <BarraDeNavegacao />
      <Component {...pageProps}/>
      <Footer/>
    </div>
  )
}
