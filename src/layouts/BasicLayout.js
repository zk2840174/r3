import BasicNavbar from "../components/commons/BasicNavbar";
import LoginDisplay from "../components/commons/LoginDisplay";


const BasicLayout = ({children}) => {
    return ( 
        <div className="container mx-auto min-w-[1280px]">
            
            <BasicNavbar></BasicNavbar>

            <LoginDisplay></LoginDisplay>
    
            <div className="flex justify-center">
              <div className="block w-full rounded-lg bg-white p-6 shadow-lg dark:bg-neutral-700">
                
                {children}
        
              </div>
            </div>
        </div>
     );
}
 
export default BasicLayout;
