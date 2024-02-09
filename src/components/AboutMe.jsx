import React from 'react'

const AboutMe = () => {
	return (
		<section className='w-full lg:h-screen min-h-screen bg-secondary'>
			<div className='lg:max-w-6xl 2xl:max-w-7xl w-full mx-auto h-full flex flex-col justify-center lg:gap-20 gap-10 py-10'>
				<div className='uppercase text-center w-full h-fit'>
					<p className='font-Open-Sans font-medium mb-3 text-[2vh]'>Who am i</p>
					<p className='font-Raleway text-[5vh] lg:text-[8vh] leading-[5vh] lg:leading-[8vh] text-primary uppercase'>About Me</p>
					<p className='font-Raleway text-[5vh] lg:text-[8vh] leading-[5vh] lg:leading-[8vh] text-primary uppercase'>(She/Her)</p>
				</div>
				<div className='w-full grid grid-cols-1 lg:grid-cols-2 gap-y-5 lg:gap-y-0 px-5 lg:px-0'>
					<div className='w-full h-full'>
						<img src='https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1080' className='lg:w-[70%] w-full h-full object-cover' />
					</div>
					<div className='w-full h-full flex flex-col items-start justify-between'>
						<p className='text-white font-Open-Sans text-[2.5vh] lg:text-[3.5vh] 2xl:text-[3vh] text-justify lg:text-left font-medium'>As a seasoned Unity developer with over 5 years of experience, I specialize in creating captivating and seamless interactive experiences. Proficient in game design, programming, and optimization across diverse platforms.</p>
						<p className='text-blackish text-[2.2vh] lg:text-[3vh] 2xl:text-[2.5vh] mt-5 lg:mt-0 text-justify lg:text-left'>I craft immersive experiences through expert game design and optimization. My proficiency spans diverse platforms, ensuring high-quality, engaging applications.</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default AboutMe