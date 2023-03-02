import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { user } from '../config/accountAPI';
import { Editor, EditorState } from "draft-js";
import "draft-js/dist/Draft.css";
import CustomButton from '../components/account/CustomButton';
import CategoriesNewArticle from '../components/article/CategoriesNewArticle';

const ArticleNew = () => {

    const navigate = useNavigate();
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")

    const article_save = async (title, content) => {
        console.log(title, content)
    }


    useEffect(() => {
        user() ? navigate("/article_new") : navigate("/authen")
    }, [])

    return (
        <div className='flex flex-row justify-between'>
            <div className='py-2 w-full lg:w-3/5'>
                <p className='text-base text-blac my-2'>New confession</p>

                <div className='rounded-md bg-slate-200 p-5'>
                    <div className='flex flex-col mt-3'>
                        <label className='p-1 text-sm' htmlFor='a_title'>Title</label>
                        <input value={title} onChange={(e) => setTitle(e.target.value)} className='w-full p-2 border rounded' placeholder='How do you feel today?' />
                    </div>
                    <div className='flex flex-col mt-5'>
                        <label className='p-1 text-sm' htmlFor='a_content'>Content</label>
                        <textarea onChange={(e)=>setContent(e.target.value)} defaultValue={content} placeholder={"What do you thinking?"}  className="p-2 mb-5">
                            
                        </textarea>
                    </div>
                <CustomButton 
                style={"w-fit p-2 rounded bg-primary text-white"}
                title={"Save"}
                onClick={()=>{article_save(title, content)}} />
                </div>
            </div>
            <div className='py-2 w-full lg:w-1/5 ml-3'>
                <CategoriesNewArticle />
            </div>
        </div>

    )
}

export default ArticleNew