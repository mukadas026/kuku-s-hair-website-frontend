import { SVGProps, useState } from "react"
import { RadioGroup } from "@headlessui/react"

import { airgo, mastercard, mtn, visa, vodafone } from "../../assets/paymentMethods/index"

export interface IPaymentMethod {
	name: string
	value: string
	description: string
	images: {
		image: string
		name: string
	}[]
}

const paymentMethods: IPaymentMethod[] = [
	{
		name: "Payment on Delivery",
		value: "on-delivery",
		description: "Pay cash to delivery on collecting ordered product",
		images: [],
	},
	{
		name: "Mobile Money",
		value: "mobile-money",
		description: "You can make payment using mobile money",
		images: [
			{ name: "airtelTigo", image: airgo },
			{ name: "mtn", image: mtn },
			{ name: "vodafone", image: vodafone },
		],
	},
	{
		name: "Credit Card",
		value: "credit-card",
		description: "Make payment using a credit card",
		images: [
			{ name: "visa", image: visa },
			{ name: "mastercard", image: mastercard },
		],
	},
]

export default function PaymentMethods({ setPaymentMethod }: { setPaymentMethod: Function }) {
	const [selected, setSelected] = useState<IPaymentMethod | null>(null)

	const handleSelect = (e: IPaymentMethod) => {
		// console.log(selected)

		setSelected(e)
		setPaymentMethod(e)
	}

	return (
		<div className='w-full px-4 '>
			<div className='w-full max-w-md'>
				<RadioGroup
					value={selected}
					onChange={handleSelect}
				>
					<RadioGroup.Label className='sr-only'>Payment Methods</RadioGroup.Label>
					<div className='space-y-4'>
						{paymentMethods.map((plan) => (
							<RadioGroup.Option
								key={plan.name}
								value={plan}
								className={({ active, checked }) =>
									`${
										active
											? "ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-primary"
											: ""
									}
                  ${checked ? "text-black" : "bg-white"}
                    relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none  transition-all`
								}
							>
								{({ active, checked }) => (
									<div className='flex items-center gap-x-4'>
										<div
											className={`${
												checked ? "bg-primary ring-primary" : "bg-primary/0 ring-gray-400"
											} w-4 h-4 block border-4 border-white ring-1 rounded-full`}
										></div>
										<div className='flex w-full items-center justify-between'>
											<div className='flex items-center'>
												<div className='text-sm'>
													<RadioGroup.Label
														as='p'
														className={`font-medium  ${checked ? "" : "text-gray-900"}`}
													>
														{plan.name}
													</RadioGroup.Label>
													<RadioGroup.Description
														as='span'
														className={`inline ${checked ? "" : "text-gray-500"}`}
													>
														{plan.description}
													</RadioGroup.Description>
													<div className='flex mt-2 gap-x-2'>
														{plan.images.map((img, i) => (
															<div className='w-10 p-2 flex items-center justify-center rounded-lg border border-1 border-gray-400 '>
																<img
																	src={img.image}
																	alt={img.name}
																/>
															</div>
														))}
													</div>
												</div>
											</div>
										</div>
									</div>
								)}
							</RadioGroup.Option>
						))}
					</div>
				</RadioGroup>
			</div>
		</div>
	)
}
