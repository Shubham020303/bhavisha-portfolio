import React from 'react'

const Experience = () => {

	const experienceData = [
		{
			time: "07/2018 - Present",
			position: "Sr. Developer – Interactives",
			company: "Plutomen Technologies",
			description: "Leveraging my extensive Unity development experience, I specialize in creating cutting-edge interactive applications and solutions within the realms of Augmented Reality (AR) and Virtual Reality (VR). My expertise extends to designing immersive environments, implementing realistic interactions, and optimizing performance to deliver seamless AR/VR experiences that captivate users. With a keen eye for innovation, I bring a unique blend of technical proficiency and creative flair to every project."
		},
		{
			time: "07/2016-06/2018",
			position: "Sr. Unity Developer",
			company: "Techdoodles",
			description: "As a seasoned Unity developer, I specialize in the dynamic realm of multiplayer game development, crafting engaging and seamless experiences. My expertise extends to seamlessly integrating social media plugins, enhancing games with interconnected features, and fostering a vibrant community experience. With a passion for innovation, I bring technical prowess and creativity to the forefront, ensuring the creation of multiplayer games that resonate and thrive in the digital landscape."
		},
		{
			time: "03/2016-06/2016",
			position: "Unity Developer",
			company: "Devlon Infotech",
			description: "With a focus on enhancing gaming experiences, I excel in seamlessly integrating advertisements and third-party plugins into games. Leveraging my expertise, I ensure a harmonious blend of monetization strategies and additional functionalities, optimizing the overall user engagement and revenue potential of the gaming applications."
		},
		{
			time: "01/2015-01/2016",
			position: "Jr. Unity Developer",
			company: "Arth i-Soft Pvt. Ltd.",
			description: "Specializing in game development within Unity, I proficiently utilize C# and JavaScript to create immersive experiences in both 2D and 3D environments. With a robust skill set, I bring creativity and technical precision to the forefront, ensuring the successful realization of captivating and versatile games across different dimensions."
		},
	]

	return (
		<section className='w-full min-h-screen bg-primary'>
			<div className='lg:max-w-6xl 2xl:max-w-7xl mx-auto h-full flex flex-col justify-center lg:gap-20 gap-10 py-10'>
				<div className='uppercase text-center w-full h-fit mb-10'>
					<p className='font-Raleway text-[5vh] lg:text-[8vh] leading-[5vh] lg:leading-[8vh] text-blackish uppercase'>Relevant</p>
					<p className='font-Raleway text-[5vh] lg:text-[8vh] leading-[5vh] lg:leading-[8vh] text-blackish uppercase'>Experience</p>
				</div>
				<div className='w-full grid grid-cols-1 md:grid-cols-2 gap-20 lg:gap-10 md:gap-y-20 gap-y-10 px-5 lg:px-0'>
					{experienceData.map((item, index) => (
						<div key={index} className='flex flex-col lg:flex-row items-start lg:gap-5 gap-2'>
							<p className='whitespace-nowrap text-blackish font-semibold'>{item.time}</p>
							<div>
								<p className='text-blackish text-2xl font-semibold mb-1'>{item.position}</p>
								<p className='text-blackish text-xl font-medium lg:mb-8 mb-4'>{item.company}</p>
								<p className='text-secondary font-medium text-justify lg:text-left'>{item.description}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default Experience