import { lazy, Suspense } from "react"
import { Navigate } from "react-router-dom"


const TodoList = lazy(() => import("../pages/todos/TodoListPage"))

const Loading = <div>Todo Loading....</div>

const todosRouter = () => {
    return [
        {
            path: "list",
            element: <Suspense fallback={Loading}><TodoList/></Suspense>
        },
        {
            path: "",
            element: <Navigate replace to="/todos/list"/>
        }
    ]
}

export default todosRouter;