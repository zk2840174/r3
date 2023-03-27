import axios from "axios"


export const postUploadFiles = async (files) => {

    const header = {
        headers: {
            "Content-Type": "multipart/form-data",
        }
    }

    const res = await axios.post('http://localhost:8080/upload/', files, header)

    return res.data

}

export const deleteUploadFile = async (fileName) => {

    const res = await axios.delete(`http://localhost:8080/upload/remove/${fileName}`)

}

