import React from "react";
import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  const handleCreateBlog = () => {
    navigate("/create");
  };
  return (
    <nav className="w-full h-8 bg-green-800 text-white flex justify-between items-center p-10 ">
      <h1 className="text-3xl"><Link to={"/"}>BloggingApp</Link></h1>
      
      <button
        onClick={handleCreateBlog}
        className="bg-black text-white px-4 py-2 shadow-md rounded-md font-semibold hover:bg-white hover:text-black">
        Create a Blog
      </button>
    </nav>
  );
};

export default NavBar;
