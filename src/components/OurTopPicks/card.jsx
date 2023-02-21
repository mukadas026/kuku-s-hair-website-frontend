
import React, { useState } from "react";

const Card = ({ title, description, image, buttonText, moreContent, Price }) => {
	const [showMore, setShowMore] = useState(false);

	return (
		<div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
			<img className="w-full h-56 object-cover" src={image} alt={title} />
			<div className="px-4 py-2">
				<h2 className="text-lg font-semibold text-gray-800">{title}</h2>
                <p className="text-gray-600 mt-2">{description}</p>
                <p className=" mt-2 text-Main">{Price}</p>
				<div className="flex justify-end mt-4">
					<button
						className="bg-Main text-white px-4 py-2 rounded-md focus:outline-none"
						onClick={() => setShowMore(!showMore)}
					>
						{showMore ? "Hide" : buttonText}
					</button>
				</div>
				{showMore && (
					<div className="mt-4">
						<p className="text-gray-600">{moreContent}</p>
					</div>
				)}
			</div>
		</div>
	);
};

export default Card;
