import React, { useEffect, useState } from 'react'
import { CATEGORIES, SELECTED_CATEGORIES } from '../../config/constanst'

const CategoriesNewArticle = () => {

    const list_tags = JSON.parse(window.localStorage.getItem(CATEGORIES))

    let selected_tags = JSON.parse(window.localStorage.getItem(SELECTED_CATEGORIES)) && []


    const add_tags = (item) => {
            if (selected_tags.indexOf(item) == -1 && selected_tags.length < 3) {
                selected_tags.push(item)
                window.localStorage.setItem(SELECTED_CATEGORIES, JSON.stringify(selected_tags))
            }else{
               let new_tags = selected_tags.filter(list_item => list_item !== item)
                selected_tags = new_tags
                window.localStorage.setItem(SELECTED_CATEGORIES, JSON.stringify(selected_tags))
            }
    }



    return (
        <React.Fragment>
            <p className='text-base p-2'>Select tags</p>
            <div className='w-full bg-white border rounded-md p-2 flex flex-row flex-wrap'>

                {
                    list_tags?.length > 0 ?
                        list_tags?.map(item => (
                            <button key={item.id} onClick={() => add_tags(item)} className={`p-2 rounded-md border m-1 bg-white hover:bg-black hover:text-white transition-all`}>{item.name}</button>
                        ))
                        :
                        "Create new tag"
                }
            </div>
        </React.Fragment>

    )
}

export default CategoriesNewArticle