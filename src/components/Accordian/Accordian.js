import './Accordian.scss'

import {BsChevronDown, BsChevronUp} from 'react-icons/bs'
import React, {useState} from 'react'

import {AiOutlineLink} from 'react-icons/ai'
import parse from 'html-react-parser'

function Accordian({title, data}) {
	const [showAccordian, setShowAccordian] = useState(true)
	return (
		<div className='portfolio-accordian'>
			<div className='header'>
				<div className='title'>
					<h3>{title}</h3>
					<a href={data.url} target='_blank' rel='noreferrer'>
						<AiOutlineLink />
					</a>
					<span>{data.duration}</span>
				</div>
				<span
					role='button'
					className='dropdown-icon'
					onClick={() => setShowAccordian(!showAccordian)}>
					{!showAccordian ? <BsChevronDown /> : <BsChevronUp />}
				</span>
			</div>
			{showAccordian && (
				<div className='content'>
					<h4 style={{color: 'white', fontWeight: 550}}>
						Software Development Engineer -1
					</h4>
					<ul>
						<li style={{marginBottom: '10px'}}>
							Played a pivotal role in the development and enhancement of the{' '}
							<b style={{color: 'black'}}>Control Tower App</b> a server-driven
							UI platform, that helps logistics teams gain a bird’s eye view of
							their entire logistics network. Implemented new features and
							functionalities to improve the product's performance and
							usability.
						</li>
						<li style={{marginBottom: '10px'}}>
							Engaged in the development of a web server with a primary focus on
							enhancing security measures, while also ensuring the ability to
							manipulate API responses to achieve desired formatting and for
							better performance.
						</li>
						<li style={{marginBottom: '10px'}}>
							Successfully led the migration of the website CMS from{' '}
							<b style={{color: 'white'}}>Ghost</b> to
							<b style={{color: 'black'}}>WordPress</b>, ensuring a seamless
							transition of all blog content.
						</li>
						<li style={{marginBottom: '10px'}}>
							Solely managed the website code base, consistently delivering
							updates and improvements to meet company goals.
						</li>
						<li style={{marginBottom: '10px'}}>
							Integrated <b style={{color: 'black'}}>HubSpot</b> into the
							website to enhance marketing capabilities, enabling effective lead
							generation and marketing automation.
						</li>
						<li style={{marginBottom: '10px'}}>
							Significantly reduced website loading times for both web and
							mobile versions, resulting in improved user experience and
							website's overall{' '}
							<b style={{color: 'black'}}>Search Engine Optimization(SEO)</b>{' '}
							performance.
						</li>
					</ul>
				</div>
			)}
		</div>
	)
}

export default Accordian
