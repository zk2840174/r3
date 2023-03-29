import axios from "axios"


const host = "http://localhost:8080/products"


export const getProductList = async (page = 1 , size = 10, typeStr = '', keyword= '') => {

  const res =  await axios.get(`${host}/list`, {params: {page,size, typeStr, keyword }})

  return res.data

}


export const postProduct = async (product) => {

  const header = {headers: {"Content-Type": "multipart/form-data"}}

  const res = await axios.post(`${host}`, product, header)

  return res.data

}

export const getProduct = async (pno) => {

  const res = await axios.get(`${host}/${pno}`)

  return res.data

}

export const putProduct = async (pno, product) => {

  const header = {headers: {"Content-Type": "multipart/form-data"}}

  const res = await axios.put(`${host}/${pno}`, product, header)

  return res.data

}

export const deleteProduct = async (pno) => {

  const res = await axios.delete(`${host}/${pno}`)

  return res.data


}