import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";




const OurTopPicks = () => {
  return (
		<>
			{/* Button section */}
			<section className="mt-5  ">
				<div className="flex justify-center ">
					<button className="bg-Main  text-Dark w-96  font-Poppins py-2 px-4 rounded-sm">
						Our Top Picks
					</button>
				</div>
			</section>
			{/* End of button selection */}

			{/* CARD SECTION  */}
			<section className="  ">
				<Swiper
					slidesPerView={1}
					spaceBetween={30}
					loop={true}
					pagination={{
						clickable: true,
					}}
					navigation={true}
					modules={[Pagination, Navigation]}
					className="   mx-auto max-w-7xl  flex justify-center "
				>
					<div className="  bg-red-500 ">
						{/* The first Slide  */}
						<SwiperSlide>
							<section className="pb-10  mb-10 ">
								<img
									className=" w-full  pt-10 object-cover object-center  p-10  h-screen ease-in-out bg-transparent"
									src="https://images.unsplash.com/photo-1621784564114-6eea05b89863?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
									alt="women"
								/>

								<div className="">
									<p className="    text-center  text-lg font  font-Poppins  text-gray-500">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									</p>
									<p className="mt-2 font-normal leading-5  text-center  font-Poppins text-md text-gray-500 ">
										200
									</p>

									{/* cart button */}
									<div className="flex justify-center">
										<button className="bg-Main  text-Dark w-96  font-Poppins py-2 px-4 rounded-sm">
											Add to cart
										</button>
									</div>
								</div>
							</section>
						</SwiperSlide>

						{/*  The second Slide*/}
						<SwiperSlide>
							<section className="pb-10 p-10 ">
								<img
									className=" w-full  pt-10 object-cover object-center  p-10  h-screen ease-in-out bg-transparent"
									src="https://images.unsplash.com/photo-1565470921607-2fabedd2dd86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80"
									alt="women"
								/>

								<div className="">
									<p className="    text-center  text-lg font  font-Poppins  text-gray-500">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									</p>
									<p className="mt-2 font-normal leading-5  text-center  font-Poppins text-md text-gray-500 ">
										200
									</p>

									{/* cart button */}
									<div className="flex justify-center">
										<button className="bg-Main  text-Dark w-96  font-Poppins py-2 px-4 rounded-sm">
											Add to cart
										</button>
									</div>
								</div>
							</section>
						</SwiperSlide>

						{/* The third Slide*/}
						<SwiperSlide>
							<section className="pb-10 p-10 ">
								<img
									className=" w-full  pt-10 object-cover object-center  p-10  h-screen ease-in-out bg-transparent"
									src="https://images.unsplash.com/photo-1557784601-56fafe81d058?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80"
									alt="women"
								/>

								<div className="">
									<p className="    text-center  text-lg font  font-Poppins  text-gray-500">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									</p>
									<p className="mt-2 font-normal leading-5  text-center  font-Poppins text-md text-gray-500 ">
										200
									</p>

									{/* cart button */}
									<div className="flex justify-center">
										<button className="bg-Main  text-Dark w-96  font-Poppins py-2 px-4 rounded-sm">
											Add to cart
										</button>
									</div>
								</div>
							</section>
						</SwiperSlide>

						{/* The fourth Slide*/}
						<SwiperSlide>
							<section className="pb-10 p-10 ">
								<img
									className=" w-full  pt-10 object-cover object-center  p-10  h-screen ease-in-out bg-transparent"
									src="https://images.unsplash.com/photo-1488282396544-0212eea56a21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
									alt="women"
								/>

								<div className="">
									<p className="    text-center  text-lg font  font-Poppins  text-gray-500">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									</p>
									<p className="mt-2 font-normal leading-5  text-center  font-Poppins text-md text-gray-500 ">
										200
									</p>

									{/* cart button */}
									<div className="flex justify-center">
										<button className="bg-Main  text-Dark w-96  font-Poppins py-2 px-4 rounded-sm">
											Add to cart
										</button>
									</div>
								</div>
							</section>
						</SwiperSlide>

						{/* The fifth Slide*/}
						<SwiperSlide>
							<section className="pb-10 p-10 ">
								<img
									className=" w-full  pt-10 object-cover object-center  p-10  h-screen ease-in-out bg-transparent"
									src="https://images.unsplash.com/photo-1488282396544-0212eea56a21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
									alt="women"
								/>

								<div className="">
									<p className="    text-center  text-lg font  font-Poppins  text-gray-500">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									</p>
									<p className="mt-2 font-normal leading-5  text-center  font-Poppins text-md text-gray-500 ">
										200
									</p>

									{/* cart button */}
									<div className="flex justify-center">
										<button className="bg-Main  text-Dark w-96  font-Poppins py-2 px-4 rounded-sm">
											Add to cart
										</button>
									</div>
								</div>
							</section>
						</SwiperSlide>

						{/* 
                       
                          The sixth Slide
                       */}
						<SwiperSlide>
							<section className="pb-10 p-10 ">
								<img
									className=" w-full  pt-10 object-cover object-center  p-10  h-screen ease-in-out bg-transparent"
									src="https://images.unsplash.com/photo-1621784564114-6eea05b89863?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
									alt="women"
								/>

								<div className="">
									<p className="    text-center  text-lg font  font-Poppins  text-gray-500">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									</p>
									<p className="mt-2 font-normal leading-5  text-center  font-Poppins text-md text-gray-500 ">
										200
									</p>

									{/* cart button */}
									<div className="flex justify-center">
										<button className="bg-Main  text-Dark w-96  font-Poppins py-2 px-4 rounded-sm">
											Add to cart
										</button>
									</div>
								</div>
							</section>
						</SwiperSlide>

						{/* The seventh Slide*/}
						<SwiperSlide>
							<section className="pb-10 p-10 ">
								<img
									className=" w-full  pt-10 object-cover object-center  p-10  h-screen ease-in-out bg-transparent"
									src="https://images.unsplash.com/photo-1621784564114-6eea05b89863?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
									alt="women"
								/>

								<div className="">
									<p className="    text-center  text-lg font  font-Poppins  text-gray-500">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									</p>
									<p className="mt-2 font-normal leading-5  text-center  font-Poppins text-md text-gray-500 ">
										200
									</p>

									{/* cart button */}
									<div className="flex justify-center">
										<button className="bg-Main  text-Dark w-96  font-Poppins py-2 px-4 rounded-sm">
											Add to cart
										</button>
									</div>
								</div>
							</section>
						</SwiperSlide>

						{/* The eighth Slide*/}
						<SwiperSlide>
							<section className="pb-10 p-10 ">
								<img
									className=" w-full  pt-10 object-cover object-center  p-10  h-screen ease-in-out bg-transparent"
									src="https://images.unsplash.com/photo-1621784564114-6eea05b89863?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
									alt="women"
								/>

								<div className="">
									<p className="    text-center  text-lg font  font-Poppins  text-gray-500">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									</p>
									<p className="mt-2 font-normal leading-5  text-center  font-Poppins text-md text-gray-500 ">
										200
									</p>

									{/* cart button */}
									<div className="flex justify-center">
										<button className="bg-Main  text-Dark w-96  font-Poppins py-2 px-4 rounded-sm">
											Add to cart
										</button>
									</div>
								</div>
							</section>
						</SwiperSlide>

						{/* The ninth Slide*/}
						<SwiperSlide>
							<section className="pb-10 p-10 ">
								<img
									className=" w-full  pt-10 object-cover object-center  p-10  h-screen ease-in-out bg-transparent"
									src="https://images.unsplash.com/photo-1621784564114-6eea05b89863?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
									alt="women"
								/>

								<div className="">
									<p className="    text-center  text-lg font  font-Poppins  text-gray-500">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									</p>
									<p className="mt-2 font-normal leading-5  text-center  font-Poppins text-md text-gray-500 ">
										200
									</p>

									{/* cart button */}
									<div className="flex justify-center">
										<button className="bg-Main  text-Dark w-96  font-Poppins py-2 px-4 rounded-sm">
											Add to cart
										</button>
									</div>
								</div>
							</section>
						</SwiperSlide>
					</div>
				</Swiper>
			</section>
			{/*  EMD OF A CARD SECTION  */}
		</>
	);
}

export default OurTopPicks

