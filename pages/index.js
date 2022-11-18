import Head from "next/head";

import { useRouter } from "next/router";

export default function Home(props) {
  const router = useRouter();

  const {
    title = "Home",
    metaDescription = "Essa é a descrição teste para o seo do dantas bike",
  } = props;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={metaDescription} />
        <meta
          property="og:url"
          content="https://seo-project-omega.vercel.app/"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={metaDescription} />
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
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content="/bikeOGGI.png" />
      </Head>
      <div>
        <h1 className="title"> Dantas Bikes</h1>
      </div>
    </>
  );
}
