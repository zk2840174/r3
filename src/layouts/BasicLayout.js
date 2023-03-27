import BasicNavbar from "../components/commons/BasicNavbar";


const BasicLayout = ({children}) => {
    return ( 
        <div className="container mx-auto min-w-[1280px]">
            
            <BasicNavbar></BasicNavbar>
    
            <div className="flex justify-center">
              <div className="block w-full rounded-lg bg-white p-6 shadow-lg dark:bg-neutral-700">
                
                {children}
        
              </div>
            </div>
        </div>
     );
}
 
export default BasicLayout;
