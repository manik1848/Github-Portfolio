// import {AiOutlineGithub, AiOutlineLinkedin} from 'react-icons/ai'
// import {Button, Container, FormControl, InputGroup} from 'react-bootstrap'

// import React from 'react'
// import styled from 'styled-components'

// const Social = styled.div`
// 	display: flex;
// 	flex-direction: column;
// 	min-height: 50vh;
// 	padding: 5px;
// `

// const SocialIcons = styled.div`
// 	display: flex;
// 	width: 100%;
// `

// const CustomLink = styled.a`
// 	display: block;
// 	color: inherit;
// 	text-decoration: none;
// 	&:hover {
// 		color: inherit;
// 		text-decoration: none;
// 	}
// `

// const Icon = styled.div`
// 	flex: 1;
// 	text-align: center;
// 	margin-bottom: 20px;
// 	padding: 20px;
// 	background-color: #ebf2fa;
// 	border-radius: 11px;
// 	cursor: pointer;
// 	vertical-align: middle;
// 	background: #d6249f;
// 	${(props) => {
// 		if (props.label === 'instagram') {
// 			return 'background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%);'
// 		} else if (props.label === 'github') {
// 			return 'background: linear-gradient(to top, #7dbbe6 0%,#00acee 100%); margin-right: 20px;'
// 		} else if (props.label === 'linkedin') {
// 			return 'background: linear-gradient(to top, #0e76a8 0%,#00acee 100%);'
// 		}
// 	}}
// 	box-shadow: 0px 3px 10px rgba(0,0,0,.25);
// 	color: #fff;
// 	& svg {
// 		flex: 1;
// 		height: 50px;
// 	}
// `

// const ButtonForm = styled.div`
// 	margin-top: 15px;
// `

// function SocialModal() {
// 	return (
// 		<Social>
// 			<Container>
// 				<SocialIcons>
// 					<Icon label='github'>
// 						<AiOutlineGithub size={35} />
// 						<CustomLink href='https://github.com/manik1848' target='_blank'>
// 							@manik1848
// 						</CustomLink>
// 					</Icon>
// 					<Icon label='linkedin'>
// 						<AiOutlineLinkedin size={35} />
// 						<CustomLink
// 							href='https://www.linkedin.com/in/manikandanprakash1848/'
// 							target='_blank'
// 						>
// 							@manikandanprakash1848
// 						</CustomLink>
// 					</Icon>
// 					<Icon label='github'>
// 						<AiOutlineLinkedin size={35} />
// 						<CustomLink
// 							href='https://www.linkedin.com/in/manikandanprakash1848/'
// 							target='_blank'
// 						>
// 							@manikandan
// 						</CustomLink>
// 					</Icon>
// 				</SocialIcons>

// 				<InputGroup className='mb-3'>
// 					<FormControl
// 						placeholder='Full name'
// 						aria-label='Name'
// 						aria-describedby='basic-addon1'
// 					/>
// 				</InputGroup>

// 				<InputGroup className='mb-3'>
// 					<FormControl
// 						placeholder='Email address'
// 						aria-label='Email'
// 						aria-describedby='basic-addon1'
// 					/>
// 				</InputGroup>

// 				<InputGroup>
// 					<FormControl
// 						as='textarea'
// 						aria-label='With textarea'
// 						placeholder='Write some description'
// 						style={{
// 							resize: 'none',
// 							height: 100,
// 						}}
// 					/>
// 				</InputGroup>

// 				<ButtonForm>
// 					<Button variant='outline-secondary' className='float-right'>
// 						Submit
// 					</Button>
// 				</ButtonForm>
// 			</Container>
// 		</Social>
// 	)
// }

// export default SocialModal

import React, {useState} from 'react'
import styles from './ContactForm.module.css'
import {GrMail} from 'react-icons/gr'
import {ImPhone} from 'react-icons/im'
import {FaLinkedin, FaTwitter, FaGithub} from 'react-icons/fa'
import {sendMessage} from '../utilities/sendMessage'

const SocialModal = ({setLgShow}) => {
	let [isSending, setIsSending] = React.useState(false)
	let [sentStatus, setSentStatus] = React.useState(null)
	let timeoutRef = React.useRef(null)
	const [toast, setToast] = useState(true)

	const details = {
		mail: 'manikprakash1848@gmail.com',
		mobile: '+91 8838886279',
	}
	const {mail, mobile} = details

	const handleMail = () => {
		window.open(`mailto:${mail}`)
	}

	const handleAlert = (status) => {
		setSentStatus(status)
		timeoutRef.current = setTimeout(() => {
			setSentStatus(null)
		}, 3000)
	}
	const handleGithub = () => {
		window.open('https://github.com/manik1848')
	}

	const handleLinkedin = () => {
		window.open('https://www.linkedin.com/in/manikandanprakash1848/')
	}

	const handleFormSubmit = (e) => {
		e.preventDefault()
		setIsSending(true)
		setToast(true)

		setTimeout(() => {
			setIsSending(false)
			setLgShow(false)
		}, 2000)
	}

	React.useEffect(() => {
		return () => {
			if (timeoutRef.current) {
				clearTimeout(timeoutRef.current)
			}
		}
	}, [])
	return (
		<>
			<div className={styles.container}>
				<div className={styles.left}>
					<div className={styles.left_header}>
						<div className={styles.left_header_l1}>Have an idea?</div>
						<div className={styles.left_header_l2}>Let's connect!</div>
					</div>
					<div className={styles.left_content}>
						<div
							className={`${styles.icon_text} ${styles.mail}`}
							onClick={handleMail}>
							<GrMail size='1.6em' />
							<span>{mail}</span>
						</div>
						<div className={styles.icon_text}>
							<ImPhone size='1.6em' />
							<span>{mobile}</span>
						</div>
						<div className={styles.connect}>
							<FaGithub onClick={handleGithub} size='1.8em' />
							<FaLinkedin onClick={handleLinkedin} size='1.8em' />
							{/* <FaTwitter onClick={handleTwitter} size='1.8em' /> */}
						</div>
					</div>
				</div>
				<div className={styles.right}>
					<form className={styles.form_container} onSubmit={handleFormSubmit}>
						<div className={styles.form_elements}>
							<div>Email</div>
							<input type='email' name='email' required={true} />
						</div>
						<div className={styles.form_elements}>
							<div>Subject</div>
							<input type='text' name='subject' />
						</div>
						<div className={styles.form_elements}>
							<div>Message</div>
							<textarea name='message' rows='7' required={true} />
						</div>
						<div className={styles.form_elements} disabled={isSending}>
							{sentStatus === null ? null : sentStatus === false ? (
								<div className={styles.red_alert}>Something went wrong</div>
							) : (
								<div className={styles.green_alert}>Sent successfully</div>
							)}
							<button
								style={{backgroundColor: isSending ? '#b3cccc' : '#51989d'}}>
								{isSending ? 'Sending...' : 'Send'}
							</button>
						</div>
					</form>
				</div>
			</div>
		</>
	)
}

export default SocialModal


