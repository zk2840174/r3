import { useNavigate } from "react-router-dom";
import RegisterComponent from "../../components/products/RegisterComponent";


const ProductRegisterPage = () => {

    const navigate = useNavigate()

    const moveToList = () => {
  
      navigate("/products/list")
    }
  

    return ( 
        <RegisterComponent moveToList={moveToList}></RegisterComponent>
     );
}
 
export default ProductRegisterPage;