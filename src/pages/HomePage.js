import React from 'react'
import ArticleList from '../components/article/ArticleList'
import { loginWup } from '../components/config/functions'

const HomePage = () => {


    return (
        <React.Fragment>
        <div className='w-full mt-2 gap-5 columns-2 lg:columns-3 xl:columns-5'>
            <ArticleList />
        </div>
        </React.Fragment>
        
    )
}

export default HomePage