
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import { useDispatch } from "react-redux";
import { kakaoServerLogin } from "../../reducers/loginSlice";
import CustomModal from "../../components/commons/CustomModal";



const KakaoLoginRedirect = () => {

    const [searchParams] = useSearchParams()

    console.log(searchParams.get("code"))

    const code = searchParams.get("code")

    const dispatch = useDispatch()


    const [openNow, setOpenNow] = useState(false)

    const navigate = useNavigate()


    useEffect(() => {

        // getEmailWithToken(searchParams.get('code')).then(res => {

        //     const email = res

        //     console.log("--------------------------------")
        //     console.log(email)

        // })

        console.log("=======================================================================")

        dispatch(kakaoServerLogin(code)).then(res => {
            setOpenNow(true)
        })
        

    },[code])

    const moveToList = () => {

        navigate({pathname: "/" })
    }

    

    return (  

        <div>
            <h1>Kakao Login Redirect</h1>
            <h2>CODE</h2>
            <CustomModal
            title={'카카오 로그인 완료'}
            content={'소셜로그인 성공.'}  
            openNow={openNow} 
            callback={ () => {
                setOpenNow(false)
                moveToList()
            } 
            }>
            </CustomModal>  
        </div>

    );
}
 
export default KakaoLoginRedirect;