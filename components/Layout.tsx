import React from "react";
import Head from "next/head";
import styles from '@/styles/Layout.module.css'
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({
  title,
  keywords,
  description,
  children,
}: any) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description}></meta>
        <meta name="keywords" content={keywords}></meta>
      </Head>

      <Header />

      <div className={styles.container}>
        {children}
      </div>

      <Footer />
    </div>
  );
}

Layout.defaultProps = {
  title: "DJ Events",
  description: "Find The Latest DJ And Other Musical Events",
  keywords: "music, dj, edm, events",
};
