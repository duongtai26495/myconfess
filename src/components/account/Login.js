import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ACCESS_TOKEN, LOGIN_STATE, TOKEN_ACTIVE } from '../config/constanst'
import { loginWup } from '../config/functions'
import CustomButton from './CustomButton'

const Login = () => {

    const navigate = useNavigate()

    const [isLoading, setLoading] = useState(false)
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const passwordRef = useRef()
    const loginBtn = useRef()

    const login = async () => {
        if (username === '' || password === '') {

        }
        else {
            setLoading(true)
            var user = {
                username,
                password
            }

            const result = await loginWup(user)
            console.log(result)
            if (result.status == 200) {
                let data = result.data
                window.localStorage.setItem(LOGIN_STATE, true)
                window.localStorage.setItem(ACCESS_TOKEN, data.access_token)
                window.localStorage.setItem(TOKEN_ACTIVE, true)
                navigate("/account")
                setLoading(false)
            }

        }

    }


    return (
        <div className='w-full mt-10 xl:w-1/2 flex flex-row border-none lg:border m-auto shadow-none md:shadow-md'>
            <div className='hidden md:block w-1/2 lg:w-3/5'>
                <img src='https://random.imagecdn.app/v1/image?width=300&height=200' className='w-full object-cover h-full' />
            </div>
            <div className='w-full md:w-1/2 lg:w-2/5 p-2 bg-slate-300'>
                <p className='text-2xl font-bold my-10'>Login</p>
                <div className='w-full flex flex-col my-1'>
                    <label htmlFor='username_login my-1'><p className='text-sm italic'>Username</p></label>
                    <input id='username_login' type={'text'} value={username} className="p-1 rounded-sm" placeholder="Username" onChange={(e) => { setUsername(e.target.value) }} />
                </div>
                <div className='w-full flex flex-col my-1'>
                    <label htmlFor='password_login my-1' ><p className='text-sm italic'>Password</p></label>
                    <input id='password_login' type={'password'} value={password} className="p-1 rounded-sm" placeholder="Password" onChange={(e) => { setPassword(e.target.value) }} />
                </div>
                <CustomButton
                    onClick={login}
                    style={'bg-primary text-white text-center font-bold'}
                    title="Go"
                    isLoading={isLoading}
                />
            </div>
        </div>

    )
}

export default Login