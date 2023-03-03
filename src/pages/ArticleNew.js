import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { user } from '../config/accountAPI';
import { Editor, EditorState } from "draft-js";
import "draft-js/dist/Draft.css";
import CustomButton from '../components/account/CustomButton';
import CategoriesNewArticle from '../components/article/CategoriesNewArticle';
import { FEATURE_IMAGE_NEW_ARTICLE, NEW_FEATURE_IMAGE, SELECTED_CATEGORIES, SET_DISPLAY_NEW_ARTICLE } from '../config/constanst';
import NewArticleSidebar from '../components/article/NewArticleSidebar';
import ImageNewArticle from '../components/article/ImageNewArticle';
import { saveNewArticle, uploadNewImage } from '../config/articleAPI';

const ArticleNew = () => {

    const navigate = useNavigate();
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")

    const article_save = async (title, content) => {
        let display = Number(window.localStorage.getItem(SET_DISPLAY_NEW_ARTICLE))
        let categories = JSON.parse(window.localStorage.getItem(SELECTED_CATEGORIES))
        let image_url = window.localStorage.getItem(NEW_FEATURE_IMAGE)

        if (categories.length > 0 && title !== "" && content !== "") {
            let article = {
                title,
                content,
                categories,
                display,
                image_url
            }

            const result = await saveNewArticle(article)
            if (result.status == 200) {
                window.localStorage.removeItem(NEW_FEATURE_IMAGE)
                window.localStorage.removeItem(SELECTED_CATEGORIES)
                navigate("/")
            }
        }

    }


    useEffect(() => {
        user() ? navigate("/article_new") : navigate("/authen")
    }, [])

    return (
        <div className='flex flex-col md:flex-row justify-between'>
            <div className='py-2 w-full md:4/5 lg:w-3/5'>
                <div className='rounded-md bg-slate-200 p-5'>
                <p className='text-base text-black font-bold -mt-2 mb-2'>New confession</p>
                    <div className='flex flex-col mt-3'>
                        <label className='p-1 text-sm' htmlFor='a_title'>Title</label>
                        <input value={title} onChange={(e) => setTitle(e.target.value)} className='w-full p-2 border rounded' placeholder='How do you feel today?' />
                    </div>
                    <div className='flex flex-col mt-5'>
                        <label className='p-1 text-sm' htmlFor='a_content'>Content</label>
                        <textarea onChange={(e) => setContent(e.target.value)} defaultValue={content} placeholder={"What do you thinking?"} className="p-2 mb-5">

                        </textarea>
                    </div>
                    <CustomButton
                        style={"w-fit text-center font-bold p-2 rounded bg-primary text-white"}
                        title={"Save"}
                        onClick={() => { article_save(title, content) }} />
                </div>
            </div>
            <div className='py-2 w-full md:w-2/5 lg:w-1/5 ml-0 md:ml-3'>
                <NewArticleSidebar />
            </div>
        </div>

    )
}

export default ArticleNew