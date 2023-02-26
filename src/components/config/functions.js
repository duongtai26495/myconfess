import axios from "axios"
import { HOST_URL } from "./api"


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



export {loginWup}