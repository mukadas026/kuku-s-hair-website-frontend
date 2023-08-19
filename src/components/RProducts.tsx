import React from "react"
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai"
import Card2 from "./Card2"
import Slider from "../utils/Slider"
const wig6 = require("../assets/wig6.jpg")

function RProducts() {
	return (
		<>
			<div className='flex justify-center flex-col pb-12'>
				<div className='bg-tertiary w-[85%] py-4 text-2xl flex justify-center mx-auto items-center'>
					<h3 className='text-center font-bold '>Our Recent Products</h3>
				</div>

				<Slider>
					<Card2 image={wig6} />
					<Card2 image={wig6} />
					<Card2 image={wig6} />
					<Card2 image={wig6} />
				</Slider>

				{/* <div className='flex justify-center mt-10 gap-x-2'>
					<div className='h-2 w-2 rounded-full bg-gray-500'></div>
					<div className='h-2 w-2 rounded-full bg-gray-400'></div>
					<div className='h-2 w-2 rounded-full bg-gray-400'></div>
				</div> */}
			</div>
		</>
	)
}

export default RProducts
