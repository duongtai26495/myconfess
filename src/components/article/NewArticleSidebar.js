import React from 'react'
import ActiveNewArticle from './ActiveNewArticle'
import CategoriesNewArticle from './CategoriesNewArticle'
import ImageNewArticle from './ImageNewArticle'

const NewArticleSidebar = () => {
    return (
        <div className='w-full flex flex-col'>
            <ActiveNewArticle />
            <CategoriesNewArticle />
            <ImageNewArticle />
        </div>
    )
}

export default NewArticleSidebar