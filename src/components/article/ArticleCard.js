import React from 'react'
import { Link } from 'react-router-dom'
import CardAuthor from './CardAuthor'
import Readmore from './Readmore'
import Tags from './Tags'

const ArticleCard = ({ article }) => {
    return (
        <div className='w-full rounded-lg break-inside-avoid mb-5 hover:shadow-lg transition-all article-card relative overflow-hidden'>
            <Tags style={'flex absolute'} tags={article.tags} />
            <Link to={"/article/id=" + article.id}>
                <img src={article.feature_image} className="w-full h-full object-cover card-feature-image" />
                <div className='card-preview z-50 left-0 bg-opacity-30 bg-slate-200 flex flex-col transition-all'>
                    <p className='text-md text-black font-bold mb-2 p-2'>{article.title}</p>
                    <p className='text-sm text-black italic mb-2 p-2'>{article.description}...</p>
                    <div className='flex-row justify-between items-center bg-black flex py-1'>
                        <CardAuthor author={article.author} />
                        <Readmore />
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default ArticleCard