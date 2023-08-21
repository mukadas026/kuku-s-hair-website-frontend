import React from "react";
import Card2 from "./Card2";
const wig6 = require("../assets/wig6.jpg");

function TRProducts() {
  return (
    <>
      <div className="flex justify-center flex-col pb-12 pt-10">
        <div className="bg-tertiary w-[85%] py-4 text-2xl flex justify-center mx-auto items-center">
          <h3 className="text-center font-bold ">Top Rated Products</h3>
        </div>
        <div className="flex gap-x-6 justify-center items-center mt-12 flex-wrap">
          <Card2 image={wig6} />
          <Card2 image={wig6} />
          <Card2 image={wig6} />
          <Card2 image={wig6} />
          <Card2 image={wig6} />
          <Card2 image={wig6} />
          <Card2 image={wig6} />
          <Card2 image={wig6} />
          <Card2 image={wig6} />
          <Card2 image={wig6} />
          <Card2 image={wig6} />
          <Card2 image={wig6} />
        </div>
      </div>
    </>
  );
}

export default TRProducts;
