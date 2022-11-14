import Head from "next/head";
// import siteMetadata from "@data/siteMetadata"

const HeadSeo = ({
  title,
  description,
  canonicalUrl,
  ogTwitterImage,
  ogType,
  children,
}) => {
  return (
    <div>
      <Head>
        <title>{title} - SEO</title>
        <meta name="description" content={`Teste-  ${title}`} />
        <meta property="og:title" content={`${title} - Projeto SEO`} />
        <meta property="og:description" content={`SEo ${title}`} />
        <meta
          property="og:url"
          content={`https://myclothingstore.com/products/${productId}`}
        />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     
    </div>
  );
};

export default HeadSeo;
