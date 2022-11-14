import { NextSeo } from "next-seo";
import Head from "next/head";
import styles from "../../styles/Home.module.css";

// const url = `http://localhost:3000/products/${productId}`;

export default function Product({ productId, title }) {
  return (
    <>
      <NextSeo
        title={title}
        description="Este exemplo usa mais opções de configuração disponíveis."
        canonical="https://www.canonical.ie/"
        openGraph={{
          url: "https://fake-app-five.vercel.app/",
          title: "Open Graph Title",
          description: "Open Graph Description",
          images: [
            {
              url: "https://avatars.dicebear.com/api/adventurer/your-custom-seed.svg",
              width: 800,
              height: 600,
              alt: "Og Image Alt",
              type: "image/jpeg",
            },
          ],
          site_name: "Teste SEO",
        }}
        twitter={{
          handle: "@seo",
          site: "@seo",
          cardType: "summary_large_image",
        }}
      />
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>{title}</h1>
          <p>Product ID: {productId}</p>
        </main>
      </div>
    </>
  );
}

export async function getStaticProps({ params = {} } = {}) {
  return {
    props: {
      productId: params.productId,
      title: `Product ${params.productId}`,
    },
  };
}

export async function getStaticPaths() {
  const paths = [...new Array(5)].map((i, index) => {
    return {
      params: {
        productId: `${index + 1}`,
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
}
