
import { useState } from "react";
import BasicLayout from "../layouts/BasicLayout";


const MaingPage = () => {


    const [openNow, setOpenNow] = useState(false)

    const toggleModal = (value) => {

        setOpenNow(!openNow)

    }

    return ( 
        <BasicLayout>
            <h1 onClick={() => toggleModal(true) }>Main Page</h1>


        </BasicLayout>
     );
}
 
export default MaingPage;