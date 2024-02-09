import React from 'react'

const Hero = () => {
	return (
		<section className='w-full min-h-screen h-screen grid grid-cols-1 md:grid-cols-2 bg-primary'>
			<div className='w-full h-full flex items-center justify-center'>
				<div className='lg:w-[80vh] lg:h-[50vh] md:w-[50vh] md:h-[30vh] h-[25vh] w-[40vh] rounded-full -rotate-45 bg-primary flex items-center justify-center overflow-hidden'>
					<img src='/images/Profile.jpg' className='rotate-45 object-cover' />
				</div>
			</div>
			<div className='w-full h-full flex items-center justify-center'>
				<div className='flex flex-col items-center gap-y-16'>
					<div className='flex flex-col items-center gap-y-2'>
						<p className='lg:text-[12vh] text-[6vh] lg:leading-[11vh] leading-[6vh] font-medium text-center font-Raleway uppercase'>Bhavisha <br /> Bhogayata</p>
						<p className='text-secondary font-Open-Sans uppercase lg:text-[3vh] text-[2vh]'>Unity Developer</p>
					</div>
					<a href='#connectWithMe' className='bg-secondary p-2 px-4 text-white uppercase text-[2vh]'>
						<p>Reach Out</p>
					</a>
				</div>
			</div>
		</section>
	)
}

export default Hero