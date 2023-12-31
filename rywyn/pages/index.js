import Head from "next/head";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="text-black">
      <Head>
        <title>Rywyn Resistance Bands</title>
        <link rel="icon" href="images/rywyn-logo-e.jpeg" />
      </Head>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
