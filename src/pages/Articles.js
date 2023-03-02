import React, { useState, useEffect } from 'react'
import ArticleList from '../components/article/ArticleList'
import SortBar from '../components/article/SortBar'
import { CATEGORIES } from '../config/constanst'
import { getPublicDataAPI } from '../config/publicAPI'

const Articles = () => {

  const [articles, setArticles] = useState([])
  const [tags, setTags] = useState(JSON.parse(window.localStorage.getItem(CATEGORIES)))
  useEffect(() => {
    const getDataAPI = async () => {
      const result_articles = await getPublicDataAPI("")
      const result_categories = await getPublicDataAPI(CATEGORIES)
      if (result_articles.status == 200) {
        setArticles(result_articles.data.content)
      }
      if (result_categories.status == 200) {
        window.localStorage.setItem(CATEGORIES, JSON.stringify(result_categories.data))
        setTags(JSON.parse(window.localStorage.getItem(CATEGORIES)))
      }
    }

    getDataAPI()
  }, [])
  return (
    <React.Fragment>
      <SortBar />
      <div className='w-full mt-2 gap-5 columns-2 lg:columns-3 xl:columns-5'>
        <ArticleList items={articles} />
      </div>
    </React.Fragment>
  )
}

export default Articles