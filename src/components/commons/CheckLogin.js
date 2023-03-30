import { Navigate } from "react-router-dom";
import useCheckLogin from "../../hooks/useCheckLogin";


const CheckLogin = () => {

  const member = useCheckLogin()
  const {accessToken, refresToken} = member


  if( !accessToken && !refresToken){
    return (
      <Navigate replace to="/login"/>
    )

  }

  return ( 
      <></>
   );
}
 
export default CheckLogin;


