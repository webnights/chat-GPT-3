import React from 'react'
import logo from '../../assets/logo.svg'
import { FooterNavBlock } from '../../components'
import './footer.css'
const Footer = () => {
	return (
		<div className='footer ' id='footer'>
			<div className='footer__heading'>
				<h1 className='gradient__text'>
					Do you want to step in to the <br /> future before others
				</h1>
				<button>Request Early Access</button>
			</div>
			<div className='footer__container '>
				<div className='footer__container-top section__padding'>
					<div className='footer__container-top-description'>
						<img src={logo} alt='logo' />
						<p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
					</div>
					<nav className='footer__container-top-navigation'>
						{footerNav.map((item, index) =>(
								<FooterNavBlock item={item} key={index}/>
						))}
					</nav>
				</div>
				<div className='footer__container-bottom'>
					<span>© 2021 GPT-3. All rights reserved.</span>
				</div>
			</div>
		</div>
	)
}

const footerNav = [
	{
		title: 'Links',
		links: [
			{ name: 'Overons', href: '#' },
			{ name: 'Social Media', href: '#' },
			{ name: 'Counters', href: '#' },
			{ name: 'Contact', href: '#' },
		],
	},
	{
		title: 'Company',
		links: [
			{ name: 'Terms & Conditions', href: '#' },
			{ name: 'Privacy Policy', href: '#' },
			{ name: 'Contact', href: '#' },
		],
	},
	{
		title: 'Get in touch',
		links: [
			{ name: 'Crechterwoord K12 182 DK Alknjkcb', href: '#' },
			{ name: '085-132567', href: '#' },
			{ name: 'info@payme.net', href: '#' },
		],
	},
]

export default Footer
