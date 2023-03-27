import { Link } from "react-router-dom";


const BasicNavbar = () => {
    return (  
    
    <nav id='navbar' className="h-1/5 col-span-12 md:col-span-8 flex ">

      <div className="w-1/4  bg-green-400 p-4 font-extrabold">
          <h1>Logo</h1>
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
          <div>Login</div>
      </div>

    </nav>
    );
}
 
export default BasicNavbar;