import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation , Autoplay } from "swiper";




const OurTopPicks = () => {
  return (
		<>
			{/* CARD SECTION  */}
			<section className="  ">
				{/* Button section */}
				<section className="mt-10  ">
					<div className="flex justify-center ">
						<button className="bg-Main    p-10 text-Dark w-96  font-Poppins py-2 px-4 rounded-md">
							Our Top Picks
						</button>
					</div>
				</section>
				{/* End of button selection */}
				<Swiper
					slidesPerView={1}
					spaceBetween={30}
					loop={true}
					autoplay={{
						delay: 2500,
						disableOnInteraction: false,
					}}
					pagination={{
						clickable: true,
					}}
					navigation={true}
					modules={[Pagination, Navigation, Autoplay]}
					className=" h-cont  mx-auto max-w-6xl   flex justify-center "
				>
					<div className="   ">
						{/* The first Slide  */}
						<SwiperSlide>
							<section className="pb-10   mb-10 ">
								<img
									className=" w-full  pt-10 object-cover object-center  p-10  h-96 lg:h-screen ease-in-out bg-transparent"
									src="https://images.unsplash.com/photo-1621784564114-6eea05b89863?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
									alt="women"
								/>

								<div className="">
									<p className="    text-center  text-lg font  font-Poppins  text-gray-500">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									</p>

									<p class="mt-3 mb-3 space-x-3 leading-5 text-center font-sem-bold text-lg font-Poppins text-gray-500">
										<span class="line-through">&#162;200</span>
										<span class="text-Main text-lg">&#162;200</span>
									</p>
									{/* cart button */}
									<div className="flex mt-3 justify-center">
										<button className="bg-Main text-white rounded-lg   w-60  font-Poppins py-2 px-4 ">
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
									className=" w-full h-96 lg:h-screen  pt-10 object-cover object-center  p-10  ease-in-out bg-transparent"
									src="https://images.unsplash.com/photo-1565470921607-2fabedd2dd86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80"
									alt="women"
								/>

								<div className="">
									<p className="    text-center  text-lg font  font-Poppins  text-gray-500">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									</p>

									<p class="mt-3 mb-3 space-x-3 leading-5 text-center font-sem-bold text-lg font-Poppins text-gray-500">
										<span class="line-through">&#162;200</span>
										<span class="text-Main text-lg">&#162;200</span>
									</p>
									{/* cart button */}
									<div className="flex justify-center">
										<button className="bg-Main text-white rounded-lg   w-60  font-Poppins py-2 px-4">
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
									className=" w-full  pt-10 object-cover object-center  p-10 h-96 lg:h-screen ease-in-out bg-transparent"
									src="https://images.unsplash.com/photo-1557784601-56fafe81d058?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80"
									alt="women"
								/>

								<div className="">
									<p className="    text-center  text-lg font  font-Poppins  text-gray-500">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									</p>
									<p class="mt-3 mb-3 space-x-3 leading-5 text-center font-sem-bold text-lg font-Poppins text-gray-500">
										<span class="line-through">&#162;200</span>
										<span class="text-Main text-lg">&#162;200</span>
									</p>

									{/* cart button */}
									<div className="flex justify-center">
										<button className="bg-Main text-white rounded-lg   w-60  font-Poppins py-2 px-4">
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
									className=" w-full  pt-10 object-cover object-center  p-10  h-96 lg:h-screen ease-in-out bg-transparent"
									src="https://images.unsplash.com/photo-1488282396544-0212eea56a21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
									alt="women"
								/>

								<div className="">
									<p className="    text-center  text-lg font  font-Poppins  text-gray-500">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									</p>
									<p class="mt-3 mb-3 space-x-3 leading-5 text-center font-sem-bold text-lg font-Poppins text-gray-500">
										<span class="line-through">&#162;200</span>
										<span class="text-Main text-lg">&#162;200</span>
									</p>

									{/* cart button */}
									<div className="flex justify-center">
										<button className="bg-Main text-white rounded-lg   w-60  font-Poppins py-2 px-4">
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
									className=" w-full  pt-10 object-cover object-center  p-10  h-96 lg:h-screen ease-in-out bg-transparent"
									src="https://images.unsplash.com/photo-1488282396544-0212eea56a21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
									alt="women"
								/>

								<div className="">
									<p className="    text-center  text-lg font  font-Poppins  text-gray-500">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									</p>
									<p class="mt-3 mb-3 space-x-3 leading-5 text-center font-sem-bold text-lg font-Poppins text-gray-500">
										<span class="line-through">&#162;200</span>
										<span class="text-Main text-lg">&#162;200</span>
									</p>
									{/* cart button */}
									<div className="flex justify-center">
										<button className="bg-Main text-white rounded-lg   w-60  font-Poppins py-2 px-4">
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
									className=" w-full  pt-10 object-cover object-center  p-10  h-96 lg:h-screen ease-in-out bg-transparent"
									src="https://images.unsplash.com/photo-1621784564114-6eea05b89863?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
									alt="women"
								/>

								<div className="">
									<p className="    text-center  text-lg font  font-Poppins  text-gray-500">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									</p>
									<p class="mt-3 mb-3 space-x-3 leading-5 text-center font-sem-bold text-lg font-Poppins text-gray-500">
										<span class="line-through">&#162;200</span>
										<span class="text-Main text-lg">&#162;200</span>
									</p>
									{/* cart button */}
									<div className="flex justify-center">
										<button className="bg-Main text-white rounded-lg   w-60  font-Poppins py-2 px-4">
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
									className=" w-full  pt-10 object-cover object-center  p-10 h-96 lg:h-screen ease-in-out bg-transparent"
									src="https://images.unsplash.com/photo-1621784564114-6eea05b89863?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
									alt="women"
								/>

								<div className="">
									<p class="mt-3 mb-3 space-x-3 leading-5 text-center font-sem-bold text-lg font-Poppins text-gray-500">
										<span class="line-through">&#162;200</span>
										<span class="text-Main text-lg">&#162;200</span>
									</p>

									{/* cart button */}
									<div className="flex justify-center">
										<button className="bg-Main text-white rounded-lg   w-60  font-Poppins py-2 px-4">
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
									className=" w-full  pt-10 object-cover object-center  p-10 h-96 lg:h-screen ease-in-out bg-transparent"
									src="https://images.unsplash.com/photo-1621784564114-6eea05b89863?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
									alt="women"
								/>

								<div className="">
									<p className="    text-center  text-lg font  font-Poppins  text-gray-500">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									</p>
									<div className="">
										<p class="mt-3 mb-3 space-x-3 leading-5 text-center font-sem-bold text-lg font-Poppins text-gray-500">
											<span class="line-through">&#162;200</span>
											<span class="text-Main text-lg">&#162;200</span>
										</p>

										{/* cart button */}
										<div className="flex justify-center">
											<button className="bg-Main text-white rounded-lg   w-60  font-Poppins py-2 px-4">
												Add to cart
											</button>
										</div>
									</div>
								</div>
							</section>
						</SwiperSlide>

						{/* The ninth Slide*/}
						<SwiperSlide>
							<section className="pb-10 p-10 ">
								<img
									className=" w-full  pt-10 object-cover object-center  p-10 h-96 lg:h-screen ease-in-out bg-transparent"
									src="https://images.unsplash.com/photo-1621784564114-6eea05b89863?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
									alt="women"
								/>

								<div className="">
									<p className="    text-center  text-lg font  font-Poppins  text-gray-500">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									</p>
									<p class="mt-3 mb-3 space-x-3 leading-5 text-center font-sem-bold text-lg font-Poppins text-gray-500">
										<span class="line-through">&#162;200</span>
										<span class="text-Main text-lg">&#162;200</span>
									</p>

									{/* cart button */}
									<div className="flex justify-center">
										<button className="bg-Main text-white rounded-lg   w-60  font-Poppins py-2 px-4">
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

