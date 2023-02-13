// This component is the main component of the home screen page.  It contains all home components
import React from 'react'
import Hero from '../components/Hero'
import OurTopPicks from '../components/OurTopPicks/OurTopPicks'
import About from '../components/AboutUS/About.jsx';


export const HomeMain = () => {
  return (
		<>
			{/* HOME SCREEN HERO */}
		
			<Hero />

			{/*  */}
      <OurTopPicks />
      
      {/* About us component */}
      <About/>
		</>
	);
}


export default HomeMain
