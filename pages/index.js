import Head from "next/head";
import ProductListing from "@components/ProductListing";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Search from "@components/Search";
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-dom';
import { getProductList } from "@api/getProductList";

export default function Home({ products }) {
  return (
    <>
      <Head>
        <title>LifeFitness</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Search />
      <main>
        <ul className="product-grid">
          {products.map((p, index) => {
            return <ProductListing key={`product${index}`} product={p.node} />;
          })}
        </ul>
      </main>

      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const products = await getProductList();
  return {
    props: {
      products,
    },
  };
}
