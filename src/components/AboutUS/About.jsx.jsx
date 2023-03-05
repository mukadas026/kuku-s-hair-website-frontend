import React from 'react'

const About = () => {

const WomanHair = "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80"

  return (
		<>
			<section>
				<section className="bg-about_bg ">
					<div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
						<div className="font-light text-gray-500 sm:text-lg">
							<h1 className="text-5xl  mb-4 font-Poppins text-center tracking-tight font-extrabold text-gray-900">
								About Us
							</h1>
							<h2 className="mb-4 font-Poppins  text-center text-2xl tracking-tight font-extrabold text-gray-900">
								What Makes Us Different?
							</h2>
							<p className="mb-4 font-Poppins">
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Aspernatur commodi aut placeat libero, aliquam tenetur similique
								odit debitis voluptatum laudantium laborum optio, ex omnis
								consequuntur voluptate error, rem doloremque quod! Lorem ipsum
								dolor sit amet consectetur adipisicing elit. Nemo veniam
								provident expedita voluptatibus aperiam quidem natus. Cumque
								consectetur reiciendis quidem esse laborum, ducimus animi iusto
								iure voluptas dolorem odit quibusdam.
							</p>
						</div>

						<img
							className="mt-4 w-full lg:mt-10 rounded-lg"
							src={WomanHair}
							alt="office content 2"
						/>
					</div>
				</section>
			</section>
		</>
	);
}

export default About

