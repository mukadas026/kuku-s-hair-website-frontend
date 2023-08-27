import { useState } from "react"
import Layout from "../../layouts/Layout"
import { IPaymentMethod } from "../../components/checkout/PaymentMethods"
import SummaryCart from "../../components/checkout/SummaryCart"
import PriceSummary from "../../components/checkout/PriceSummary"
import Button from "../../components/Button"

const Delivery = () => {
	return (
		<div>
			<h3>Payment on Delivery</h3>
			<p>Pay cash to delivery worker on collecting ordered product</p>
		</div>
	)
}

const MobileNumber = ({ paymentMethod }: { paymentMethod: IPaymentMethod | null }) => {
	const [selectedImage, setSelectedImage] = useState("")

	return (
		<div className="space-y-2">
			<h3 className="font-medium text-lg">{paymentMethod?.name}</h3>
			<p>Select service provider</p>
			<div className="flex items-center gap-x-4">
				{paymentMethod?.images.map((image) => (
					<button onClick={() => setSelectedImage(image.name)} className="block w-14 p-2 border border-line rounded-lg">
						<img
							src={image.image}
							alt={image.name}
						/>
					</button>
				))}
			</div>
			<div className="flex flex-col gap-y-2 w-1/2">
				<label
					htmlFor=''
					id='momo-number'
				>Account Number*</label>
				<input
					type='text'
					id='momo-number'
					placeholder='Enter Mobile Number'
					className="rounded-lg border-0 outline-0 ring-1 ring-line w-"
				/>
			</div>
		</div>
	)
}

const CardInfo = ({ paymentMethod }: { paymentMethod: IPaymentMethod | null }) => {
	return (
		<div className="space-y-4">
			<h3 className="font-medium text-lg">{paymentMethod?.name}</h3>
			<p>Provide card details to complete payment</p>
			<div className="flex gap-x-4">
				{paymentMethod?.images.map((image) => (
					<div className="w-14 flex items-center justify-center">
						<img
							src={image.image}
							alt={image.name}
						/>
					</div>
				))}
			</div>
			<div className="space-y-4">
				<input
					type='text'
					placeholder='Credit Card Number'
					className=" rounded-lg border-0 outline-0 ring-1 ring-line w-full"
				/>
				<div className="flex gap-x-8">
					<div className="flex flex-col justify-center gap-y-2 flex-1">
						<label htmlFor='expiry-date'>Expiry Date</label>
						<input
							type='text'
							placeholder='mm/yy'
							id='expiry-date'
							className="block rounded-lg border-0 outline-0 ring-1 ring-line w-full"
						/>
					</div>
					<div  className="flex flex-col justify-center gap-y-2 flex-1">
						<label htmlFor='cvv'>CVV</label>
						<input
							type='text'
							placeholder='xxx'
							id='cvv'
							className="block rounded-lg border-0 outline-0 ring-1 ring-line w-full"
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

const ConfirmCheckout = ({ paymentMethod }: { paymentMethod: IPaymentMethod | null }) => {
	// const [paymentMethod, setPaymentMethod] = useState<string | null>(null)
	// const navigate = useNavigate()
	// console.log(paymentMethod)
	const goToConfirm = () => {
		if (paymentMethod === null) return
		// navigate(`${paymentMethod}`)
	}

    interface IMapMethod {
        "on-delivery" : JSX.Element
		"mobile-money" : JSX.Element
		"credit-card" : JSX.Element
    }

    interface IkeyedMap {
        [key : string] : JSX.Element
    }

	const mapMethod : IkeyedMap = {
		"on-delivery": <Delivery />,
		"mobile-money": <MobileNumber paymentMethod={paymentMethod} />,
		"credit-card": <CardInfo paymentMethod={paymentMethod} />,
	}

    const mapped = paymentMethod !== null ? mapMethod[paymentMethod?.value] : null

	return (
		<Layout>
			<main className='w-[95%] mx-auto flex flex-col md:flex-row py-16 justify-around'>
				<div className='w-full md:w-3/5 space-y-4 md:border-r md:pr-12 box-border mb-8'>
					<h3 className='text-line'>CHECKOUT</h3>
					<div className='w-full'>
						<div className='w-full flex items-center justify-between border-b border-b-1 border-grayStroke pb-4 mb-4'>
							<h3 className='font-medium'>ADDRESS DETAILS</h3>
							<button className='text-primary'>CHANGE ADDRESS</button>
						</div>
						<div className='space-y-[1px] text-line'>
							<p className='text-black text-lg '>
								<b>Isaac Osei Anane</b>
							</p>
							<p>University of Ghana</p>
							<p>Commonwealth Hall</p>
							<p>+23370892348</p>
						</div>
					</div>
					<div className='space-y-4 border-b border-b-1 border-grayStroke pb-16'>
						<div className='w-full flex items-center justify-between border-b border-b-1 border-grayStroke pb-4 mb-4'>
							<h3 className='text-lg font-medium'>PAYMENT METHOD</h3>
						</div>
						<div>
							{paymentMethod !== null && mapMethod[`${paymentMethod.value}`]}
							{/* <p>Kindly Select your preferred payment method</p> */}
						</div>
						<div>{/* <PaymentMethods setPaymentMethod={setPaymentMethod} /> */}</div>
					</div>
					<div className='hidden md:block'>
						<PriceSummary />
						<div className='mt-4'>
							<Button
								text='Confirm to Continue'
								handler={goToConfirm}
								width='full'
							/>

							{/* <Button
							text='Back'
							handler={() => {}}
							width='full'
							custom='bg-white border border-line radius-lg !text-line font-medium text-lg'
              /> */}
						</div>
					</div>
				</div>
				<div className='w-full md:w-[30%]'>
					<SummaryCart />
					<PriceSummary />
				</div>
			</main>
		</Layout>
	)
}

export default ConfirmCheckout
