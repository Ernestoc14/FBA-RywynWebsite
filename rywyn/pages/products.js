import Head from "next/head";
import Header from "../components/Header";
// import Products from "../components/Products";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="text-black">
      <Head>
        <title>Rywyn Resistance Bands</title>
        <link rel="icon" href="images/rywyn-logo-e.jpeg" />
      </Head>
      <Header />
      {/* <Products /> */}
      <h1>Products</h1>
      <p>dfkjaskfj
        sdafkajfa
      </p>
      <p>dfksajf</p>
      <h1>sdj</h1>
      <h1>Products</h1>
      <p>dfkjaskfj
        sdafkajfa
      </p>
      <p>dfksajf</p>
      <h1>sdj</h1>
      <Footer />
    </div>
  );
}

// This will be the Products Page where the Products will be shown up
