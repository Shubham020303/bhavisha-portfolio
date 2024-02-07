import React from 'react'

const Work = () => {

	const projectData = [
		{
			name: "shARyo",
			description: "AR Based automotive solution that helps to visualize car in real environment with interaction. This app allows user to change wheels & the color of the car body. User can also drive the car in real environment.",
			linkId: "1qh_iGPTNFvqOGZiV7NxFPq0d_B9Y8Ywc"
		},
		{
			name: "Education AR",
			description: "Education AR explains topics & concepts to kids using augmented reality and 3D in the form of animation. This app uses educational images as target images. When user scans a target image, it will display respective 3d model with details.",
			linkId: "1GCygHElEqV_RB7uGds70PsYJXpoEkegf"
		},
		{
			name: "Flip Book",
			description: "This is an AR app developed in Kinect which allows a user to move pages of a book by hand gestures.",
			linkId: "1wcqIpjX8GGx8NAfS_bzqmPPIvGhnAb8r"
		},
	] 

	return (
		<section className='w-full min-h-screen bg-primary'>
			<div className='w-full max-w-7xl mx-auto h-full flex flex-col justify-center gap-12 py-10'>
				<div className='w-full'>
					<p className='text-6xl font-Raleway text-blackish uppercase'>Selected Work</p>
				</div>
				<div className='grid grid-cols-3 gap-10'>
					{projectData.map((item, index) => (
						<div key={index} className='w-full'>
							<iframe src={"https://drive.google.com/file/d/"+ item.linkId +"/preview"} className='w-full h-auto aspect-video rounded-lg' allowfullscreen></iframe>
							<p className='text-2xl font-Raleway font-bold text-secondary mt-5'>{item.name}</p>
							<p className='text-lg font-Raleway font-semibold text-secondary mt-2'>{item.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default Work