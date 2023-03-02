import React from 'react'
import { Link } from 'react-router-dom'
import { HOST_URL } from '../../config/api'
import CardAuthor from './CardAuthor'
import Readmore from './Readmore'
import Tags from './Tags'
import { Parser } from 'html-to-react'

const ArticleCard = ({ article }) => {
    return (
        <div className='w-full rounded-sm break-inside-avoid mb-5 hover:shadow-md transition-all article-card relative overflow-hidden'>
            <Tags style={'flex absolute'} tags={article.categories} />
            <Link to={"/article/" + article.id}>
                <img src={HOST_URL + "image/" + article.image_url} className="w-full h-full object-cover card-feature-image" />
                <div className='card-preview z-50 left-0 bg-opacity-30 bg-slate-200 flex flex-col transition-all'>
                    <p className='text-md text-black font-bold mb-2 p-2'>{article.title}</p>

                    <p className='text-sm text-black italic mb-2 p-2'>{Parser().parse(article.content.length > 100 ? article.content.slice(0,100)+"..." : article.content)} </p>
                    <div className='flex-row justify-between items-center bg-secondary flex py-1'>
                        <CardAuthor author={article.author} />
                        <Readmore />
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default ArticleCard