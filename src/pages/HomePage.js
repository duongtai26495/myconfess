import React, { useEffect, useState } from 'react'
import ArticleList from '../components/article/ArticleList'
import Tags from '../components/article/Tags'
import { CATEGORIES } from '../config/constanst'
import { getPublicDataAPI } from '../config/publicAPI'
import Loading from '../components/common/Loading'
const HomePage = () => {

    const [articles, setArticles] = useState([])
    const [tags, setTags] = useState(JSON.parse(window.localStorage.getItem(CATEGORIES)))
    const [isLoaded, setLoaded] = useState(false)
    useEffect(() => {
        const getDataAPI = async () => {
            setLoaded(false)
            const result_articles = await getPublicDataAPI("")
            const result_categories = await getPublicDataAPI(CATEGORIES)
            if (result_articles.status == 200) {
                setArticles(result_articles.data.content)
            }
            if (result_categories.status == 200) {
                window.localStorage.setItem(CATEGORIES, JSON.stringify(result_categories.data))
                setTags(JSON.parse(window.localStorage.getItem(CATEGORIES)))
            }

            setLoaded(true)
        }

        getDataAPI()
    }, [])


    return (
        isLoaded
            ?
            <div className="loading_gif">
                <div className='bg-gray-200 rounded-sm mt-1'>
                    <Tags tags={tags} style={'flex overflow-auto'} />
                </div>
                <div className='w-full mt-2 gap-5 columns-2 lg:columns-4 xl:columns-6 justify-start'>
                    <ArticleList items={articles} />
                </div>
            </div>
            :
            <Loading />
    )
}

export default HomePage