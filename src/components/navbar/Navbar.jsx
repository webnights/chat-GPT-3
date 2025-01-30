import React, { useState } from 'react'
import { IoMdClose } from 'react-icons/io'
import { RiMenu3Line } from 'react-icons/ri'
import logo from '../../assets/logo.svg'
import classNames from 'classnames'
import './navbar.css'

const links = [
	{ name: 'Home', id: '#home' },
	{ name: 'What is GPT?', id: '#whatisGPT' },
	{ name: 'Open AI', id: '#open__ai' },
	{ name: 'Case Studies', id: '#case__studies' },
	{ name: 'Library', id: '#library' },
]

const Menu = () => {
	return (
		<>
			{links.map(link => (
				<a className='navigation__item' href={link.id} key={link.id}>
					{link.name}
				</a>
			))}
		</>
	)
}
const Navbar = () => {
	const [isMenuShowed, setIsMenuShowed] = useState(false)
	const toggleMenu = () => {
		setIsMenuShowed(!isMenuShowed)
	}
	return (
		<div className='navbar'>
			<div className='navbar__inner'>
				<div className='navbar__links'>
					<div className='navbar__logo'>
						<img src={logo} alt='logo' />
					</div>
					<nav className='navbar__navigation'>
						<Menu />
					</nav>
				</div>
				<div className='navbar__user'>
					<button className='navbar__sign-in'>Sign in</button>
					<button className='navbar__sign-up'>Sign Up</button>
				</div>

				<div className='mobile__menu'>
					{!isMenuShowed ? (
						<RiMenu3Line size={27} color='#fff' onClick={toggleMenu} />
					) : (
						<IoMdClose size={27} color='#fff' onClick={toggleMenu} />
					)}
					{isMenuShowed && (
						<div className='mobile__menu-container scale-up-center'>
							<div className='navbar__navigation-mobile'>
								<Menu />
							</div>
							<div className='navbar__user-mobile'>
								<button className='navbar__sign-in'>Sign in</button>
								<button className='navbar__sign-up'>Sign Up</button>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	)
}

export default Navbar
