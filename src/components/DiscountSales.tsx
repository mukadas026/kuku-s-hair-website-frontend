import React from "react"
import Card3 from "./Card3"
import { useLocation } from "react-router-dom"

const wig6 = require("../assets/wig6.jpg")

function DiscountSales() {
	const routes = useLocation()
	const pathName = routes.pathname
	return (
		<>
			<div className={`flex flex-col justify-center items-center ${pathName === '/' && 'bg-discount'} bg-opacity-20 pt-14 pb-16`}>
				{pathName === "/" ? (
					<>
						<h1 className='text-5xl font-medium font-serif pb-5'>Discount Sales</h1>
						<p className='text-sm pb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
						<button className='text-white bg-primary px-4 mb-10 rounded-full p-2'>Read More</button>
					</>
				) : (
					<>
						<div className='bg-tertiary w-[85%] py-4 text-2xl flex justify-center mx-auto items-center mb-16'>
							<h3 className='text-center font-bold '>Discount Sales</h3>
						</div>
					</>
				)}
				<div className='flex gap-x-16'>
					<Card3 image={wig6} />
					<Card3 image={wig6} />
					<Card3 image={wig6} />
				</div>
			</div>
		</>
	)
}

export default DiscountSales
