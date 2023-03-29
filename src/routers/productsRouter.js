import { lazy, Suspense } from "react"
import { Navigate } from "react-router-dom"


const Loading = <div>Loading....</div>

const ProductList = lazy(() => import('../pages/products/ProductListPage'))

const ProductRegister = lazy(() => import('../pages/products/ProductRegisterPage'))

const ProductRead = lazy(() => import('../pages/products/ProductReadPage'))


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
        {
            path: "read",
            element: <Suspense fallback={Loading}><ProductRead/></Suspense>
        }
    ]

}

export default productsRouter;