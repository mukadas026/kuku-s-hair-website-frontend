import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import TopPicks from "../components/TopPicks";
import AboutUs from "../components/AboutUs";
import RProducts from "../components/RProducts";
import DiscountSales from "../components/DiscountSales";
import TRProducts from "../components/TRProducts";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="bg-grayStroke pt-10">
        <TopPicks />
      </div>
      <AboutUs />
      <div className="bg-grayStroke pt-10">
        <RProducts />
      </div>
      <DiscountSales />
      <TRProducts />
      <Footer />
    </>
  );
}

export default Home;
