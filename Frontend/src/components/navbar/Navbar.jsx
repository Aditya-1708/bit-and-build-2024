// src/components/Navbar.jsx
import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";


const Navbar = () => {
  const { loginWithRedirect ,isAuthenticated,logout } = useAuth0();

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-semibold">BrandName</div>
        <ul className="flex space-x-8 text-white">
          <li className="hover:text-gray-400"><a href="#">Home</a></li>
          <li className="hover:text-gray-400"><a href="#">Features</a></li>
          <li className="hover:text-gray-400"><a href="#">Pricing</a></li>
          <li className="hover:text-gray-400"><a href="#">Contact</a></li>
        </ul>
        {isAuthenticated?<><button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md">
          Logout
        </button></>:<><button onClick={() => loginWithRedirect()} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md">
          Login
        </button></>}
        
      </div>
    </nav>
  );
};

export default Navbar;
