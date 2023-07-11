import React from 'react'
import Card2 from './Card2'
const wig2 = require("../assets/wig2.jpg")


const MayAlsoLike = () => {
  return (
    <>
			<div className='bg-tertiary w-[85%] py-4 text-2xl flex justify-center mx-auto items-center'>
				<h3 className='text-center font-bold '>You May Also Like</h3>
			</div>
			<div className='w-[85%] flex flex-wrap justify-center mt-12 gap-6 px-10 mx-auto'>
				<Card2 image={wig2} />
				<Card2 image={wig2} />
				<Card2 image={wig2} />
			</div>
		</>
  )
}

export default MayAlsoLike