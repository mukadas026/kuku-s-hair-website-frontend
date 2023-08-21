import React from "react"
import Layout from "../layouts/Layout"

function Contact() {
	return (
		<Layout>
			<div className='w-full max-w-[1980px] mx-auto'>
				<div className='w-[80%] md:w-[65%] lg:w-[50%] mx-auto py-16'>
					<h3 className='text-3xl font-medium text-primary text-center'>Contact Us</h3>
					<h2 className='text-5xl font-bold text-center'>Get in touch</h2>
					<p className='text-xl text-center'>We'd love to hear from you, please fill out this form.</p>

					<form
						action=''
						className='mt-16 space-y-4'
					>
						<div className='flex flex-col md:flex-row justify-around gap-x-20 space-y-4 md:space-y-0'>
							<label
								htmlFor='firstName'
								className='flex flex-col w-full mx-auto gap-y-2'
							>
								{" "}
								<span>First Name:</span>
								<input
									type='text'
									name='firstName'
									id='firstName'
									placeholder='First Name'
									className='w-full block h-12 rounded-lg indent-2 ring-2 ring-gray-600 '
								/>
							</label>
							<label
								htmlFor='lastName'
								className='flex flex-col w-full mx-auto gap-y-2'
							>
								{" "}
								<span>Last Name:</span>
								<input
									type='text'
									name='lastName'
									id='lastName'
									placeholder='Last Name'
									className='w-full block h-12 rounded-lg indent-2 ring-2 ring-gray-600 '
								/>
							</label>
						</div>

						<label
							htmlFor='email'
							className='flex flex-col w-full mx-auto gap-y-2'
						>
							{" "}
							<span>Email:</span>
							<input
								type='email'
								name='email'
								id='email'
								placeholder='Email'
								className='w-full block h-12 rounded-lg indent-2 ring-2 ring-gray-600 '
							/>
						</label>

						<label
							htmlFor='phoneNumber'
							className='flex flex-col w-full mx-auto gap-y-2'
						>
							{" "}
							<span>Phone Number:</span>
							<input
								type='tel'
								name='phoneNumber'
								id='phoneNumber'
								placeholder='Phone Number'
								className='w-full block h-12 rounded-lg indent-2 ring-2 ring-gray-600 '
							/>
						</label>
						<label
							htmlFor='phoneNumber'
							className='flex flex-col w-full mx-auto gap-y-2'
						>
							<span>Message</span>
							<textarea
								name='message'
								placeholder='Leave us a message'
								className='w-full block h-40 rounded-lg indent-2 ring-2 ring-gray-600'
							></textarea>
						</label>

						<div className='w-full'>
							<button className='w-full h-12 bg-primary rounded-lg font-semibold text-white mt-8 '>
								Send Message
							</button>
						</div>
					</form>
				</div>
			</div>
		</Layout>
	)
}

export default Contact
