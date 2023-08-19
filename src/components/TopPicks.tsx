import React, { useEffect, useRef, useState } from "react"
import Card from "../components/Card"
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai"
import Slider from "../utils/Slider"
const wig1 = require("../assets/wig1.jpg")
const wig2 = require("../assets/wig2.jpg")
const wig3 = require("../assets/wig3.jpg")
const wig4 = require("../assets/wig4.jpg")

function TopPicks() {
	const [scroll, setScroll] = useState(0)

	const scrollRef = useRef<HTMLDivElement>(null)

	const scrollLeft = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		// if(!(scroll <= scrollRef.current?.scrollWidth) || (scroll + 384) > scrollRef.current?.scrollWidth) return
		if (scroll <= 0 || scroll - 384 < 0) return
		setScroll((prev) => prev - 384)
		// scrollRef.current?.scrollLeft +=
	}

	const scrollRight = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		if (
			!scrollRef?.current ||
			!(scroll <= scrollRef.current?.scrollWidth) ||
			scroll + 384 > scrollRef.current?.scrollWidth
		)
			return
		setScroll((prev) => prev + 384)
	}

	const handleScroll = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
		console.log(scrollRef.current?.scrollLeft)
	}
	useEffect(() => {
		console.log(scroll)
		if (scrollRef.current) {
			scrollRef.current.scrollTo({ left: scroll, behavior: "smooth" })
		}
	}, [scroll])

	return (
		// <>
		// 	<div className='flex justify-center flex-col pb-12 w-full '>
		// 		<div className='bg-tertiary w-[85%] py-4 text-2xl flex justify-center mx-auto items-center'>
		// 			<h3 className='text-center font-bold '>Our Top Picks</h3>
		// 		</div>
		// 		<div className='flex gap-x-6 px-2 w-full mx-auto justify-center items-center mt-4'>
		// 			<div
		// 				className='flex h-10 w-10 p-3 rounded-full bg-white cursor-pointer'
		// 				onClick={scrollLeft}
		// 			>
		// 				<AiOutlineLeft color='#FC6DC1' />
		// 			</div>
		// 			<div
		// 				className='flex w-[85%] overflow-auto scrollbar-hidden'
		// 				ref={scrollRef}
		// 				onScroll={handleScroll}
		// 			>
		// 				<div className='flex gap-x-32'>
		// 					<Card image={wig1} />
		// 					<Card image={wig2} />
		// 					<Card image={wig3} />
		// 					<Card image={wig4} />
		// 				</div>
		// 			</div>
		// 			<div
		// 				className='flex h-10 w-10 p-3 rounded-full bg-white cursor-pointer'
		// 				onClick={scrollRight}
		// 			>
		// 				<AiOutlineRight color='#FC6DC1' />
		// 			</div>
		// 		</div>

		// 	</div>
		// </>
		<Slider>
			<Card image={wig1} />
			<Card image={wig2} />
			<Card image={wig3} />
			<Card image={wig4} />
		</Slider>
	)
}

export default TopPicks
