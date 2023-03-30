
import { createSearchParams, useNavigate, useSearchParams } from "react-router-dom"
import ReadComponent from "../../components/products/ReadComponent"


const ProductReadPage = () => {

  const navigate = useNavigate()

  const [searchParams] = useSearchParams()
  const page = searchParams.get("page") ||1
  const size = searchParams.get("size") || 10
  const typeStr = searchParams.get("typeStr") ||''
  const keyword = searchParams.get("keyword") ||''

  const pno = searchParams.get("pno")



  const handleClickList = (e) => {

    const queryObj = createSearchParams({  page,size, typeStr, keyword, date: Date.now()})

    navigate({pathname:'/products/list' ,  search: queryObj.toString() })
   
  }

  const handleClickModify = (e) => {

    const queryObj = createSearchParams({ pno, page,size, typeStr, keyword, date: Date.now()})

    navigate({pathname:'/products/modify' ,  search: queryObj.toString() })
   
  }


  return ( 
    <>

      <ReadComponent pno={pno}></ReadComponent>
      <div className="bg-blue-200 w-full justify-end  flex p-4">
      <button type="button" 
        className="inline-block rounded  bg-green-400 px-6 pt-2.5 mr-10 pb-2 text-lg text-white"
        onClick={handleClickModify}
        >
          Mod/Del</button>

      <button type="button" 
      className="inline-block rounded bg-primary px-6 pt-2.5 pb-2 mr-10 text-lg text-white "
      onClick={handleClickList}
      >
        List</button>

      </div>
    </>
   );
}
 
export default ProductReadPage;