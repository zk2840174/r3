

import { useState, useRef} from "react";
import { postProduct } from "../../apis/productsAPI";
import CustomModal from "../commons/CustomModal";



const initState = {
  pname: 'Product',
  price: 0,
  files:null
}

const RegisterComponent = ({moveToList}) => {

  const [product, setProduct] = useState({...initState})

  const uploadRef = useRef()

  //modal state 
  const [openNow, setOpenNow] = useState(false)


  const changeProduct = (e) => {

    product[e.target.name] = e.target.value

    setProduct({...product})

  }


  const handleClickRegister = () => {

    const files = uploadRef.current.files

    const formData = new FormData()

    for (let i = 0; i < files.length; i++) {
      formData.append("files", files[i]);
    }

    formData.append("pname", product.pname);
    formData.append("price", product.price);


    postProduct(formData).then(res => {
      console.log("----------------------- ")
      setOpenNow(true)
    })
  }

  return (
    <div className = "border-2 border-sky-200 mt-10 p-10"> 
      <div className="flex justify-center mt-10">
        <div className="relative mb-4 flex w-full flex-wrap items-stretch">
          <div className="w-1/5 p-6 text-right font-bold">Product Name</div>
          <input className="w-4/5 p-6 rounded-r border border-solid border-neutral-300 shadow-md" 
           name="pname"
           type={'text'} 
           value={product.pname} 
           onChange={e => changeProduct(e)}>
           </input>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="relative mb-4 flex w-full flex-wrap items-stretch">
          <div className="w-1/5 p-6 text-right font-bold">Price</div>
          <input className="w-4/5 p-6 rounded-r border border-solid border-neutral-300 shadow-md" 
           name="price"
           type={'number'} 
           value={product.price} 
           onChange={e => changeProduct(e)}>
           </input>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="relative mb-4 flex w-full flex-wrap items-stretch">
          <div className="w-1/5 p-6 text-right font-bold">Product files</div>
            <input ref={uploadRef} 
              className="w-4/5 p-6 rounded-r border border-solid border-neutral-300 shadow-md" 
              type={'file'} multiple={true}
            ></input>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="relative mb-4 flex w-full flex-wrap  justify-end">
        <button type="button" 
        className="inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xl  text-white "
        onClick={handleClickRegister}
        >
          Register</button>
        </div>
      </div>


      <CustomModal
          title={'등록 처리 완료'}
          content={'새로운 상품이 등록되었습니다'}  
          openNow={openNow} 
          callback={ () => {
            setOpenNow(false)
            setProduct({...initState})
            moveToList()
           } 
          }
      >
      </CustomModal>  

    </div>
   );
}
 
export default RegisterComponent;