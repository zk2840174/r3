

import { useDispatch } from "react-redux";
import useCheckLogin from "../../hooks/useCheckLogin";
import { deleteLogin } from "../../reducers/loginSlice";
import { useState } from "react";
import CustomModal from "./CustomModal";

const LoginDisplay = () => {

  const member = useCheckLogin()

  const {email} = member

  const dispatch = useDispatch()

  const [openNow, setOpenNow] = useState(false)

  const handleClickLogout = () => {

    dispatch(deleteLogin())
    setOpenNow(true)
  }

  


  return (
    <div className="w-full bg-blue-400 font-extrabold flex justify-end px-10 text-lg text-white p-4">
      {email}

      {email?
      <div className="text-sm text-white pl-4" onClick={handleClickLogout}>Logout</div>
       
      :
      <></>
      }

      <CustomModal
      title={'로그아웃'}
      content={'로그아웃'}  
      openNow={openNow} 
      callback={ () => {
          setOpenNow(false)
      } 
      }>
      </CustomModal>  

    </div>
  )
    
}
 
export default LoginDisplay;