import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ArticleSidebar from '../components/article/ArticleSidebar'
import { HOST_URL } from '../config/api'
import { getPublicDataAPI } from '../config/publicAPI'
import Tags from "../components/article/Tags"
import Comments from '../components/article/Comments'
const Article = () => {

    const navigate = useNavigate()
    const { id } = useParams()
    const [article, setArticle] = useState({})
    const [comments, setComments] = useState([])
    const [isLoaded, setLoaded] = useState(false)
    useEffect(() => {

        const getArticle = async () => {
            const result = await getPublicDataAPI("diary/id=" + id)
            if (result.status == 200) {
                const data = result.data.diary
                setArticle(data)
                setLoaded(true)
            } else {
                navigate("/")
            }
        }

        getArticle()
    }, [id]) 
    return (
        isLoaded &&
        <div className='w-full flex flex-row flex-wrap'>
          
                <div className='w-full md:w-8/12'>
                    <img src={HOST_URL + "image/" + article.image_url} className="w-full object-cover article-image" />
                    <p className='text-2xl my-2 text-black font-semibold'>{article.title.toUpperCase()}</p>
                    <Tags style={'flex -ml-2'} tags={article.categories} />
                    <p className='text-base mt-2'>{article.content}</p>
                    <Comments comments={article.comments} style={""} />
                </div>
            <ArticleSidebar current_id={article.id} />
        </div>
    )
}

export default Article