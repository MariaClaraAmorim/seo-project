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
        <title>{title} - My Clothing Store</title>
        <meta name="description" content={`Learn more about ${title}`} />
        <meta property="og:title" content={`${title} - My Clothing Store`} />
        <meta property="og:description" content={`Learn more about ${title}`} />
        <meta
          property="og:url"
          content={`https://myclothingstore.com/products/${productId}`}
        />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Cool Page</h1>
      <p>This is a cool page. It has lots of cool content!</p>
    </div>
  );
};

export default HeadSeo;
