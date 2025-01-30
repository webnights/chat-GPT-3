import React from 'react'
import './article.css'
const Article = ({ blogCard }) => {
	return (
		<div className='blog__card'>
			<div className='blog__card-image'>
				<img src={blogCard.image} alt='Картинка блога' />
			</div>
			<div className='blog__card-content'>
				<div className='blog__card-heading'>
					<span>{blogCard.date}</span>
					<h3>{blogCard.title}</h3>
				</div>
				<p className='blog__card-text'>Read Full Article</p>
			</div>
		</div>
	)
}

export default Article
