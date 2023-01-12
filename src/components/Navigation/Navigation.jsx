import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MagnifyingGlassIcon, ShoppingBagIcon } from '@heroicons/react/24/outline'
import { AiOutlineShoppingCart } from "react-icons/ai";
import logo from "../.././assets/logo.png"




import {navigation} from './Items'
// FUNCTION THAT JOIN NAV ITEMS
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navigation() {
	return (
		<div className="bg-white">
			<header className="relative bg-white">
				<nav aria-label="Top" className="mx-auto max-w-7xl sm:px-6 lg:px-8">
					<div className=" px-4 pb-14 sm:px-0 sm:pb-0">
						<div className="flex h-16 items-center justify-between">
							{/* Logo */}
							<div className="flex flex-1  ">
								<a href="#">
									<span className="sr-only">Your Company</span>
									<img className="h-10 w-10 bg-Main" src={logo} alt="logo" />
								</a>
							</div>

							{/* Flyout menus */}
							<Popover.Group className=" absolute inset-x-0 bottom-0 sm:static sm:flex-1 sm:self-stretch">
								<div className="flex h-14 outline-none space-x-8 overflow-x-auto border-t px-4 pb-px sm:h-full sm:justify-center sm:overflow-visible sm:border-t-0 sm:pb-0">
									{navigation.categories.map((category, categoryIdx) => (
										<Popover key={categoryIdx} className="flex">
											{({ open }) => (
												<>
													<div className="relative flex">
														<Popover.Button
															className={classNames(
																open
																	? " border-none outline-none text-Main"
																	: "border-transparent text-gray-700 hover:text-gray-800",
																"relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out",
															)}
														>
															{category.name}
														</Popover.Button>
													</div>
												</>
											)}
										</Popover>
									))}
								</div>
							</Popover.Group>
							{/* SEARCH AND  CAR SECTION  */}
							<div className="flex flex-1  items-center justify-end">
								<button
									type="button"
									className="inline-flex sm:m-10  items-center rounded-md border border-transparent bg-Main px-6 py-3 text-base font-medium text-white shadow-sm  focus:outline-none  focus:ring-offset-2"
								>
									Book Appointment
								</button>
								{/* Search */}
								<div className="b">
									<button className="p-2  border-Main hover:text-gray-500">
										<span className="sr-only">Search</span>
										<MagnifyingGlassIcon
											className="h-6 w-6  border-Main text-Main"
											aria-hidden="true"
										/>
									</button>
								</div>

								{/* Cart */}
								<div className="ml-4 flow-root lg:ml-8 ">
									<button href="#" className="group -m-2 flex items-center p-2">
										<AiOutlineShoppingCart
											className="h-6 w-6 flex-shrink-0  text-Main"
											aria-hidden="true"
										/>

										<span className="sr-only">items in cart, view bag</span>
									</button>
								</div>
							</div>
						</div>
					</div>
				</nav>
			</header>
		</div>
	);
}
