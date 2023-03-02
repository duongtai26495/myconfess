import React from 'react'
import { ARTICLES } from '../../data/articles-data'
import ArticleCard from './ArticleCard'
import Empty from './Empty'

const ArticleList = ({items}) => {

    const articles = items
    return (
        articles.length > 0 ?
            articles?.map(item => (
                <ArticleCard key={item.id} article={item} />
            ))
            :
            <Empty type={"article"} />
    )
}

export default ArticleList