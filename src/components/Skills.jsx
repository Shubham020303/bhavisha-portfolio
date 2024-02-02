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
			<div className='w-full max-w-7xl mx-auto h-full flex justify-center gap-20 py-10'>
				<div className='w-[40%]'>
					<p className='text-6xl font-Raleway text-blackish uppercase'>Skills & Proficiencies</p>
				</div>
				<div className='w-[60%]'>
					<ul className='list-disc grid grid-cols-2 gap-3'>
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