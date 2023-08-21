import React, { FC, Fragment } from "react"
import Layout from "../layouts/Layout"
import wig9 from "../assets/wig9.png"
import { AiOutlineShoppingCart } from "react-icons/ai"
import Button from "../components/Button"

const Product = () => {
	type CartType = {
		name: string
		details: string
		image: string
		price: number
		quantity: number
		id: string
	}[]

	const item: CartType = [
		{
			name: "Wig1",
			details: "This is the first item in the cart",
			image: wig9,
			price: 500,
			quantity: 50,
			id: "510",
		},
	]

	// const cart = cartItems.map((item) => <></>)
	const handleClick = () => {}
	const addToCart = () => {}

	return (
		<Layout>
			{/* <Fragment key={item.id}> */}
            <div className='w-[85%] min-h-[400px] shadow-lg rounded-lg mx-auto my-8 flex flex-col gap-y-8 items-center justify-center md:flex-row md:gap-x-32 md:px-16'>

			<div className='w-3/4 space-y-4 mx-auto md:w-2/4 md:flex md:flex-col'>
				<img
					src={item[0].image}
					alt=''
					className='rounded lg:w-96'
				/>
				<div></div>
				<p className=''>SHARE THIS PRODUCT</p>
				<div></div>
			</div>
			<div className='w-3/4 mx-auto space-y-8'>
				<div className=''>
					<h2 className='text-4xl font-medium'>{item[0].name}</h2>
					<p className='mb-4 border-b pb-4'>{item[0].details}</p>
					<p className='text-3xl font-bold'>GHC {item[0].price}</p>
					<p className='mt-4'>{item[0].details}</p>
				</div>
				<div>
					<div className='border-b pb-8 mb-4'>
						<Button
							text='Add to Cart'
							handler={addToCart}
							width='full'
							Icon={AiOutlineShoppingCart}
						/>
					</div>
					<p className='pb-8'>DISCOUNTED PRICE</p>
				</div>
			</div>
</div>			{/* </Fragment> */}
		</Layout>
	)
}

export default Product
