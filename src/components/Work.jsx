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
		{
			name: "Maldives",
			description: "An AR tourism app that shows locations with information by scanning Maldives Map.",
			linkId: "1soE5u67NcPJkg4AiUpg6q_cqooi0N0oU"
		},
		{
			name: "VNotes",
			description: "VNotes is an AR app that enables you to place text , images and videos in real world environment. I created a plugin that saves the environment data with annotation in a single file and upload it to the server.",
			linkId: "1wdhL5TIz8lpvLtBEgGsO-J4VDo3phtcU"
		},
		{
			name: "VR Exhibition",
			description: "A WebGL app where user allows to visit diﬀerent stores and stalls in exhibition hall virtually. This app includes chat and webinar streaming features and zoom meeting scheduling.",
			linkId: "1k_oeDzBNaQAKoI6eFKm_q-BJAAkUfzC_"
		},
	] 

	return (
		<section className='w-full min-h-screen bg-primary'>
			<div className='w-full lg:max-w-6xl 2xl:max-w-7xl mx-auto h-full flex flex-col justify-center gap-12 py-10'>
				<div className='w-full text-center lg:text-left'>
					<p className='text-[5vh] lg:text-[8vh] leading-[5vh] lg:leading-[8vh] font-Raleway text-blackish uppercase'>Selected Work</p>
				</div>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-5 lg:px-0'>
					{projectData.map((item, index) => (
						<div key={index} className='w-full'>
							<iframe src={"https://drive.google.com/file/d/"+ item.linkId +"/preview"} className='w-full h-auto aspect-video rounded-lg' allowfullscreen></iframe>
							<p className='text-2xl font-Raleway font-bold text-secondary mt-5'>{item.name}</p>
							<p className='text-lg font-Raleway font-semibold text-secondary mt-2 text-justify lg:text-left'>{item.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default Work