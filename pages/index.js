import Head from "next/head";
import About from "./about";
import Product from "./products/[productId]";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta
          name="description"
          content="Essa é a descrição teste para o seo do dantas bike"
        />

        <meta
          property="og:url"
          content="https://seo-project-omega.vercel.app/"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Home | Meu portfólio" />
        <meta
          property="og:description"
          content="Essa é a descrição teste para o seo do dantas bike"
        />
        <meta property="og:image" content="/bikeOGGI.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:domain"
          content="seo-project-omega.vercel.app"
        />
        <meta
          property="twitter:url"
          content="https://seo-project-omega.vercel.app/"
        />
        <meta property="og:image" content="/bikeOGGI.png" />
        <meta name="twitter:title" content="Home | Meu portfólio" />
        <meta
          name="twitter:description"
          content="Essa é a descrição teste para o seo do dantas bike"
        />
        <meta name="twitter:image" content="/bikeOGGI.png" />
      </Head>
      <div>
        <h1 className="title"> Dantas Bikes</h1>
      </div>
    </>
  );
}
