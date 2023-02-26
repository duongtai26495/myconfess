import React from 'react'

const CardAuthor = ({author}) => {
  return (
    <div className='ml-1 flex-1 flex-row gap-2 items-center flex h-full'>
    <img className='card-avatar' src={author.avatar} />
    <p className='text-white text-xs font-semibold'>{author.name}</p>
    </div>
    
  )
}

export default CardAuthor