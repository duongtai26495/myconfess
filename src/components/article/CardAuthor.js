import React from 'react'
import { HOST_URL } from '../../config/api'

const CardAuthor = ({author}) => {
  return (
    <div className='ml-1 flex-1 flex-row gap-2 items-center flex h-full'>
    <img className='card-avatar ' src={HOST_URL + "image/profile/"+ author.profile_image} />
    <p className='text-white text-xs font-semibold'>{author.full_name}</p>
    </div>
    
  )
}

export default CardAuthor