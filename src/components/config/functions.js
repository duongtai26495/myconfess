import axios from "axios"
import { HOST_URL } from "./api"
import {ACCESS_TOKEN, TOKEN_ACTIVE, LOGIN_STATE,  USER_LOGIN} from './constanst'

const loginWup = async (user) =>{
    let url = HOST_URL + "user/login"
    var data = new FormData()
    data.append('username',user.username)
    data.append('password',user.password)

    var config = {
        method: 'POST',
        url,
        data
    }
    return await axios(config, setTimeout(5000))
    .then(response =>(
         response
    ))
    .catch(error=>(
        console.log(error)
    ))
}


const signout = () =>{
    window.localStorage.removeItem(ACCESS_TOKEN)
    window.localStorage.removeItem(TOKEN_ACTIVE)
    window.localStorage.removeItem(LOGIN_STATE)
    window.localStorage.removeItem(USER_LOGIN)
    
}


export {loginWup, signout}