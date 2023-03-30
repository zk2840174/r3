
import { useState } from "react";
import { useDispatch } from "react-redux";
import { postServerLogin } from "../../reducers/loginSlice";


const initState = {
  email: 'user10@aaa.com',
  pw: '1111'
}

const LoginComponent = () => {

  const [member, setMember] = useState(initState)
  
  const dispatch = useDispatch()

  const changeMember = (e) => {

    member[e.target.name] = e.target.value

    setMember({...member})

  }

  const handleClickLogin = () => {

    dispatch(postServerLogin(member))
    

  }

  return ( 
    <div className = "border-2 border-sky-200 mt-10 p-10"> 
      <div className="flex justify-center mt-10">
        <div className="relative mb-4 flex w-full  justify-center">
          <div className="w-1/5 p-6 text-right font-bold">Email</div>
          <input className="w-2/5 p-6 rounded-r border border-solid border-neutral-300 shadow-md" 
          name="pname"
          type={'text'} 
          value={member.email} 
          onChange={changeMember}>
          </input>
        </div>
      </div>
      <div className="flex justify-center ">
        <div className="relative mb-4 flex w-full  justify-center">
          <div className="w-1/5 p-6 text-right font-bold">Password</div>
          <input className="w-2/5 p-6 rounded-r border border-solid border-neutral-300 shadow-md" 
          name="pname"
          type={'password'} 
          value={member.pw} 
          onChange={changeMember}>
          </input>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="relative mb-4 flex w-3/5 flex-wrap  justify-end">
        <button type="button" 
        className="inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xl text-white "
        onClick={handleClickLogin}
        >
          Login</button>
        </div>
      </div>

    </div>
   );
}
 
export default LoginComponent;