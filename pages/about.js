import styles from "../styles/Home.module.css";
import Product from "./products/[productId]";

import Head from "next/head";

import { ReactElement } from "react";

export default function About() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Dantas Bikes</h1>
    </div>
  );
}
