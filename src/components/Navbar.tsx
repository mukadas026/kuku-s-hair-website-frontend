import React, { useEffect, useRef, useState } from "react"
import { CiSearch, CiUser } from "react-icons/ci"
import { AiOutlineMenu, AiOutlineShoppingCart } from "react-icons/ai"
import { MdExpandMore } from "react-icons/md"
import { Link } from "react-router-dom"
import SearchModal from "./SearchModal"

const logo = require("../assets/logo.png")

interface NavProp {
	show: boolean
}

// search icon

function Navbar({ show }: NavProp) {
	const [showModal, setShowmodal] = useState(false)
	const [openMenu, setOpenMenu] = useState(false)

	const handleShowMenu = () => {
		// console.log(openMenu)
		setOpenMenu((prev) => !prev)
	}
	const resizeListener = (e: UIEvent) => {
		if (window.innerWidth > 740) {
			setOpenMenu(true)
		} else {
			setOpenMenu(false)
		}
	}
	const scrollListener = (e:Event) => {
		// e.preventDefault()
		// const scrollTop = document.documentElement.scrollTop || window.scrollY
		// window.scrollTo({top: 0, behavior: 'smooth'})
		// console.log(scrollTop)
	}
	useEffect(() => {
		window.addEventListener("resize", resizeListener)
		window.addEventListener('scroll', scrollListener)
		
		return () => {
			window.removeEventListener('resize', resizeListener)
			window.removeEventListener('scroll', scrollListener)

		}
	}, [])

	return (
		<div className='sticky top-0 w-full bg-white'>
			<nav className='relative z-20 flex justify-between md:mx-4 md:mb-1 items-center py-2 h-[10vh] px-4'>
				<div>
					<img
						src={logo}
						className='h-12 w-18 relative z-20 '
						alt='logo'
					/>
				</div>
				{/* {show === true ? ( */}

				<div
					className={`transition-all ${
						openMenu ? "translate-y-[10vh]" : "-translate-y-[100vh]"
					} left-0 top-0 bg-white w-full absolute h-[90vh] flex flex-col items-center justify-center  gap-y-20 md:relative md:h-fit md:translate-y-0 md:flex-row md:justify-around`}
				>
					{/* <div className='flex flex-col'> */}
					<ul className='flex flex-col gap-y-20 items-center md:flex-row md:justify-around md:w-1/3'>
						<Link to='/'>
							{" "}
							<li className='hover:text-primary'>DISCOVER</li>
						</Link>
						<Link to='/shop'>
							<li className='hover:text-primary'>SHOP</li>
						</Link>
						<Link to='/contact'>
							{" "}
							<li className='hover:text-primary'>CONTACT</li>
						</Link>
					</ul>
					{/* </div> */}
					<div className='md:block'>
						<button className='text-white bg-primary px-3 h-10 rounded-lg'>Book Appointment</button>
					</div>
					<div className='flex gap-x-6'>
						<button onClick={() => setShowmodal(true)}>
							<div className='border-[0.5px] w-8 h-8 p-1 border-primary  rounded-full'>
								<CiSearch
									size={23}
									color='#FC6DC1'
								/>
							</div>
						</button>
						<Link
							to='/cart'
							className='pt-1'
						>
							<AiOutlineShoppingCart
								size={23}
								color='#FC6DC1'
								className='cursor-pointer'
							/>
						</Link>
						<div className='flex border-[0.5px] border-primary w-12 h-7 p-1'>
							<CiUser
								size={23}
								color='#FC6DC1'
							/>
							<MdExpandMore
								size={23}
								color='#FC6DC1'
							/>
						</div>
					</div>
				</div>
				<button
					className='md:hidden relative z-20'
					onClick={handleShowMenu}
				>
					<AiOutlineMenu size={30} />
				</button>

				{/* ) : null} */}
			</nav>

			{/*  MODAL  COMPONENT  */}
			<SearchModal
				modalOpen={showModal}
				modalClose={() => setShowmodal(false)}
			/>
		</div>
	)
}

export default Navbar
