
import { useEffect, useState } from "react";
import { getProductList } from "../../apis/productsAPI";
import CustomPagination from "../commons/CustomPagination";


const initState = {
    dtoList:[],
    pageNumList:[],
    pageRequestDTO: null,
    prev: false,
    prevPage: 0,
    nextPage: 0,
    next: false,
    totoalCount: 0,
    prevPage: 0,
    nextPage: 0,
    totalPage: 0,
    current: 0
  }


const ListComponent = ({query, movePage, moveToRead}) => {
    const [serverData, setServerData] = useState(initState)

  useEffect(() => {

    getProductList(query.page, query.size, query.typeStr, query.keyword).then(data => {
      console.log(data)
      setServerData(data)
    })

  },[query])

  const onPageChange = (pageNum) => {

    console.log(pageNum)

    movePage(pageNum)
  }  
  return ( 
    <div className = ""> 
      <div className="flex justify-center mt-10 bg-blue-100">        
        <table className="min-w-full text-left text-sm font-light">
          <thead className="border-b font-medium dark:border-neutral-500">
            <tr>
              <th scope="col" className="px-6 py-4">#</th>
              <th scope="col" className="px-6 py-4">Image</th>
              <th scope="col" className="px-6 py-4">Name</th>
              <th scope="col" className="px-6 py-4">Price</th>
              <th scope="col" className="px-6 py-4">Status</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {serverData.dtoList.map( (product) => {
              const images = product.productImageDTOList
              const imageFile = images[0].thumb

              return (
            <tr 
            key={product.pno} 
            className="border-b dark:border-neutral-500"
            onClick={() => moveToRead(product.pno)}
            >
              <td className="whitespace-nowrap px-6 py-4 font-medium">{product.pno}</td>
              <td className="whitespace-nowrap px-6 py-4">
                <img src={'http://localhost:8080/upload/view/'+ imageFile}></img>
              </td>
              <td className="whitespace-nowrap px-6 py-4">
                {product.pname}
              </td>
              <td className="whitespace-nowrap px-6 py-4">{product.price}</td>
              <td className="whitespace-nowrap px-6 py-4">{product.status}</td>
            </tr>
              )
            })}
            
          </tbody>
        </table>      
      </div>
      <div className="m-1 w-full justify-center flex mt-10 ">
        <CustomPagination {...serverData} onPageClick={onPageChange}></CustomPagination>
      </div>
    </div>
  );
}
 
export default ListComponent;