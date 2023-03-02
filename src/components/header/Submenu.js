import React from 'react'

const Submenu = ({items}) => {
  return (
    <ul className='w-full roudned'>
        {items.size > 0
        && 
        items.map(item => (
            <li className='w-full text-sm p-2 rounded' key={item.id}>{item.name}</li>
        ))
        }
    </ul>
  )
}

export default Submenu