import type { NextPage } from "next";
import Head from "next/head";
import About from "../components/About";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Dapper Developer - IT Company</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="author" content="Dapper Developer - IT Company" />
        <meta name="keywords" content="ReactJS, NextJS, NoodeJS, Android, Kotlin, React Native, Flutter, Laravel" />
        <meta name="description" content="We built futuristic website and mobile application. That help your business to grow like a ROCKET.." />
        <meta charSet="UTF-8" />
        <meta name="theme-color" content="#2D2E32" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta property="og:site_name" content="Dapper Developer - IT Company" />
        <meta property="og:locale" content="en_GB" />
        <title data-rh="true">Dapper Developer - IT Company</title>
        <meta data-rh="true" property="og:type" content="website"/>
        <meta data-rh="true" property="og:title" content="Dapper Developer - IT Company"/>
        <meta data-rh="true" property="og:image" content="/images/logo.png"/>
      </Head>

      {/* Header */}
      <Header />

      <main>
        {/* About */}
        <About />
      </main>

      {/* Footer */}
      <Footer />
    </>
  )
}

export default Home;