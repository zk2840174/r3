import axios from "axios"


const host = "http://localhost:8080/products"


export const getProductList = async (page = 1 , size = 10) => {

  const res =  await axios.get(`${host}/list`, {params: {page,size}})

  return res.data

}


export const postProduct = async (product) => {

  const header = {headers: {"Content-Type": "multipart/form-data"}}


  const res = await axios.post(`${host}`, product, header)

  return res.data

}