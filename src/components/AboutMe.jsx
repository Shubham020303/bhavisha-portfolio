import React from 'react'

const AboutMe = () => {
	return (
		<section className='w-full h-screen min-h-screen bg-secondary'>
			<div className='max-w-7xl mx-auto h-full flex flex-col justify-center gap-20 py-10'>
				<div className='uppercase text-center w-full h-fit'>
					<p className='font-Open-Sans font-medium mb-3'>Who am i</p>
					<p className='font-Raleway text-6xl text-primary uppercase'>About Me</p>
					<p className='font-Raleway text-6xl text-primary uppercase'>(She/Her)</p>
				</div>
				<div className='w-full grid grid-cols-2'>
					<div className='w-full h-full'>
						<img src='https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1080' className='w-[70%] h-full object-cover' />
					</div>
					<div className='w-full h-full flex flex-col items-start justify-between'>
						<p className='text-white font-Open-Sans text-2xl font-medium'>As a seasoned Unity developer with over 5 years of experience, I specialize in creating captivating and seamless interactive experiences. Proficient in game design, programming, and optimization across diverse platforms.</p>
						<p className='text-blackish text-xl'>I craft immersive experiences through expert game design and optimization. My proficiency spans diverse platforms, ensuring high-quality, engaging applications.</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default AboutMe