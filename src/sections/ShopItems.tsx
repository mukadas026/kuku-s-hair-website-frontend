import React from "react"
import Card4 from "../components/Card4"
import OurTopProducts from "../components/OurTopProducts"
import Card3 from "../components/Card3"
import Card2 from "../components/Card2"

const wig8 = require("../assets/wig3.jpg")
const wig2 = require("../assets/wig2.jpg")


function ShopItems() {
	return (
		<div className='w-full mt-32 pb-32 space-y-16'>
			<OurTopProducts />
      {/* Discount Sales */}
			<div className='bg-tertiary w-[85%] py-4 text-2xl flex justify-center mx-auto items-center'>
				<h3 className='text-center font-bold '>Discount Sales</h3>
			</div>
			<div className='w-[85%] flex flex-wrap justify-center mt-12 gap-6 px-10 mx-auto'>
				<Card3 image={wig8} />
				<Card3 image={wig8} />
				<Card3 image={wig8} />
			</div>

      {/* Our New Arrivals */}
      <div className='bg-tertiary w-[85%] py-4 text-2xl flex justify-center mx-auto items-center'>
				<h3 className='text-center font-bold '>Our New Arrivals</h3>
			</div>
			<div className='w-[85%] flex flex-wrap justify-center mt-12 gap-6 px-10 mx-auto'>
				<Card2 image={wig2} />
				<Card2 image={wig2} />
				<Card2 image={wig2} />
			</div>
		</div>
	)
}

export default ShopItems
