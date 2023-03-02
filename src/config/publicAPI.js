import axios from "axios"
import { HOST_URL } from "./api"
import { ACCESS_TOKEN, TOKEN_ACTIVE, LOGIN_STATE, USER_LOGIN } from './constanst'



const getPublicDataAPI = async (data) => {
    let url = HOST_URL + data
    return await axios.get(url)
}




export { getPublicDataAPI }