import React, { FC } from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

// type props = {
// 	children: string | JSX.Element | JSX.Element[] | (() => JSX.Element)
// }

export interface MyProps {
	children: React.ReactNode
}

const Layout:FC<MyProps> = ({children}) => {
	return (
		<main className='w-screen max-w-[1980px] mx-auto min-h-screen overflow-x-hidden'>
			<Navbar show={true} />
			{children}
			<Footer />
		</main>
	)
}

export default Layout
