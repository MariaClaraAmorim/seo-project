import { NextSeo } from "next-seo";
import Head from "next/head";
import About from "./about";
import Product from "./products/[productId]";

export default function Home({host}) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NextSeo
        title="Home"
        description="Este exemplo usa mais opções de configuração disponíveis."
        canonical="https://www.canonical.ie/"
        openGraph={{
          url: "https://seo-project-omega.vercel.app/",
          title: "Open Graph Title",
          description: "Open Graph Description",
          images: [
            {
              url:  host + "/bikeOGGI.jpg",
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

// Obtém o post completo
export async function getStaticProps({ params }) {
	return { props: { host: process.env["HOST"]} };
}