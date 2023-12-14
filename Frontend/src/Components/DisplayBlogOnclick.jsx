import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import { Link, useNavigate, useParams } from "react-router-dom";
import { formatCreatedAt } from "../utils/formatCreatedAt";

const DisplayBlogOnclick = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [oneBlog, setBlog] = useState("");
  const [time,setTime]=useState("")

  const getBlogInfo = async () => {
    try {
      let blog = await fetch(`http://localhost:8000/blog/${id}`);
      let json = await blog.json();
      setBlog(json);
    } catch (error) {
      console.error("Error fetching blog:", error);
    }
  };
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Do you want to delete this blog?");

    if (confirmDelete) {
      try {
        let result = await fetch(`http://localhost:8000/blog/${id}`, {
          method: "DELETE",
        });

        result = await result.json();
        if (result) {
            if (window.location.pathname === "/") {
              window.location.reload();
            } else {
              navigate("/");
            }
          }
      } catch (error) {
        console.error("Error deleting blog:", error);
      }
    }
  };
  useEffect(() => {
    getBlogInfo();
  }, []); 
  useEffect(() => {
    // Format the date when oneBlog changes
    if (oneBlog) {
      const formattedDate = formatCreatedAt(oneBlog.createdAt);
      setTime(formattedDate);
    }
  }, [oneBlog]);

  return (
    <>
      <NavBar />
      <div className="px-10 w-full flex flex-col mt-2">
        <header className="flex justify-between">
          <div>
            <h1 className="text-2xl font-bold">{oneBlog.title}</h1>
            <p className="italic text-sm">{time}</p>
          </div>
          <div>
            <button>
              <Link to={`/blog/edit/${id}`}>
                <i className="fa-solid fa-pen-to-square"></i>
              </Link>
            </button>
            <button onClick={()=>handleDelete(oneBlog._id)} className="pl-2">
              <i className="fa-solid fa-trash text-red-500"></i>
            </button>
          </div>
        </header>
       
        <article className="py-2 text-slate-700">
          <p>{oneBlog.body}</p>
        </article>
      </div>
    </>
  );
};

export default DisplayBlogOnclick;
