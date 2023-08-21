import React from "react"

function Card4({ image }: any) {
	return (
		<>
			<div className='border-[1.3px] w-64 bg-white'>
				<div>
					<img
						src={image}
						className='w-64 h-60'
						alt='wig1'
					/>
				</div>
				<div className='flex flex-col justify-center gap-y-4'>
					<p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					<div className='flex justify-between items-center mx-auto mb-3  w-11/12'>
						<p className='text-center '>₵2,300</p>
						{/* <p className="text-center text-tertiary">₵2,300</p> */}
						<button className='text-white w-28  bg-tertiary p-2 rounded-lg'>Add To Cart</button>
					</div>
				</div>
			</div>
		</>
	)
}

export default Card4
