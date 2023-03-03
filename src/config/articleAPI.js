import axios from "axios"
import { HOST_URL } from "./api"
import { ACCESS_TOKEN, TOKEN_ACTIVE, LOGIN_STATE, USER_LOGIN } from './constanst'


const saveNewArticle = async ( article ) => {
  let url = HOST_URL + "diary/save"
  let token = window.localStorage.getItem(ACCESS_TOKEN)

  let config = {
    method: 'POST',
    maxBodyLength: Infinity,
    url,
    headers: {
      'Authorization': 'Bearer ' + token,
      'Content-Type': 'application/json'
    },
    data: article
  };


  return await axios(config)
    .then(function (response) {
      return response
    })
    .catch(function (error) {
      console.log(error);
    });
}

const uploadNewImage = async (data) => {
 
  let url = HOST_URL + "user/upload_image"
  let token = window.localStorage.getItem(ACCESS_TOKEN)


  var config = {
    method: 'POST',
    maxBodyLength: Infinity,
    url,
    headers: {
      'Authorization': 'Bearer ' + token,
    },
    data
  };

  return await axios(config)
    .then(function (response) {
      return response.data
    })
    .catch(function (error) {
      console.log(error);
    });
}

export { saveNewArticle, uploadNewImage }