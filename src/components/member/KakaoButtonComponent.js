
import { Link } from "react-router-dom";

const REST_API_KEY = 'd0b91c8f74628913ad370e23da5426e9'
const REDIRECT_URI ='http://localhost:3000/oauth/kakao'

const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;


const KakaoButtonComponent = () => {
  return ( 
    <div className="inline-block rounded bg-yellow-500 px-6 pt-2.5 pb-2 text-xl text-white">
      <Link to={kakaoURL}>KAKAO LOGIN</Link>     
    </div>
  );
}
 
export default KakaoButtonComponent;