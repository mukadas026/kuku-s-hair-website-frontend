import React from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

function Contact() {
	return (
		<>
			<Navbar show={true} />
			<div className='w-full max-w-[1980px] bg-red-500 mx-auto'>
				<div className="w-[75%] mx-auto pt-16">
					<h3 className="text-3xl font-medium text-primary text-center">Contact Us</h3>
					<h2 className="text-5xl font-bold text-center">Get in touch</h2>
					<p className="text-xl text-center">We'd love to hear from you, please fill out this form.</p>

					<form action='' className="mt-16">
						<div className="flex flex-col md:flex-row justify-around gap-x-20">
							<label htmlFor='firstName' className="flex flex-col w-full mx-auto">
								{" "}
								<span>First Name:</span>
								<input
									type='text'
									name='firstName'
									id='firstName'
									placeholder='First Name'
                  className="w-full block h-12 rounded-lg indent-2 ring-2 ring-gray-600 "
								/>
							</label>
							<label htmlFor='lastName' className="flex flex-col w-full mx-auto">
								{" "}
								<span>Last Name:</span>
								<input
									type='text'
									name='lastName'
									id='lastName'
									placeholder='Last Name'
                  className="w-full block h-12 rounded-lg indent-2 ring-2 ring-gray-600 "
								/>
							</label>
						</div>

						<label htmlFor='email' className="flex flex-col w-full mx-auto">
							{" "}
							<span>Email:</span>
							<input
								type='email'
								name='email'
								id='email'
								placeholder='Email'
                className="w-full block h-12 rounded-lg indent-2 ring-2 ring-gray-600 "
							/>
						</label>

						<label htmlFor='phoneNumber' className="flex flex-col w-full mx-auto">
							{" "}
							<span>Phone Number:</span>
							<input
								type='tel'
								name='phoneNumber'
								id='phoneNumber'
								placeholder='Phone Number'
                className="w-full block h-12 rounded-lg indent-2 ring-2 ring-gray-600 "
							/>
						</label>

						<textarea
							name='message'
							placeholder='Leave us a message'
						></textarea>
					</form>
				</div>
			</div>
			<Footer />
		</>
	)
}

export default Contact
