import React from "react";
import Head from "next/head";
import styles from '@/styles/Layout.module.css'
import Header from "./Header";
import Footer from "./Footer";
import Showcase from "./Showcase";
import { useRouter } from "next/router";

export default function Layout({
  title,
  keywords,
  description,
  children,
}: any) {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description}></meta>
        <meta name="keywords" content={keywords}></meta>
      </Head>

      <Header />


      {router.pathname === '/' && <Showcase />}

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
