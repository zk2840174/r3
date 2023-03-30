import { useSelector } from "react-redux"


export default function useCheckLogin(){

  const member = useSelector(state => state.loginSlice)

  return member

}