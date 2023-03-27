import { useNavigate, useSearchParams } from "react-router-dom"
import ListComponent from "../../components/products/ListComponent"
import BasicLayout from "../../layouts/BasicLayout"


const ProudctListPage = () => {

  const navigate = useNavigate()

  const [searchParams, setSearchParams] = useSearchParams()
  const page = searchParams.get("page") ||1
  const size = searchParams.get("size") || 10

  const queryObj = {page,size}

  const movePage = (page) => {

    setSearchParams({page,size,date: Date.now()})
    
  }

  const moveToRead = (pno) => {

  }

  const moveToRegister = () => {

    navigate("/products/register")

  }

  return ( 
    <>
      <ListComponent query={queryObj} movePage={movePage}/>
    </>
    );
}
 
export default ProudctListPage;