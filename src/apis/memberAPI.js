import axios from "axios"


export const postLogin =  async (member) => {


  const res = axios.post("http://localhost:8080/members/login", member)


  return res.data


}