import React, { useState } from "react"
import Layout from "../../layouts/Layout"
import PaymentMethods, { IPaymentMethod } from "../../components/checkout/PaymentMethods"
import SummaryCart from "../../components/checkout/SummaryCart"
import PriceSummary from "../../components/checkout/PriceSummary"
import Button from "../../components/Button"
import { useNavigate } from "react-router-dom"

const Checkout = ({paymentMethod, setPaymentMethod} : {paymentMethod: IPaymentMethod | null, setPaymentMethod: Function}) => {
	// const [paymentMethod, setPaymentMethod] = useState<string | null>(null)
	const navigate = useNavigate()
	
	const goToConfirm = () => {
		if(paymentMethod === null) return 
		navigate(`confirm-checkout`)
	}

	return (
		<Layout>
			<main className='w-[95%] mx-auto flex flex-col md:flex-row py-16 justify-around'>
				<div className='w-full md:w-3/5 space-y-4 md:border-r md:pr-12 box-border mb-8'>
					<h3 className='text-line'>CHECKOUT</h3>
					<div className='w-full'>
						<div className='w-full flex items-center justify-between border-b border-b-1 border-grayStroke pb-4 mb-4'>
							<h3 className='font-medium'>ADDRESS DETAILS</h3>
							<button className="text-primary">CHANGE ADDRESS</button>
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
							<h3 className='text-lg font-medium'>Payment Methods</h3>
						</div>
						<div>
							<p>Kindly Select your preferred payment method</p>
						</div>
						<div>
							<PaymentMethods setPaymentMethod={setPaymentMethod}/>
						</div>
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

export default Checkout
