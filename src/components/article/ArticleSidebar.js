import React, { useEffect, useState } from 'react'
import { CATEGORIES } from '../../config/constanst'
import { getPublicDataAPI } from '../../config/publicAPI'
import ArticleItemSidebar from './ArticleItemSidebar'
import Tags from './Tags'

const ArticleSidebar = ({current_id}) => {

    const filter_sidebar = (list, id) => {
        const result = list.filter(item => item.id !== id)
        return result;
    }
        const [articles, setArticles] = useState([])
        const [tags, setTags] = useState(JSON.parse(window.localStorage.getItem(CATEGORIES)))
    useEffect(()=>{
        const getDataAPI = async () => {
            const result_articles = await getPublicDataAPI("")
            const result_categories = await getPublicDataAPI(CATEGORIES)
            if(result_articles.status == 200){
            setArticles(filter_sidebar(result_articles.data.content, current_id))
            }
            if(result_categories.status == 200){
                window.localStorage.setItem(CATEGORIES, JSON.stringify(result_categories.data))
                setTags(JSON.parse(window.localStorage.getItem(CATEGORIES)))
            }
        }

        getDataAPI()
    },[current_id])


  return (
    <div className='hidden md:flex flex-col w-4/12 items-start px-3'>
        <Tags tags={tags} style={"flex"}/>
        <div className='w-full flex-col mt-2'>
            {
                articles?.length > 0 && 
                articles.map(item => (
                    <ArticleItemSidebar key={item.id} item={item} />
                ))
            }
        </div>
    </div>
  )
}

export default ArticleSidebar