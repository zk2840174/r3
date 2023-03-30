import { createSearchParams, useNavigate, useSearchParams } from "react-router-dom";
import CheckLogin from "../../components/commons/CheckLogin";
import ModifyComponent from "../../components/products/ModifyComponent";

const ProductModifyPage = () => {

  const navigate = useNavigate()

  const [searchParams] = useSearchParams()

  const pno = searchParams.get("pno")

  const afterModify = () => {

    const queryObj = createSearchParams({ pno, date: Date.now()})

    navigate({pathname:'/products/read' ,  search: queryObj.toString() })
  }

  const afterDelete = () => {
  
    const queryObj = createSearchParams({ page:1 , size:10, date: Date.now()})

    navigate({pathname:'/products/list' ,  search: queryObj.toString() })
  }

  return ( 
    <>
      <CheckLogin></CheckLogin>
      <ModifyComponent pno = {pno} afterDelete={afterDelete} afterModify={afterModify} ></ModifyComponent>

    </>
   );
}
 
export default ProductModifyPage;