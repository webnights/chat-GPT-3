import React from 'react'
import { atlassian, dropbox, google, shopify, slack } from './imports'
import './brand.css'

const brands = [ google, slack, atlassian, dropbox, shopify,   ]

const Brand = () => {
	return (
		<div className='brand'>
			<ul>
				{brands.map((brand, index) => (
					<img src={brand} alt="brand" key={brand + index} />
				))}
			</ul>
		</div>
	)
}

export default Brand