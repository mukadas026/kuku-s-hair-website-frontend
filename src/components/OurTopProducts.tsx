import React from "react"
import Card4 from "./Card4"
const wig1 = require("../assets/wig1.jpg")

const OurTopProducts = () => {
	return (
		<>
			<div className='bg-tertiary w-[85%] py-4 text-2xl flex justify-center mx-auto items-center'>
				<h3 className='text-center font-bold '>Our Top Picks</h3>
			</div>
			<div className='w-[85%] flex flex-wrap justify-center mt-12 gap-6 px-10 mx-auto'>
				<Card4 image={wig1} />
				<Card4 image={wig1} />
				<Card4 image={wig1} />
				<Card4 image={wig1} />
				<Card4 image={wig1} />
				<Card4 image={wig1} />
				<Card4 image={wig1} />
				<Card4 image={wig1} />
			</div>
		</>
	)
}

export default OurTopProducts
