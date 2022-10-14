import React from "react";
import { Link } from "react-router-dom";

const AdminNav = ({admin,setAdmin}) => {
  const handleLogoutButton = () => {
    fetch("/logouta", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setAdmin(null)
      }
    });
  };

  return (
    <div className=" bg-gradient-to-r from-cyan-400 via-blue to-cyan-50">
      <div className="containerNav">
        <h2>SugarPLums</h2>
        <div className="linkss">
          <div className="Loginslinks" id="nav-content">
            {admin ? (
              <div className="auth flex items-center w-full md:w-full">
                {/* <button className="bg-transparent text-gray-800  p-2 rounded border border-gray-300 mr-4 hover:bg-gray-100 hover:text-gray-700"><Link to="/register">Sign in</Link></button> */}
                <button className="bg-blue-600 text-gray-200  p-2 rounded  hover:bg-blue-500 hover:text-gray-100">
                <Link to="/">
                    <span className="text-red-500">Home</span>
                  </Link>
                </button>
                <div className="auth flex items-center w-full md:w-full">
                {/* <button className="bg-transparent text-gray-800  p-2 rounded border border-gray-300 mr-4 hover:bg-gray-100 hover:text-gray-700"><Link to="/register">Sign in</Link></button> */}
                <button className="bg-blue-600 text-gray-200  p-2 rounded  hover:bg-blue-500 hover:text-gray-100">
                  <span className="text-red-500" onClick={handleLogoutButton}>
                    Logout
                  </span>
                </button>
              </div>
              </div>
            ) : (
              <div className="auth flex items-center w-full md:w-full mx-2">
                {/* <button className="bg-transparent text-gray-800  p-2 rounded border border-gray-300 mr-4 hover:bg-gray-100 hover:text-gray-700"><Link to="/register">Sign in</Link></button> */}
                <button className="bg-blue-600 text-gray-200  p-2 rounded  hover:bg-blue-500 hover:text-gray-100">
                  <Link to="/adminlogin">
                    <span className="text-red-500">Login</span>
                  </Link>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default AdminNav;
