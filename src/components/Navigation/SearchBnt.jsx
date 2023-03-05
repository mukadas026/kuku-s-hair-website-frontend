import React from 'react'


const SearchBnt = () => {
  return (
		<>
			<div className="mx-10 lg:mx-10  lg:mb-8   bg-white">
				<form className="flex items-center">
					<div className="relative w-full">
						{/* search icon  */}
						<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
							<svg
								aria-hidden="true"
								className="w-5 h-5 text-Main "
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fill-rule="evenodd"
									d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
									clip-rule="evenodd"
								></path>
							</svg>
						</div>
						{/* Search input filed  */}
						<input
							type="text"
							id="simple-search"
							className="bg-gray-50 border border-gray-400 text-gray-900 text-sm outline-none rounded-lg focus:ring-Main focus:border-gray-500 block w-full pl-10 p-2.5   "
							placeholder="Search"
							required
						/>
					</div>

					{/* submit search button  */}
					<button
						type="submit"
						className="p-2.5 ml-2 text-sm font-medium text-white bg-Main rounded-lg  hover:bg-Darker focus:ring-4 focus:outline-none "
					>
						<svg
							className="w-5 h-5"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
							></path>
						</svg>
					
					</button>
				</form>
			</div>

     
		</>
	);
}

export default SearchBnt

