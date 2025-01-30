import React from 'react'
import woman from '../../assets/possibility.png'
import './possibility.css'
const Possibility = () => {
	return (
		<div className='possibility section__padding' id='open__ai'>
			<div className='possibility__inner'>
				<div className='possibility__image'>
					<img src={woman} alt='woman' />
				</div>
				<div className='possibility__content'>
					<div className='possibility__heading '>
						<p>Request Early Access to Get Started</p>
						<h2 className='gradient__text'>
							The possibilities are beyond your imagination
						</h2>
					</div>
					<p className='possibility__content-text'>
						Yet bed any for travelling assistance indulgence unpleasing. Not
						thoughts all exercise blessing. Indulgence way everything joy
						alteration boisterous the attachment. Party we years to order allow
						asked of.
					</p>
					<p className='possibility__bottom-text'>Request Early Access to Get Started</p>
				</div>
			</div>
		</div>
	)
}

export default Possibility
