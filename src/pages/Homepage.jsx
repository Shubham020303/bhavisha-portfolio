import React from 'react'

// Components
import AboutMe from '../components/AboutMe'
import Hero from '../components/Hero'
import Experience from '../components/Experience'
import Education from '../components/Education'
import Skills from '../components/Skills'
import Connect from '../components/Connect'
import Work from '../components/Work'

const Homepage = () => {
	return (
		<>
			<Hero />
			<AboutMe />
			<Experience />
			<Education />
			<Skills />
			<Work />
			<Connect />
		</>
	)
}

export default Homepage