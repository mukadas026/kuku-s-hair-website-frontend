import React from "react";
import Navbar from "../components/Navbar";
import { CenterLoader } from "../utils/loaders";
import ShopItems from "../sections/ShopItems";
import Footer from "../components/Footer";

function Shop() {
  return (
    <>
      <Navbar show={true} />
      <div className="bg-loginbg h-full">
        <div>
          <img src="" alt="slides"></img>
        </div>
        <React.Suspense fallback={CenterLoader()}>
          <ShopItems />
        </React.Suspense>
      </div>
      <Footer />
    </>
  );
}

export default Shop;
