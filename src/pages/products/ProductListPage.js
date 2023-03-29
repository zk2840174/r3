import { useState } from "react"
import { createSearchParams, useNavigate, useSearchParams } from "react-router-dom"
import ListComponent from "../../components/products/ListComponent"
import ListSearchComponent from "../../components/products/ListSearchComponent"
import BasicLayout from "../../layouts/BasicLayout"


const ProudctListPage = () => {

  const navigate = useNavigate()

  const [searchParams, setSearchParams] = useSearchParams()
  const page = searchParams.get("page") ||1
  const size = searchParams.get("size") || 10
  const typeStr = searchParams.get("typeStr") ||''
  const keyword = searchParams.get("keyword") ||''

  const queryObj = {page,size , typeStr, keyword}

  const movePage = (page) => {

    setSearchParams({page,size, typeStr, keyword, date: Date.now()})
    
  }

  const moveToRead = (pno) => {

    const queryObj = createSearchParams({ pno, page,size, typeStr, keyword, date: Date.now()})

    navigate({pathname:'/products/read' ,  search: queryObj.toString() })

  }



  return ( 
    <>
      
      <ListSearchComponent moveToRead={moveToRead}></ListSearchComponent>

      <ListComponent query={queryObj} movePage={movePage} moveToRead={moveToRead}/>
    </>
    );
}
 
export default ProudctListPage;