import { useState, useEffect, useRef } from "react"
import { deleteProduct, getProduct, putProduct } from "../../apis/productsAPI"
import CustomModal from "../commons/CustomModal"


const initState = {
  pno:0,
  pname: '',
  price: 0,
  status: '',
  productImageDTOList: []  
}


const ModifyComponent = ({pno, afterModify, afterDelete}) => {

  const [product, setProduct] = useState(initState)

  const [job, setJob] = useState('')


  //modal state 
  const [openNow, setOpenNow] = useState(false)

  const uploadRef = useRef()

  useEffect(() => {

    getProduct(pno).then(data => {

      setProduct(data)

    })
  },[pno])

  const changeProduct = (e) => {

    product[e.target.name] = e.target.value

    setProduct({...product})

  }

  const handleClickModify = () => {

    const files = uploadRef.current.files

    const formData = new FormData()

    for (let i = 0; i < files.length; i++) {
      formData.append("files", files[i]);
    }

    formData.append("pno", product.pno);
    formData.append("pname", product.pname);
    formData.append("price", product.price);
    formData.append("status", product.status);


    putProduct( product.pno, formData).then(res => {
      console.log("----------------------- ")
      setJob('modify')
      setOpenNow(true)
    })

  }

  const handleClickDelete = () => {
    
    deleteProduct(product.pno).then(res => {
      console.log("----------------------- ")
      setJob('delete')
      setOpenNow(true)
    })
    
  }




  return ( 
    
    <div className = "border-2 border-sky-200 mt-10 p-10 ">
      <div className="flex justify-center">
        <div className="relative mb-4 flex w-full flex-wrap items-stretch">
          <div className="w-1/5 p-6 text-right font-bold">Product No</div>
          <input className="w-4/5 p-6 rounded-r border border-solid border-neutral-300 shadow-md" 
           name="price"
           type={'number'} 
           value={product.pno}
           readOnly={true}
           >
           </input>
        </div>
      </div>
      <div className="flex justify-center ">
        <div className="relative mb-4 flex w-full flex-wrap items-stretch">
          <div className="w-1/5 p-6 text-right font-bold">Product Name</div>
          <input className="w-4/5 p-6 rounded-r border border-solid border-neutral-300 shadow-md" 
           name="pname"
           type={'text'} 
           value={product.pname}
           onChange= {changeProduct}
           >
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
           onChange= {changeProduct}
           >
           </input>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="relative mb-4 flex w-full flex-wrap items-stretch">
          <div className="w-1/5 p-6 text-right font-bold">Status</div>
          <div className="w-4/5 rounded-r border border-solid border-neutral-300 shadow-md p-6">
          <select
            name="status" 
            className="border-solid border-2 rounded m-1 p-2"
            onChange={changeProduct} 
            value = {product.status} >
            <option value="Y">Sale Available</option>
            <option value="N">Sold Out</option>
          </select>
          </div>
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
        className="inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-lg text-white "
        onClick={handleClickModify}
        >
          Modify</button>
        
        <button type="button" 
        className="inline-block rounded bg-danger ml-6 px-6 pt-2.5 pb-2  text-lg  text-white "
        onClick={handleClickDelete}
        >
          Delete</button>  
        </div>
      </div>


      <CustomModal
          title={'처리 완료'}
          content={'정상적으로 처리 되었습니다'}  
          openNow={openNow} 
          callback={ () => {
            setOpenNow(false)
            if(job === 'modify' && afterModify){
              afterModify()
            }else if(job === 'delete' && afterDelete){
              afterDelete()
            }
           } 
          }
      >
      </CustomModal>  

  </div>
  );
}
 
export default ModifyComponent;