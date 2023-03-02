import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { signupWuser } from '../../config/accountAPI'
import CustomButton from './CustomButton'
import JoinWithSocialButton from './JoinWithSocialButton'
import SocialAuthen from './SocialAuthen'

const Register = () => {

    const navigate = useNavigate()

    const [isLoading, setLoading] = useState(false)
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [full_name, setFull_name] = useState("")
    const [email, setEmail] = useState("")

    const register = async () => {
        if(username.length < 3 || full_name.length < 3 || email.length < 5 || password.length <3){

        }
        else{
            setLoading(true)
            var user = {
                full_name,
                username,
                email,
                password
            }
    
            const result = await signupWuser(user)
            console.log(result)
            if (result.status == 200) {
                navigate("/account")
            }
    
        }
      
    }

    return (
        <React.Fragment>

            <div className='w-full flex flex-col my-1'>
                <label htmlFor='fullname_register my-3'><p className='text-sm text-secondary italic'>Full name</p></label>
                <input id='fullname_register' type={'text'} value={full_name} className="p-2 rounded-sm" placeholder="Full name" onChange={(e) => { setFull_name(e.target.value) }} />
            </div>
            <div className='w-full flex flex-col my-1'>
                <label htmlFor='email_register my-3'><p className='text-sm text-secondary italic'>Email</p></label>
                <input id='email_register' type={'email'} value={email} className="p-2 rounded-sm" placeholder="Email" onChange={(e) => { setEmail(e.target.value) }} />
            </div>
            <div className='w-full flex flex-col my-1'>
                <label htmlFor='username_register my-3'><p className='text-sm text-secondary italic'>Username</p></label>
                <input id='username_register' type={'text'} value={username} className="p-2 rounded-sm" placeholder="Username" onChange={(e) => { setUsername(e.target.value) }} />
            </div>
            <div className='w-full flex flex-col my-3'>
                <label htmlFor='password_register my-1' ><p className='text-sm text-secondary italic'>Password</p></label>
                <input id='password_register' type={'password'} value={password} className="p-2 rounded-sm" placeholder="Password" onChange={(e) => { setPassword(e.target.value) }} />
            </div>
            <CustomButton
                onClick={register}
                style={'bg-black text-primary rounded-sm mt-7 p-2 text-center font-bold hover:bg-white hover:text-white transition-all'}
                title="Join now"
                isLoading={isLoading}
            />
           <SocialAuthen />
        </React.Fragment>
    )
}

export default Register