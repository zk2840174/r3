import { Outlet } from "react-router-dom";
import BasicLayout from "../../layouts/BasicLayout";



const ProductIndexPage = () => {
    return ( 
        <BasicLayout>
          <div className="w-full px-6 flex  bg-slate-200 shadow-md">
             <div className="w-1/4 ">
             <div className="m-6  font-extrabold  text-2xl">Products</div>
             </div>
             
          </div>
          <div className="w-4/4 justify-end flex">
                <div className=" font-medium pr-6 pt-6">Register</div>
          </div>

          <Outlet></Outlet>
        </BasicLayout>
     );
}
 
export default ProductIndexPage;