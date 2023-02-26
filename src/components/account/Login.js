import React, { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ACCESS_TOKEN, LOGIN_STATE, TOKEN_ACTIVE } from '../config/constanst'
import { loginWup } from '../config/functions'
import CustomButton from './CustomButton'
import JoinWithSocialButton from './JoinWithSocialButton'

const Login = () => {

    const navigate = useNavigate()

    const [isLoading, setLoading] = useState(false)
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const passwordRef = useRef()
    const loginBtn = useRef()

    const login = async () => {
        if (username === '' || password === '' || username.length < 3 || password.length < 6) {

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
            <React.Fragment>
            <div className='columns-3 gap-3 mb-5 '>
            <JoinWithSocialButton  
                title={"Login with Google"}
                style={"text-sm bg-white text-black"}
            />
            <JoinWithSocialButton  
                title={"Login with Facebook"}
                style={"text-sm bg-blue-600 text-white"}
            />
            <JoinWithSocialButton  
                title={"Login with Pinterest"}
                style={"text-sm bg-red-600 text-white"}
            />
            </div>
            
                <div className='w-full flex flex-col my-1'>
                    <label htmlFor='username_login my-3'><p className='text-sm text-secondary italic'>Username</p></label>
                    <input id='username_login' type={'text'} value={username} className="p-3 rounded-sm" placeholder="Username" onChange={(e) => { setUsername(e.target.value) }} />
                </div>
                <div className='w-full flex flex-col my-3'>
                    <label htmlFor='password_login my-1' ><p className='text-sm text-secondary italic'>Password</p></label>
                    <input id='password_login' type={'password'} value={password} className="p-3 rounded-sm" placeholder="Password" onChange={(e) => { setPassword(e.target.value) }} />
                </div>
                <CustomButton
                    onClick={login}
                    style={'bg-gray-100 text-primary rounded-sm mt-7 p-3 text-center font-bold hover:bg-white transition-all'}
                    title="Go"
                    isLoading={isLoading}
                />
            <p className='my-3 italic hover:text-black text-white transition-all'><Link to={""} >Forgot password?</Link></p>
            </React.Fragment>
    )
}

export default Login