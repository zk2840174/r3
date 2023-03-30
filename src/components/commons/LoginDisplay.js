

import useCheckLogin from "../../hooks/useCheckLogin";

const LoginDisplay = () => {

  const member = useCheckLogin()

  const {email} = member

  return (
    <div className="w-full bg-blue-400 font-extrabold flex justify-end px-10 text-lg text-white p-4">
      {email}

      {email?
      <div className="text-sm text-white pl-4">Logout</div> 
      :
      <></>
      }

    </div>
  )
    
}
 
export default LoginDisplay;