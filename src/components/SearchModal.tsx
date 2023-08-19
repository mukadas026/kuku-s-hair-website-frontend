import React, { useRef, useState } from "react"
// import { AiFillCloseCircle } from "react-icons/ai";
import { FiSearch } from "react-icons/fi"

const SearchModal = ({ modalOpen, modalClose }: any) => {
	const [searchText, setSearchText] = useState("")
	const inputRef = useRef(null)
	// modal props
	const handleSearch = () => {
		console.log("searching for: ", searchText)
		// perform search logic here
	}

	// handle key press event on search input field to trigger search
	const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
		console.log(event.key)
		if (event.key === "Enter") {
			handleSearch()
		} else if (event.key === "Escape") {
			setSearchText("")
			modalClose()
		}
	}
	const handleClose = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
		if (e.target !== inputRef.current) {
			setSearchText("")
			modalClose()
		}
	}
	// modal props
	if (!modalOpen) return null

	return (
		<>
			<section
				className='fixed w-screen z-20 top-0 h-screen inset-0  bg-opacity-[40rem] backdrop-blur-lg flex justify-center items-start bg-white'
				onClick={handleClose}
			>
				<div className=' flex flex-col  w-1/3  rounded-lg'>
					<div className='flex items-center  p-2 bg-white   mt-20 mx-10 border-2  rounded-lg '>
						<input
							className='appearance-none bg-transparent  py-3 border-none w-full text-gray-700 mr-3  px-2 leading-tight focus:outline-none'
							type='text'
							placeholder='Search...'
							value={searchText}
							onChange={(e) => setSearchText(e.target.value)}
							onKeyDown={handleKeyPress}
							ref={inputRef}
						/>

						{/*  */}
						<button
							className='flex-shrink-0 text-3xl  text-primary  py-1 px-2 rounded-full'
							type='button'
							onClick={handleSearch}
						>
							<FiSearch />
						</button>
					</div>
				</div>
			</section>
		</>
	)
}

export default SearchModal
