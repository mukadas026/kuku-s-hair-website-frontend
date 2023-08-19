import React from "react"
const wig5 = require("../assets/wig5.jpg")

function AboutUs() {
	return (
		<>
			<div className='bg-about flex flex-col items-center space-y-2 md:flex-row justify-center  pt-6 pb-10'>
				<h1 className='text-4xl font-bold mb-6 text-center md:hidden'>ABOUT US</h1>
				<div className=' flex flex-col order-1 md:w-2/5'>
        <h1 className='text-4xl font-bold mb-6 text-center md:block hidden'>ABOUT US</h1>
					<div className='flex justify-center'>
						<h3 className='text-2xl'>What Makes Us Different?</h3>
					</div>
					<div className='flex justify-center flex-col items-center px-8'>
						<p className='text-justify w-[90%]'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit
							interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per
							conubia nostra, per inceptos himenaeos.
						</p>
						<p className='text-justify w-[90%] pt-5'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit
							interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per
							conubia nostra, per inceptos himenaeos.
						</p>
						<p className='text-justify w-[90%] pt-5'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit
							interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per
							conubia nostra, per inceptos himenaeos.
						</p>
					</div>
				</div>
				<div className=' md:order-1 md:w-2/5'>
					<img
						src={wig5}
						alt='wig5'
						className='w-[450px] h-[350px] rounded-xl mb-4'
					/>
				</div>
			</div>
		</>
	)
}

export default AboutUs
