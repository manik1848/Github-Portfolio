import {Button, Nav, Navbar} from 'react-bootstrap'
import {FaDownload, FaGithub, FaLinkedin} from 'react-icons/fa'
import React, {useState} from 'react'

import loadable from '@loadable/component'
import Resume from '../Downloadables/Manikandan_Prakash_Resume.pdf'

const ResumeModal = loadable(() => import('./ResumeModal'))
// import ResumeModal from "./ResumeModal";

function Navigation() {
	const [showResumeModal, setShowResumeModal] = useState(false)

	return (
		<React.Fragment>
			<Navbar variant='dark' expand='lg' fixed='top' className='nvabar-custon'>
				<a href='/' className='navbar_logo_container'>
					{/* <img src={PortfolioLogo} className='navbar_logo' alt='navbar_logo' /> */}
					<span>Manikandan Prakash</span>
				</a>
				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse id='basic-navbar-nav'>
					<Nav className='mr-auto'></Nav>
					<Nav className='navbar-right'>
						{/* <Nav.Link href='https://dev.to/pranjaljain0'>
							<Button className='moving-gradient'>Blogs</Button>
						</Nav.Link> */}
						{/* <Nav.Link> */}
							<Button
								variant='light'
								style={{
									borderRadius: '4px 0 0 4px',
									borderRight: '1px solid rgba(0,0,0,0.5)',
								}}
								onClick={() => {
									setShowResumeModal(true)
								}}>
								Resume
							</Button>
							<Button
								variant='info'
								href={Resume}
								download
								style={{
									borderRadius: '0 4px 4px 0',
								}}
								aria-label='Resume'>
								<FaDownload
									aria-label='Resume'
									fill='rgba(0,0,0,0.5)'
									// onClick={() => {
									// 	console.log('hello')(
									// 		(window.location =
									// 			'https://raw.githubusercontent.com/manik1848/Resume/main/Manikandan_Prakash_Resume.pdf')
									// 	)
									// }}
								/>
							</Button>
						{/* </Nav.Link> */}
						<Nav.Link
							aria-label='Github'
							rel='noreferrer'
							target='_blank'
							href='https://github.com/manik1848'>
							<FaGithub
								aria-label='Github'
								color='rgba(255,255,255,0.8)'
								size='1.5em'
							/>
						</Nav.Link>
						<Nav.Link
							aria-label='Linked In'
							target='_blank'
							rel='noreferrer'
							href='https://www.linkedin.com/in/manikandanprakash1848/'>
							<FaLinkedin
								aria-label='Linked In'
								color='rgba(255,255,255,0.8)'
								size='1.5em'
							/>
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
			<ResumeModal
				showResumeModal={showResumeModal}
				closeModal={() => {
					setShowResumeModal(!showResumeModal)
				}}
			/>
		</React.Fragment>
	)
}

export default Navigation
