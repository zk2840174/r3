import { Link } from "react-router-dom";


const BasicNavbar = () => {
    return (  
    
    <nav id='navbar' className="h-1/5 col-span-12 md:col-span-8 flex ">

      <div className="w-1/4  bg-blue-500 p-4 font-extrabold">
          <h1 className="text-3xl  text-white">gugucoding</h1>
      </div>

      <div className="w-2/4 bg-gray-500" >
          <ul className="flex justify-between p-4 text-white font-bold">
              <li>
                <Link to={'/'}>Main</Link>
              </li>
              <li>
              <Link to={'/products/'}>Products</Link>
              </li>
              <li>
              <Link to={'/todos'}>Todos</Link>
              </li>
          </ul>
      </div>

      <div className="w-1/4 flex justify-end bg-orange-300 p-4 font-medium">
          <div className=" text-sm m-1 rounded" >
            <Link to={'/login'}>Login</Link>
          </div>
          <div className=" text-sm m-1 rounded">
            <Link to={'/join'}>Join</Link>
          </div>
      </div>

    </nav>
    );
}
 
export default BasicNavbar;