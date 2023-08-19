import React, { FC, useEffect, useRef, useState } from 'react'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import { MyProps } from '../layouts/Layout'

const Slider:FC<MyProps> = ({children}) => {
    const [scroll, setScroll] = useState(0)

	const scrollRef = useRef<HTMLDivElement>(null)

	const scrollLeft = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		// if(!(scroll <= scrollRef.current?.scrollWidth) || (scroll + 384) > scrollRef.current?.scrollWidth) return 
		if(scroll <= 0 || (scroll - 384) < 0) return
		setScroll((prev) => prev - 384)
		// scrollRef.current?.scrollLeft +=
	}

	const scrollRight = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		if(!scrollRef?.current || !(scroll <= scrollRef.current?.scrollWidth) || (scroll + 384) > scrollRef.current?.scrollWidth) return 
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
    
				<div className='flex gap-x-6 px-2 w-full mx-auto justify-center items-center mt-4'>
					<div
						className='flex h-10 w-10 p-3 rounded-full bg-white cursor-pointer'
						onClick={scrollLeft}
					>
						<AiOutlineLeft color='#FC6DC1' />
					</div>
					<div
						className='flex w-[85%] overflow-auto scrollbar-hidden'
						ref={scrollRef}
						onScroll={handleScroll}
					>
						<div className='flex gap-x-32'>
							{/* <Card image={wig1} />
							<Card image={wig2} />
							<Card image={wig3} />
							<Card image={wig4} /> */}
                            {children}
						</div>
					</div>
					<div
						className='flex h-10 w-10 p-3 rounded-full bg-white cursor-pointer'
						onClick={scrollRight}
					>
						<AiOutlineRight color='#FC6DC1' />
					</div>
				</div>
				
  )
}

export default Slider