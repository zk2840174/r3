import React, { useState } from "react";
import classNames from "classnames";

const CustomeNavbar = () => {

        const [menuToggle, setMenuToggle] = useState(false);

        return (
          <nav className="bg-gray-100">
            <div className="max-w-6xl mx-auto px-4">
              <div className="flex justify-between">
                {/* 메뉴 */}
                <div className="flex space-x-4">
                  <div>
                    <a href="#" className="flex items-center py-5 px-2 text-gray-700">
                      <span className="font-bold">Home</span>
                    </a>
                  </div>
                  <div className="hidden md:flex items-center space-x-1">
                    <a
                      href="#"
                      className="py-5 px-3 text-gray-700 hover:text-gray-900"
                    >
                      Features
                    </a>
                    <a
                      href="#"
                      className="py-5 px-3 text-gray-700 hover:text-gray-900"
                    >
                      Pricing
                    </a>
                  </div>
                </div>
      
                {/* 메뉴2 */}
                <div className="hidden md:flex items-center space-x-1">
                  <a href="#" className="py-5 px-3">
                    Login
                  </a>
                  <a
                    href="#"
                    className="py-2 px-3 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 hover:text-yellow-800 rounded transition duration-300"
                  >
                    Signup
                  </a>
                </div>
      
                {/* mobile menu */}
                <div className="md:hidden flex items-center">
                  <button onClick={() => setMenuToggle(!menuToggle)}>
                    {menuToggle ? (
                      <span>CLOSE</span>
                    ) : (
                      <span>OPEN</span>
                    )}
                  </button>
                </div>
              </div>
            </div>
      
            {/* mobile menu items */}
            <div className={classNames("md:hidden", { hidden: !menuToggle })}>
              <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">
                Pricing
              </a>
              <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">
                Features
              </a>
            </div>
          </nav>
     );
}
 
export default CustomeNavbar;