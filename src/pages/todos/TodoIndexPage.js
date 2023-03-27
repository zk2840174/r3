import { Modal } from "flowbite-react";
import { Outlet } from "react-router-dom";
import BasicLayout from "../../layouts/BasicLayout";


const TodoIndexPage = () => {
    return (  
        <BasicLayout>
            <h1>Todos</h1>
            <div>
                <Outlet></Outlet>

            </div>
        </BasicLayout>
    );
}
 
export default TodoIndexPage;