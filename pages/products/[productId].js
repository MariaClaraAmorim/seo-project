import { NextSeo } from "next-seo";
import Head from "next/head";
import styles from "../../styles/Home.module.css";

export default function Product({ productId, title }) {
  return (
    <>
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
