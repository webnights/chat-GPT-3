import React from 'react'
import './footerNavBlock.css'
const FooterNavBlock = ({ item }) => {
	return (
		<div className='footer__nav-block'>
			<h6>{item.title}</h6>
			<ul>
				{item.links.map((link, index) => (
					<li key={link.name + index}>
						<a href={link.href} >
							{link.name}
						</a>
					</li>
				))}
			</ul>
		</div>
	)
}

export default FooterNavBlock
