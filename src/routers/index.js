import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import productsRouter from "./productsRouter";
import todosRouter from "./todosRouter";


const Main = lazy(() => import("../pages/MainPage"))


const IndexProducts = lazy(() => import("../pages/products/ProductIndexPage"))
const IndexTodos = lazy(() => import("../pages/todos/TodoIndexPage"))

const Loading = <div>Loading....</div>


const router = createBrowserRouter([

    {
        path: "",
        element: <Suspense fallback={Loading}><Main/></Suspense>

    },

    {
        path: "products",
        element:<Suspense fallback={Loading}><IndexProducts/></Suspense>,
        children: productsRouter()
    }, 

    {
        path: "todos",
        element:<Suspense fallback={Loading}><IndexTodos/></Suspense>,
        children: todosRouter()
    }

])

export default router;