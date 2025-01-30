import React from 'react'
import './feature.css/'
const Feature = ({ feature, height = 'auto' }) => {
	return (
		<div className='feature' style={{minHeight: height + 'px'}}>
			<h6>{feature.title}</h6>
			<p>{feature.text}</p>
		</div>
	)
}

export default Feature
