import React from 'react'

const Education = () => {

	const educationData = [
		{
			degree: "B.E. Computer Science Engineering",
			college: "Dr. Subhash Technical Campus, Junagadh",
			time: "09/2012 to 07/2015"
		},
		{
			degree: "Diploma in Computer Engineering",
			college: "Government Polytechnic Porbandar",
			time: "09/2009 to 07/2012"
		},
	]

	return (
		<section className='w-full min-h-screen bg-primary flex items-center justify-center'>
			<div className='w-full max-w-7xl mx-auto h-full flex justify-center gap-20 py-10'>
				<div className='w-[40%]'>
					<p className='text-6xl font-Raleway text-blackish uppercase'>Education</p>
				</div>
				<div className='w-[60%] font-Open-Sans'>
					{educationData.map((item, index) => (
						<div key={index} className='w-full mb-10'>
							<p className='text-blackish text-3xl font-semibold mb-1 uppercase'>{item.college}</p>
							<p className='text-secondary text-xl font-medium mb-5'>{item.degree}</p>
							<p className='text-secondary text-xl font-medium'>{item.time}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default Education