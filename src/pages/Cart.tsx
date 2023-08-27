import React, { FC, Fragment } from "react"
import Layout from "../layouts/Layout"
import OurTopProducts from "../components/OurTopProducts"
import DiscountSales from "../components/DiscountSales"
import NewArrivals from "../components/NewArrivals"

import { AiOutlineShoppingCart } from "react-icons/ai"
import { ImBin2 } from "react-icons/im"
import Button from "../components/Button"
import { useNavigate } from "react-router-dom"

import wig9 from "../assets/wig9.png"
import MayAlsoLike from "../components/MayAlsoLike"
import { CartType } from "../types/types"



const Cart: FC = () => {

	const cartItems: CartType = [
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
		// {
		// 	name: "Wig1",
		// 	details: "This is the first item in the cart",
		// 	image: wig9,
		// 	price: 500,
		// 	quantity: 50,
		// 	id: "510",
		// },
	]

	const cart = cartItems.map((item) => <></>)
	const handleClick = () => {}
	const addToCart = () => {}

	const navigate = useNavigate()
	return (
		<Layout>
			<>
				{cartItems.length === 0 ? (
					<div className='w-[85%] min-h-[400px] shadow-lg rounded-lg mx-auto my-8 flex flex-col gap-y-8 items-center justify-center'>
						<div className='text-6xl rounded-full p-4 flex items-center justify-center text-primary bg-tertiary'>
							<AiOutlineShoppingCart className='' />
						</div>
						<h2 className='text-2xl font-semibold'>Your cart is empty</h2>
						<p>Added products will appear in the cart</p>
						<Button
							text='Go to shop'
							handler={() => navigate("/shop")}
						/>
					</div>
				) : (
					<div className='w-[85%] min-h-fit  shadow-lg rounded-lg mx-auto my-8 flex flex-col gap-y-8 items-center justify-center md:flex-row md:gap-x-32 md:px-16'>
						<div className='w-full'>
							{cartItems.map((item) => (
								<div
									key={item.id}
									className='flex w-full items-center border-b py-2 '
								>
									<div className='flex w-3/4 justify-center items-center'>
										<img
											src={wig9}
											alt=''
											className='w-28 lg:w-40 rounded'
										/>
										<div className='flex flex-col items-center md:items-start md:ml-2 md:h-40 md:justify-around'>
											<h2 className='text-xl md:text-2xl md:font-medium font-semibold'>
												{item.name}
											</h2>
											<p className='hidden lg:block text-sm text-gray-500'>
												{item.details.slice(0, 50)}
												{item.details.length > 50 && "..."}
											</p>
											<button className='text-xs md:text-sm text-primary flex items-start gap-x-1'>
												<ImBin2 />{" "}
												<span>
													Remove <span className='md:hidden lg:inline'>Item</span>
												</span>
											</button>
										</div>
									</div>
									<div className='flex flex-col items-center gap-y-2 md:h-40 md:justify-around'>
										<div className='flex flex-col items-center'>
											<p className='text-sm font-semibold'>GHC {item.price}</p>
											<p className='text-xs line-through text-gray-500/80'>GHC 200</p>
										</div>
										<div className='flex gap-x-2 items-center '>
											<button className='bg-primary p-2 py-0 rounded text-white text-xs lg:text-lg md:px-3'>
												-
											</button>
											<p className='text-xs'>1</p>
											<button className='bg-primary p-2 py-0 rounded text-white text-xs lg:text-lg md:px-3'>
												+
											</button>
										</div>
									</div>
								</div>
							))}
						</div>
						<div className='w-3/4 space-y-2 py-2 md:place-self-start md:w-[35%] lg:w-2/4'>
							<h3 className='text-xl font-semibold '>Summary</h3>
							<div className='flex items-center justify-between md:text-xs lg:text-lg'>
								<p>Subtotal</p>
								<p className='font-medium underline decoration-double'>GHC 2000</p>
							</div>
							{/* <div className="flex justify-center"> */}
							<Button
								text='Checkout'
								width='full'
								handler={() => navigate('/checkout')}
							/>
							{/* </div> */}
						</div>
					</div>
				)}
				{cartItems.length > 0 && <MayAlsoLike />}
				{cartItems.length < 1 && <OurTopProducts />}
				{cartItems.length < 2 && <DiscountSales />}
				{cartItems.length < 1 && <NewArrivals />}
			</>
		</Layout>
	)
}

export default Cart
