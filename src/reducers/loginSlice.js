import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


import { Cookies } from "react-cookie";

const memberState = {
  email: null,
  accessToken: null,
  refreshToken: null,
  social:false
}

const loadCookie = () => {

  console.log("load cookie from browser")

  const cookies = new Cookies()

  const result = cookies.get("login", {path:"/"})

  if(!result){
      return memberState
  }else {
      return result
  }
}


export const postServerLogin = createAsyncThunk('postServerLogin', async(member) => {

  const res = await axios.post("http://localhost:8080/members/login", member)

  return res.data


})

export const kakaoServerLogin = createAsyncThunk('kakaoServerLogin', async(authCode) => {

  const res = await axios.get(`http://localhost:8080/kakao/login?authCode=${authCode}`)

  return res.data


})


const loginSlice = createSlice({
  name:'loginSlice',
  initialState: loadCookie(),
  reducers: {
    deleteLogin: (state) => {
    
      const cookies = new Cookies()

      console.log("delete login cookie and reset ")
      cookies.remove('login' , {path: "/", maxAge:0})
      cookies.remove("accessToken", {path: "/", maxAge:0})
      cookies.remove("refreshToken", {path: "/", maxAge:0})

      console.log(memberState)

      return {...memberState}
      
    }
  },
  extraReducers: (builder) => {
    builder.addCase( postServerLogin.fulfilled, (state, action) => {

      console.log("postServerLogin.fulfilled")

      //save with cookie 
      const expires = new Date()
      expires.setUTCDate(expires.getUTCDate() + 30 )

      const cookies = new Cookies()
      cookies.set("login", action.payload, {expires, path:"/"})
      cookies.set("accessToken", action.payload.accessToken, {expires, path:"/"})
      cookies.set("refreshToken", action.payload.refreshToken, {expires, path:"/"})

      //return value will be next state
      return action.payload

    })

    .addCase( kakaoServerLogin.fulfilled, (state, action) => {


      console.log("kakaoServerLogin.fulfilled")

      console.log(action.payload)

      //save with cookie 
      const expires = new Date()
      expires.setUTCDate(expires.getUTCDate() + 30 )

      const cookies = new Cookies()
      cookies.set("login", action.payload, {expires, path:"/"})
      cookies.set("accessToken", action.payload.accessToken, {expires, path:"/"})
      cookies.set("refreshToken", action.payload.refreshToken, {expires, path:"/"})

      return action.payload

    })

  }
})
export const {deleteLogin} = loginSlice.actions

export default loginSlice.reducer