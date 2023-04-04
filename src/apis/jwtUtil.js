import axios from "axios";

import { Cookies } from "react-cookie";


const jwtAxios = axios.create()

const cookies = new Cookies()


//before request
const reqFn = (config) => {
    console.log("before request.............")

    const accessToken = cookies.get("accessToken",{path:"/"})

    if(!accessToken){
      throw new Error("AccessToken is null")
    }

    // console.log("ACCESSTOKEN:")
    // console.log(loginCookie)

    config.headers.Authorization = `Bearer ${accessToken}`

    
    return config
}


//fail request
const reqFail = (err) => {

    console.log("request error............")

    return Promise.reject(err)
}


const refreshJWTS =  async () => {

    const cookieValue = cookies.get("login",{path:"/"})

    console.log("-----------refreshJWTS-----------")
    //console.log(cookieValue)
    


    const res = await axios.post('http://localhost:8080/members/refreshJWT', cookieValue)

    //console.log(res.data)

    if(res.data.result === 'refreshed'){
        const expires = new Date()
        expires.setUTCDate(expires.getUTCDate() + 30 )

        const {email, accessToken, refreshToken} = res.data

        cookies.set("login", {email,accessToken, refreshToken}, {path:'/', expires })
        cookies.set("accessToken", accessToken, {path:'/', expires })
        cookies.set("refreshToken", refreshToken, {path:'/', expires })

        return res.data
    }

    //console.log("refresh result " + res.data.result)

    throw new Error("Login")

}


//before return response
const resFn = async (res) => {
    console.log("before return response...........")

    if(res.data.error === 'Expired'){

        console.log("Expired Access Token")

        const refreshData = await refreshJWTS()

        //원래 호출하려고 했던 요청 
        const originalRequest = res.config

        originalRequest.headers.Authorization = `Bearer ${refreshData.accessToken}`

        return await axios(originalRequest)
    }

    return res
}

//faile response
const resFail = (err) => {
    console.log("response fail error.............")

    console.log(err)

    return Promise.reject(err);
}

jwtAxios.interceptors.request.use( reqFn, reqFail )

jwtAxios.interceptors.response.use( resFn, resFail)



export default jwtAxios