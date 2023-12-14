import React from "react";
import BlogCard from "./BlogCard";
import Shimmer from "./Shimmer";
import NoBlogFound from "./NoBlogFound";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const DisplayAllBlog = () => {
  const blogData = useSelector((store) => store.blog);

  return (
    <div className="px-10 flex items-center flex-col">
    {!blogData ? (
          // If blogData is null (loading state), show shimmer
      <Shimmer />
    ) : blogData.length > 0 ? 
     // If blogData has items, display BlogCards
    (
      blogData.map((blog) => (
        <div key={blog._id} className="p-4 w-full flex flex-col border border-orange-400 shadow-xl rounded-md my-4 hover:bg-slate-100">
          <Link to={`/blog/${blog._id}`}>
            <BlogCard blog={blog} />
          </Link>
        </div>
      ))
    ) :
       // If blogData is empty, show a message
    (
      <NoBlogFound />
    )}
    {blogData?.length > 0 && (
      <h1 className="text-3xl font-bold text-center">That's All ..!!🙂</h1>
    )}
  </div>
  );
};

export default DisplayAllBlog;
