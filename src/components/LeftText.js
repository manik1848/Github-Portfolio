import React from 'react'
import Typed from 'react-typed'
import manik from "../assets/Image/Manik-resume-image-removebg-preview.png"

function LeftText() {
	return (
		<div className='leftText' style={{margin:'0px 20px'}}>
			<div className='flex-fix'>
				<h2>Hi, </h2>
				<span className='preTitle'>I am </span>
				<h4 className='name_big'>Manikandan P</h4>
				<p className='animated_text'>
					<Typed
						strings={[
							'I am an engineer',
							'I am a Full Stack Developer',
							'I am a Critical Thinker',
						]}
						typeSpeed={40}
						backSpeed={50}
						loop
					></Typed>
				</p>
			</div>
			<div style={{width:'30%',height:'30%', borderRadius:'20%'}} className='image-holder'>
				<img src={manik} alt="manik" height={"100%"} width={"100%"} style={{borderRadius:"50%"}}/>
			</div>
		</div>
	)
}

export default LeftText
