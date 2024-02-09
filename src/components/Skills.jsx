import React from 'react'

const Skills = () => {

	const skillData = [
		"Unity Engine",
		"Visual Studio",
		"XCode",
		"Adobe Photoshop",
		"Game Development",
		"WebGL Development",
		"App Development",
		"Augmented Reality",
		"Virtual Reality",
		"Mixed Reality",
		"Cloud Based AR",
		"ARFoundation",
		"Vuforia",
		"Kinect",
	]

	return (
		<section className='w-full min-h-screen bg-primary flex items-center justify-center'>
			<div className='w-full max-w-6xl 2xl:max-w-7xl mx-auto h-full flex flex-col lg:flex-row justify-center gap-20 py-10'>
				<div className='lg:w-[40%] w-full text-center lg:text-left'>
					<p className='text-[5vh] lg:text-[8vh] leading-[5vh] lg:leading-[8vh] font-Raleway text-blackish uppercase'>Skills & Proficiencies</p>
				</div>
				<div className='lg:w-[60%] w-full'>
					<ul className='list-disc w-fit mx-auto lg:w-full grid grid-cols-1 md:grid-cols-2 gap-3 gap-x-20'>
						{skillData.map((item, index) => (
							<li key={index} className='text-secondary text-xl font-medium uppercase'>{item}</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	)
}

export default Skills