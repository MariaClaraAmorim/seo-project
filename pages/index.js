import Head from "next/head";
import About from "./about";
import Product from "./products/[productId]";

export default function Home() {
  return (
    <>
      <Head>
        {/* <title>Home</title>
        <meta x name="description" content="Home da página de teste SEO" />
        <meta property="og:title" content="Home - Página teste" />
        <meta property="og:description" content="Home da página de teste SEO" />
        <meta property="og:url" content="https://myclothingstore.com/about" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" /> */}

        <title>Home</title>
        <meta property="og:image" content="/bikeOGGI.jpeg" />
        <meta property="og:image:secure_url" content="/bikeOGGI.jpeg" />
        <meta name="twitter:image" content="/bikeOGGI.jpeg" />
        <meta name="twitter:image:src" content="/bikeOGGI.jpeg" />
        <meta
          property="og:description"
          content="Sou um desenvolvedor Front-end e aqui apresento alguns projetos desenvolvidos por mim!"
        />
      </Head>

      <div>
        <h1 className="title"> Dantas Bikes</h1>
      </div>
    </>
  );
}
