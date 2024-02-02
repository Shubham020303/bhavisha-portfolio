import React from 'react'

const Hero = () => {
	return (
		<section className='w-full min-h-screen h-screen grid grid-cols-2 bg-primary'>
			<div className='w-full h-full flex items-center justify-center'>
				<div className='w-[80vh] h-[50vh] rounded-full -rotate-45 bg-primary flex items-center justify-center overflow-hidden'>
					<img src='/images/Profile.jpg' className='rotate-45 object-cover' />
				</div>
			</div>
			<div className='w-full h-full flex items-center justify-center'>
				<div className='flex flex-col items-center gap-y-16'>
					<div className='flex flex-col items-center gap-y-2'>
						<p className='text-7xl leading-[80px] font-medium text-center font-Raleway uppercase'>Bhavisha <br /> Bhogayata</p>
						<p className='text-secondary font-Open-Sans uppercase'>Unity Developer</p>
					</div>
					<a href='#connectWithMe' className='bg-secondary p-2 px-4 text-white uppercase'>
						<p>Reach Out</p>
					</a>
				</div>
			</div>
		</section>
	)
}

export default Hero