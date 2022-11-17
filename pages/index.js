import { NextSeo } from "next-seo";
import Head from "next/head";
import About from "./about";
import Product from "./products/[productId]";

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

      <NextSeo
        title=""
        description="Este exemplo usa mais opções de configuração disponíveis."
        canonical="https://www.canonical.ie/"
        openGraph={{
          url: "https://seo-project-omega.vercel.app/",
          title: "Open Graph Title",
          description: "Open Graph Description",
          images: [
            {
              url: "https://oggibikes.com.br/wp-content/uploads/2022/04/bw-7-4-azul-scaled.jpg",
              width: 800,
              height: 600,
              alt: "Og Image Alt",
              type: "image/jpeg",
            },
          ],
          site_name: "Teste SEO",
        }}
      />

      <div>
        <h1 className="title"> Dantas Bikes</h1>
      </div>
    </>
  );
}
