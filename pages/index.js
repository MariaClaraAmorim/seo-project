import Head from "next/head";
import About from "./about";
import Product from "./products/[productId]";

import { popularProducts } from "./data";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta x name="description" content="Home da página de teste SEO" />
        <meta property="og:title" content="Home - Página teste" />
        <meta property="og:description" content="Home da página de teste SEO" />
        <meta property="og:url" content="https://myclothingstore.com/about" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <h1 className="title"> Dantas Bikes</h1>
      </div>
    </>
  );
}
