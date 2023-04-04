import { useEffect, useState } from "react";
import { getProduct } from "../../apis/productsAPI";
import { Navigate } from "react-router-dom";


const initState = {
  pno:0,
  pname: '',
  price: 0,
  status: '',
  productImageDTOList: []  
}

const ReadComponent = ({pno}) => {

  const [product, setProduct] = useState(initState)

  const [requireLogin, setRequireLogin] = useState(false)

  useEffect(() => {

    getProduct(pno).then(data => {

      setProduct(data)

    }).catch(err => {
      console.log(err)
      setRequireLogin(true)
    })
  },[pno])

  if(requireLogin){
    return(
      <>
      {alert("Login....please")}
      <Navigate to="/login" replace={true}></Navigate>
      </>
    )
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
           readOnly = {true}
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
           readOnly={true}
           >
           </input>
        </div>
      </div>

      <div className="flex justify-center m-10 bg-sky-200 px-10 flex-wrap">
        {product.productImageDTOList.map(pimage => { return(
          <div 
           key={pimage.uuid}
           className="px-10 m-6"
          >
            <img src = {`http://localhost:8080/upload/view/`+ pimage.link}></img>
          </div>
        )})}

      </div>

    </div>
   );
}



 
export default ReadComponent;