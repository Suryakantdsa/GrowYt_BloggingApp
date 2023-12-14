import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

const EditBlog = () => {
  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getBlogInfo = async () => {
      try {
        let blog = await fetch(`http://localhost:8000/blog/edit/${id}`);
        let json = await blog.json();
        setNewTitle(json.title);
        setNewContent(json.body);
      } catch (error) {
        console.error("Error fetching blog:", error);
      }
    };

    getBlogInfo();
  }, [id]);

  const handlePublish = async () => {
    try {
      const response = await fetch(`http://localhost:8000/blog/edit/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: newTitle,
          body: newContent,
        }),
      });

      if (!response.ok) {
        throw new Error("⚠️ Failed to update blog");
      }

      alert("Blog updated successfully!👍");
      navigate(`/blog/${id}`); // Redirect to the updated blog page
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <div className="w-full p-4 ">
        <h1 className="text-3xl font-bold text-center">Edit blog page</h1>
        <div className="flex flex-col">
          <label htmlFor="title" className="text-3xl font-bold ">
            Title
          </label>
          <input
            type="text"
            id="title"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            placeholder="Enter the Title here"
            className="text-lg outline-none border-b-[1px] border-orange-400 my-2"
          />
        </div>
        <textarea
          name="body"
          id="body"
          value={newContent}
          onChange={(e) => setNewContent(e.target.value)}
          rows="5"
          cols="500"
          placeholder="Write the body ...!"
          className="w-full min-h-[80%] p-2 rounded-md border focus:outline-none focus:border-orange-400 mt-4 text-lg"
        />
        <div>
          <button
            className="bg-orange-700 text-white px-4 py-2 mt-2 font-semibold rounded-sm shadow-2xl"
            onClick={handlePublish}>
            Update
          </button>
          <Link to={`/blog/${id}`}>
            <button className="bg-slate-800 -700 text-white px-4 py-2 mt-2 font-semibold rounded-sm shadow-2xl ml-4">
              Back
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default EditBlog;
