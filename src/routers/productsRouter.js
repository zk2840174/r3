import { lazy, Suspense } from "react"
import { Navigate } from "react-router-dom"


const ProductList = lazy(() => import('../pages/products/ProductListPage'))
const Loading = <div>Loading....</div>

const ProductRegister = lazy(() => import('../pages/products/ProductRegisterPage'))

const productsRouter = () => {

    return [
        {
            path:"list",
            element: <Suspense fallback={Loading}><ProductList/></Suspense>
        },
        {
            path: "",
            element: <Navigate replace to="/products/list"/>
        },
        {
            path: "register",
            element: <Suspense fallback={Loading}><ProductRegister/></Suspense>
        },
    ]

}

export default productsRouter;