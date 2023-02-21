
import Card from "./card";

const OurTopPicks = () => {

  return (
		<>
			{/*  ================ The header  button ======================= */}
			<section className="  flex justify-center lg:mx-80 rounded-sm  mx-10  mt-5 p-4 bg-Main  ">
				<div className=" ">
					<button className="font-Poppins">Our Top Picks</button>
				</div>
			</section>

			{/* ============= CARD SECTION  ================== */}
			<div className="container mx-auto my-8 py-20">
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
					<Card
						title="Card 1"
						description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
						image="https://images.unsplash.com/photo-1616104130421-6eccff73df1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=732&q=80"
						buttonText="Add to cart"
            moreContent="Thank you  for choosing us"
            Price="Price: $100"
					/>
					<Card
						title="Card 2"
						description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
						image="https://picsum.photos/200/300"
						buttonText="Add to cart"
            moreContent="Thank you  for choosing us"
            Price="Price: $100"
					/>
					<Card
						title="Card 3"
						description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
						image="https://picsum.photos/200/300"
						buttonText="Add to cart"
            moreContent="Thank you  for choosing us"
            Price="Price: $100"
					/>
				</div>
			</div>
		</>
	);
}

export default OurTopPicks

