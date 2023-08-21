import React from "react"
import { CenterLoader } from "../utils/loaders"
import ShopItems from "../sections/ShopItems"
import Layout from "../layouts/Layout"

// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";
// import Slider from 'react-slick'

const slide1 = require("../assets/slide1.png")
// console.log(Slider)
function Shop() {
	return (
		<Layout>
			<div className='bg-loginbg w-full'>
				<div className='w-full md:w-4/5 mx-auto pt-12'>
					<img
						src={slide1}
						alt='slides'
						className='aspect-video w-full'
					></img>
				</div>
				<React.Suspense fallback={CenterLoader()}>
					<ShopItems />
				</React.Suspense>
			</div>
		</Layout>
	)
}

export default Shop
