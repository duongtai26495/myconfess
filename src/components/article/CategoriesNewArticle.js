import React, { useEffect, useState } from 'react'
import { CATEGORIES, SELECTED_CATEGORIES } from '../../config/constanst'

const CategoriesNewArticle = () => {

    const list_tags = JSON.parse(window.localStorage.getItem(CATEGORIES))

    const [selected_tags, setTags] = useState(JSON.parse(window.localStorage.getItem(SELECTED_CATEGORIES)) ?? [])

    useEffect(()=>{
        window.localStorage.setItem(SELECTED_CATEGORIES, JSON.stringify(selected_tags))
    },[selected_tags])

    const add_tags = (item) => {
        if (selected_tags.find(e => e.id == item.id) == null && selected_tags.length < 3) {
            setTags(selected_tags => [...selected_tags, item])
        }
        else {
            let new_list = selected_tags.filter(e => e.id != item.id);
            setTags(new_list)
        }
    }


    return (
        <div className='w-full flex flex-col border rounded-md p-2 '>
            <p className='text-base p-2'>Select tags</p>
            <div className='w-full bg-white flex flex-row flex-wrap'>

                {
                    list_tags?.length > 0 ?
                        list_tags?.map(item => (
                            <button key={item.id} onClick={() => add_tags(item)} className={`p-2 rounded-md border m-1 ${selected_tags.find(e => e.id == item.id) == null ? 'bg-white' : 'bg-primary text-white'}  hover:bg-black hover:text-white transition-all`}>{item.name}</button>
                        ))
                        :
                        "Create new tag"
                }
                
            {/* <p className='w-full p-2 mt-5 m-1 rounded bg-white shadow hover:shadow-lg border cursor-pointer transition-all text-center'>Create new tag</p> */}
            </div>
        </div>

    )
}

export default CategoriesNewArticle