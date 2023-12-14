import React from "react";
import { formatCreatedAt } from "../utils/formatCreatedAt";
import { useNavigate } from "react-router-dom";

const BlogCard = ({ blog }) => {
  const navigate = useNavigate();
  const time = formatCreatedAt(blog.createdAt);

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

  return (
    < >
      <header className=" flex justify-between ">
        <div className="">
          <h1 className="text-2xl font-bold ">{blog.title}</h1>
          <p className="italic text-sm">{time}</p>
        </div>
        <div>
          <button>
            <i className="fa-solid fa-pen-to-square"></i>
          </button>
          <button onClick={() => handleDelete(blog._id)} className="pl-2">
            <i className="fa-solid fa-trash text-red-500"></i>
          </button>
        </div>
      </header>
      <article className="py-2 text-slate-700">
        <p>{blog.body}</p>
      </article>
    </>
  );
};

export default BlogCard;
