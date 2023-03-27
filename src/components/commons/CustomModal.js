import { useEffect, useState } from "react"


const CustomModal = ({openNow, callback, title, content}) => {

    const [show, setShow] = useState('hidden')

    useEffect(() => {

        setShow( openNow ? '' : 'hidden')

    },[openNow])

    const handleClickClose = () => {
        console.log("close...") 
        setShow('hidden') 
        if(callback){
            callback()
        }
    }



  return (
    <div className ={'fixed top-0 left-0 z-[1055] flex h-full w-full  justify-center bg-black bg-opacity-20 ' + show}  onClick={handleClickClose}  >

        <div className="absolute  bg-white shadow dark:bg-gray-700 opacity-100 w-1/4 rounded  mt-10 mb-10 px-6 min-w-[600px]">

            <div className="px-6 justify-center text-center bg-warning-400 mt-6">
                <h1>{title}</h1>
            </div>
            <div className="h-24 justify-center text-center">
                <h2>{content}</h2>
            </div>
            <div className="justify-end flex m-2">
                <button 
                className="rounded bg-primary px-4  text-white" 
                onClick={handleClickClose}>Close Modal</button>
            </div>
        </div>
    </div> 
  )
   
}
 
export default CustomModal;