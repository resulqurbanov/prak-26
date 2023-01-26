import React from "react";
import Footer from "../../Components/Footer";
import Browse from "../../Components/HomeComponents/Browse";
import Product from "../../Components/HomeComponents/Product";
import Navbar from "../../Components/Navbar";

function Home() {
  return (
    <>
      <Navbar />
      <Browse />
      <Product />
      <Footer />
    </>
  );
}

export default Home;
