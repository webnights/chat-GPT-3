import React from 'react'
import { Feature } from '../../components'
import './whatGPT3.css'

const WhatGPT3 = () => {
	return (
		<div className='wgpt3 section__padding' id='whatisGPT'>
			<div className='wgpt3__wrapper'>
				<div className='wgpt3__inner'>
					<Feature feature={wgpt3features[0]} />
					<div className='wgpt3__heading '>
						<h2 className='gradient__text'>The possibilities are beyond your imagination</h2>
						<p>Explore The Library</p>
					</div>
					<div className='wgpt3__features-row'>
						<Feature feature={wgpt3features[1]} height={190} />
						<Feature feature={wgpt3features[2]} height={190} />
						<Feature feature={wgpt3features[3]} height={190} />
					</div>
				</div>
			</div>
		</div>
	)
}
const wgpt3features = [
	{
		title: 'What is GPT-3',
		text: 'We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.',
	},
	{
		title: 'Chatbots',
		text: 'We so opinion friends me message as delight. Whole front do of plate heard oh ought. ',
	},
	{
		title: 'Knowledgebase',
		text: 'At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b',
	},
	{
		title: 'Education',
		text: 'At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b',
	},
]
export default WhatGPT3
