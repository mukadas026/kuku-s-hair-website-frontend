import {  useEffect, useRef, useState } from 'react'

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { AiOutlineShoppingCart } from "react-icons/ai";
import logo from "../.././assets/logo.png"
import SearchBnt from './SearchBnt';





export default function Navigation() {
	// States for  open and close the navbar
	const [mobileNavOpen, setMobileNavOpen] = useState(false);

	// open search nd close search  state
	const [openSearch, setOpenSearch] = useState(false);

	// Function to handle the navbar active color  when you click on the navbar
	function handleNavItemClick(event) {
		document
			.querySelectorAll(".nav-item")
			.forEach((node) => node.classList.remove("active"));
		event.currentTarget.classList.add("active");
	}

	// useRef function to close the navbar when you click out the navbar
	let menuRef = useRef(null);
	useEffect(() => {
		let handler = (e) => {
			if (menuRef.current && !menuRef.current.contains(e.target)) {
				setMobileNavOpen(false);
				
			}
		};

		document.addEventListener("mousedown", handler);

		return () => {
			document.removeEventListener("mousedown", handler);
		};
	}, []);



	//  useRe function to close the search input filed when the user click  outside 
	let SearchRef = useRef( null )
	useEffect(() => {
		let handler = (e) => {
			if (menuRef.current && !menuRef.current.contains(e.target)) {
				setOpenSearch( false );
				
				
			}
		};

		document.addEventListener("mousedown", handler);

		return () => {
			document.removeEventListener("mousedown", handler);
		};
	}, []);


	return (
		<>
			<nav>
				<header className=" flex flex-none items-center fixed top-0 left-0 right-0  duration-100  bg-white   shadow-md   z-50">
					<div className="container  mx-auto px-4 lg:px-8">
						<div className="flex justify-between py-4">
							{/* Left Section  */}
							{/* Logo */}
							<button className="group inline-flex items-center space-x-2 font-bold text-xl tracking-wide ">
								<img
									className="lg:h-10 h-5 w-5 lg:w-10 bg-Main"
									src={logo}
									alt="logo"
								/>
							</button>{" "}
							{/*  END Left Section */}
							{/*  ====================Right Section ======================= */}
							<div className="flex items-center space-x-1 lg:space-x-60">
								{/* --- Desktop Navigation -------- */}
								<div className="hidden lg:flex lg:items-center lg:space-x-2">
									{/* DISCOVER */}
									<button
										className="nav-item   rounded-full text-md  text-gray-500 font-Poppins  "
										onClick={handleNavItemClick}
									>
										<button
											className=" flex hover:transition-colors hover:duration-200
										items-center space-x-2 px-3 py-2 rounded font-medium text-lg tracking-wide"
										>
											DISCOVER
										</button>
									</button>

									{/* SHOP */}

									<button
										className="nav-item   rounded-full   text-gray-500 font-Poppins  "
										onClick={handleNavItemClick}
									>
										<button
											className=" flex hover:transition-colors hover:duration-200
										items-center space-x-2 px-3 py-2 rounded font-Poppins font-medium text-lg tracking-wide"
										>
											SHOP
										</button>
									</button>
									{/* CONTACT US */}
									<button
										className="nav-item  text-gray-500 font-Poppins   rounded-full  "
										onClick={handleNavItemClick}
									>
										<button
											className=" flex hover:transition-colors hover:duration-200
										items-center space-x-2 px-3 py-2 rounded font-medium text-lg tracking-wide"
										>
											CONTACT US
										</button>
									</button>
								</div>
								{/*  ========================== SEARCH AND  CAR SECTION    =========================*/}
								<div className="flex flex-row  space-x-5 items-center justify-end">
									<button
										type="button"
										className=" p-2   sm:h-12 md:h-10 items-center rounded-md border border-transparent bg-Main px-6 text-base font-medium text-white shadow-sm  focus:outline-none  focus:ring-offset-2"
									>
										<span className="sm:text-sm sm:tracking-tight md:tracking-normal md:text-base ">
											Book Appointment
										</span>
									</button>
									{/* Search */}
									<div className=" border-Main border rounded-full ">
										<button
											className="p-2   hover:text-gray-500"
											onClick={() => setOpenSearch(!openSearch)}
										>
											<MagnifyingGlassIcon
												className=" lg:h-6 lg:w-6  w-3 h-3 text-Main"
												aria-hidden="true"
											/>
										</button>
									</div>

									{/* Cart */}
									<div className="ml-4 flow-root lg:ml-8 ">
										<button
											href="#"
											className="group -m-2 flex items-center p-2"
										>
											<AiOutlineShoppingCart
												className="h-6 w-6 flex-shrink-0  text-Main"
												aria-hidden="true"
											/>
										</button>
									</div>
								</div>{" "}
								{/* -------------------  SEARCH AND  CAR SECTION -------------------  */}
								{/* 

								
								{/*  ===============Toggle Mobile Navigation ============= ---------------- */}
								<div className="lg:hidden flex">
									<button
										type="button"
										className="flex transition  duration-400 justify-center items-center space-x-2  font-semibold focus:outline-none px-3 py-2 bg-transplant  leading-6 rounded  focus:ring-opacity-25 dark:bg-white  active:bg-white dark:active:bg-white  active:shadow-none"
										onClick={() => setMobileNavOpen(!mobileNavOpen)}
									>
										{mobileNavOpen ? null : (
											<svg
												xmlns="http://www.w3.org/2000/svg"
												className="w-6 h-6"
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor"
												strokeWidth={2}
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													d="M4 6h16M4 12h16M4 18h16"
												/>
											</svg>
										)}
									</button>
								</div>
								{/* END Toggle Mobile Navigation */}
							</div>
							{/* END Right Section */}
						</div>
						{/* ===========================  Search input fled. This will appear in the screen when  the user click on the search icon in the navbar 
						 ============ */}
						<div ref={SearchRef}>{openSearch ? <SearchBnt /> : null}</div>{" "}
						{/* ------------ END OF SEARCH INPUT  FILED ----------------------- */}

						{/* ================== Mobile view Navigation This section will show on only mobile devices  ================= */}
						<div
							ref={menuRef}
							className={`   bg-white    shadow-2xl    fixed top-0 z-50  w-3/4 h-screen  lg:hidden flex flex-col gap-10  text-medium  p-7 pt-10 left-0  duration-500 xl:hidden ${
								mobileNavOpen ? "left- text-center" : "left-[-100%]"
							}`}
						>
							{/* nav items in small devices  */}
							<nav className="flex   justify-center text-center  transition duration-300  flex-col space-y-2 py-4    ">
								{/* DISCOVER*/}

								<div className="w-full    hover:transition-colors hover:duration-200 hover:rounded-md">
									<button
										className="nav-item     text-gray-500 font-Poppins   rounded-full  "
										onClick={handleNavItemClick}
									>
										<button className=" font-medium text-md text-center font-Poppins  tracking-wide  flex items-center space-x-2 px-3 py-2 rounded ">
											DISCOVER
										</button>
									</button>
								</div>

								<hr className="    border-gray-400" />
								{/* SHOP */}

								<div className="w-full    hover:transition-colors hover:duration-200 hover:rounded-md">
									<button
										className="nav-ite text-gray-500 rounded-full  "
										onClick={handleNavItemClick}
									>
										<button className="  font-medium text-md text-center font-Poppins  tracking-wide  flex items-center space-x-2 px-3 py-2 rounded ">
											SHOP
										</button>
									</button>
								</div>
								<hr className="    border-gray-300" />
								{/* CONTACTS  */}
								<div className="w-full    hover:transition-colors hover:duration-200 hover:rounded-md">
									<button
										className="nav-item       text-gray-500 font-Poppins   rounded-full  "
										onClick={handleNavItemClick}
									>
										<button className=" font-medium text-md text-center font-Poppins  tracking-wide  flex items-center space-x-2 px-3 py-2 rounded ">
											CONTACT US
										</button>
									</button>
								</div>
								<hr className="  border-gray-300" />
							</nav>
						</div>
						{/* END Mobile Navigation */}
					</div>
				</header>
				{/* END Page Header */}
			</nav>
		</>
	);
}
