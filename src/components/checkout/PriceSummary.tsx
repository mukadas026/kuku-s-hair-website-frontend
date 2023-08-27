import React from "react"
import Button from "../Button"

const PriceSummary = () => {
	return (
		<div className='space-y-4'>
			<div className='w-full flex items-center justify-between '>
				<p>Subtotal</p>
				<p>GHC 7200.00</p>
			</div>
			<div className='w-full flex items-center justify-between '>
				<p>Delivery</p>
				<p>GHC 72.00</p>
			</div>
			<div className='w-full flex items-center justify-between '>
				<p>
					<strong>Total</strong>
				</p>
				<p>
					<strong>GHC 7272.00</strong>
				</p>
			</div>
            <div>
                {/* <Button text="Confirm to Continue" handler={() => {}} width="full"/> */}
            </div>
		</div>
	)
}

export default PriceSummary
