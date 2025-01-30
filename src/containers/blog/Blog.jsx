import React from 'react'
import './blog.css'
import { blog01, blog02, blog03, blog04, blog05 } from './imports'
import { Article } from '../../components'
const Blog = () => {
	return (
		<div className='blog section__padding' id='library'>
			<h2 className='blog__title gradient__text'>
				A lot is happening, <br /> We are blogging about it.
			</h2>
			<div className='blog__container'>
				{blogCards.map((blogCard) =>(
					<Article blogCard={blogCard} key={blogCard.id}/>
				))}
			</div>
		</div>
	)
}

const blogCards = [
	{
		id: 1,
		image: blog01,
		date: 'Sep 26, 2021',
		title: 'GPT-3 and Open  AI is the future. Let us exlore how it is?',
	},
	{
		id: 2,
		image: blog02,
		date: 'Sep 26, 2021',
		title: 'GPT-3 and Open  AI is the future. Let us exlore how it is?',
	},
	{
		id: 3,
		image: blog03,
		date: 'Sep 26, 2021',
		title: 'GPT-3 and Open  AI is the future. Let us exlore how it is?',
	},
	{
		id: 4,
		image: blog04,
		date: 'Sep 26, 2021',
		title: 'GPT-3 and Open  AI is the future. Let us exlore how it is?',
	},
	{
		id: 5,
		image: blog05,
		date: 'Sep 26, 2021',
		title: 'GPT-3 and Open  AI is the future. Let us exlore how it is?',
	},
]

export default Blog
