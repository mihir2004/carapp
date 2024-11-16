// src/components/Navbar.js
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Spyne</h1>
        <div>
          <Link
            to="/login"
            className="bg-gray-800 text-white px-4 py-2 rounded mr-2"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className=" px-4 py-2 rounded border-2 hover:bg-white hover:text-black hover:border-white"
          >
            Signup
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
