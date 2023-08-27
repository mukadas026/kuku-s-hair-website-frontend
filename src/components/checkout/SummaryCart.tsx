import React from "react"
import { CartType } from "../../types/types"
import wig9 from "../../assets/wig9.png"


const cartItems: CartType = [
	{
		name: "Wig1",
		details: "This is the first item in the cart",
		image: wig9,
		price: 500,
		quantity: 50,
		id: "510",
	},
	{
		name: "Wig1",
		details: "This is the first item in the cart",
		image: wig9,
		price: 500,
		quantity: 50,
		id: "510",
	},
	{
		name: "Wig1",
		details: "This is the first item in the cart",
		image: wig9,
		price: 500,
		quantity: 50,
		id: "510",
	},
	// {
	// 	name: "Wig1",
	// 	details: "This is the first item in the cart",
	// 	image: wig9,
	// 	price: 500,
	// 	quantity: 50,
	// 	id: "510",
	// },
	// {
	// 	name: "Wig1",
	// 	details: "This is the first item in the cart",
	// 	image: wig9,
	// 	price: 500,
	// 	quantity: 50,
	// 	id: "510",
	// },
]

const SummaryCart = () => {
	return (
		<>
			<div className='flex justify-between items-center mb-4'>
				<h3 className='font-medium'>Cart(3)</h3>
				<button className='text-primary'>Edit</button>
			</div>
			<div className='border-b pb-8 mb-8'>
				{cartItems.map((item, i) => (
					<div className="flex justify-around border-t pt-4 mb-4">
						<div className="w-1/5">
							<img
								src={item.image}
								alt=''
							/>
						</div>
						<div>
							<h4>{item.name}</h4>
							<p>{item.details}</p>
							<div className="flex justify-between">
								<p className="text-line">Qty: {item.quantity}</p>
                                <p className="text-primary text-lg">GHC {item.quantity * item.price}</p>
							</div>
						</div>
					</div>
				))}
			</div>
		</>
	)
}

export default SummaryCart
