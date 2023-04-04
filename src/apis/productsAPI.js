import axios from "axios"
import jwtAxios from "./jwtUtil"


const host = "http://localhost:8080/products"


export const getProductList = async (page = 1 , size = 10, typeStr = '', keyword= '') => {

  //const res =  await axios.get(`${host}/list`, {params: {page,size, typeStr, keyword }})

  const res =  await jwtAxios.get(`${host}/list`, {params: {page,size, typeStr, keyword }})

  return res.data

}


export const postProduct = async (product) => {

  const header = {headers: {"Content-Type": "multipart/form-data"}}

  const res = await jwtAxios.post(`${host}`, product, header)

  return res.data

}

export const getProduct = async (pno) => {

  const res = await jwtAxios.get(`${host}/${pno}`)

  return res.data

}

export const putProduct = async (pno, product) => {

  const header = {headers: {"Content-Type": "multipart/form-data"}}

  const res = await jwtAxios.put(`${host}/${pno}`, product, header)

  return res.data

}

export const deleteProduct = async (pno) => {

  const res = await jwtAxios.delete(`${host}/${pno}`)

  return res.data


}