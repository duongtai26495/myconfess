import React from 'react'
import { Link } from 'react-router-dom'
import { HOST_URL } from '../../config/api'

const ArticleItemSidebar = ({ item }) => {
    var author = item.author
    return (

        <Link to={"/article/"+item.id}>
            <div className='w-full flex flex-col lg:flex-row  mb-5 rounded-sm overflow-hidden'>
                <img src={HOST_URL + "image/" + item.image_url} className="w-full h-full lg:w-1/2 max-h-48 object-cover" />
                <div className='flex flex-col justify-between w-full lg:w-1/2'>
                    <p className='text-md p-2 font-bold'>{item.title}</p>
                    <div className='w-full flex flex-row justify-start gap-2 p-2 bg-primary items-center'>
                        <img src={HOST_URL + "image/profile/" + author.profile_image} className="rounded-full object-cover w-10 h-10" />
                        <p className='text-sm   text-white'>{author.full_name}</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default ArticleItemSidebar