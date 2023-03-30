import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


import { Cookies } from "react-cookie";

const cookies = new Cookies()

const memberState = {
  email: null,
  accessToken: null,
  refreshToken: null
}

const loadCookie = () => {

  console.log("load cookie from browser")

  const result = cookies.get("login")

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

const loginSlice = createSlice({
  name:'loginSlice',
  initialState: loadCookie(),
  extraReducers: (builder) => {
    builder.addCase( postServerLogin.fulfilled, (state, action) => {

      console.log("postServerLogin.fulfilled")

      //save with cookie 
      const expires = new Date()
      expires.setUTCDate(expires.getUTCDate() + 30 )

      cookies.set("login", JSON.stringify(action.payload), expires)

      //return value will be next state
      return action.payload

    })
  }
})


export default loginSlice.reducer