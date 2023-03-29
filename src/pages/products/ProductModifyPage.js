import { createSearchParams, useNavigate, useSearchParams } from "react-router-dom";
import ModifyComponent from "../../components/products/ModifyComponent";

const ProductModifyPage = () => {

  const navigate = useNavigate()

  const [searchParams, setSearchParams] = useSearchParams()
  const page = searchParams.get("page") ||1
  const size = searchParams.get("size") || 10
  const typeStr = searchParams.get("typeStr") ||''
  const keyword = searchParams.get("keyword") ||''

  const pno = searchParams.get("pno")

  const afterModify = () => {

    const queryObj = createSearchParams({ pno, date: Date.now()})

    navigate({pathname:'/products/read' ,  search: queryObj.toString() })
  }

  const afterDelete = () => {
  
    const queryObj = createSearchParams({ page:1 , size:size, date: Date.now()})

    navigate({pathname:'/products/list' ,  search: queryObj.toString() })
  }

  return ( 
    <>
      <ModifyComponent pno = {pno} afterDelete={afterDelete} afterModify={afterModify} ></ModifyComponent>

    </>
   );
}
 
export default ProductModifyPage;