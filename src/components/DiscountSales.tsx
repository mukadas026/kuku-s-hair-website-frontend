import React from "react";
import Card3 from "./Card3";
const wig6 = require("../assets/wig6.jpg");

function DiscountSales() {
  return (
    <>
      <div className="flex flex-col justify-center items-center bg-discount bg-opacity-20 pt-14 pb-16">
        <h1 className="text-5xl font-medium font-serif pb-5">Discount Sales</h1>
        <p className="text-sm pb-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <button className="text-white bg-primary px-4 mb-10 rounded-full p-2">
          Read More
        </button>
        <div className="flex gap-x-16">
          <Card3 image={wig6} />
          <Card3 image={wig6} />
          <Card3 image={wig6} />
        </div>
      </div>
    </>
  );
}

export default DiscountSales;
