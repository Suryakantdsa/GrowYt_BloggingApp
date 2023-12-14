import React, { useState } from "react";
import useCreateAblog from "../Hooks/useCreateAblog";
import Message from "./Message";
import { useDispatch, useSelector } from "react-redux";
import { setMessage } from "../store/Slice/configSlice";
import { Link, useNavigate } from "react-router-dom";

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();
  const { createBlog, handleOkClick } = useCreateAblog();
  const error = useSelector((store) => store.config);
  const navigate = useNavigate();
  const handlePublish = async () => {
    if (title && content) {
      try {
        await createBlog(title, content);
        setTitle("");
        setContent("");
        navigate("/");
      } catch (error) {
        dispatch(setMessage("⚠️ Failed to create blog"));
      }
    } else {
      dispatch(setMessage("Please fill all required fields..."));
    }
  };

  return (
    <div className="w-full p-4">
      <h1 className="text-3xl font-bold py-4 text-center">Create blog page</h1>
      <div className="flex flex-col">
        <label htmlFor="title" className="text-3xl font-bold ">
          Title
        </label>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          id="title"
          placeholder="Enter the Title here"
          className="text-lg outline-none border-b-[1px] border-orange-400 my-2"
        />
      </div>
      <textarea
        name="body"
        id="body"
        rows="5"
        placeholder="Write the body ...!"
        onChange={(e) => setContent(e.target.value)}
        value={content}
        className="w-full p-2 rounded-md border focus:outline-none focus:border-orange-400 mt-4 text-lg"
      />
      <div>
        <button
          className="bg-orange-700 text-white px-4 py-2 mt-2 font-semibold rounded-sm shadow-2xl"
          onClick={handlePublish}>
          Publish
        </button>
        <Link to={"/"}>
        
        <button className="bg-slate-800 -700 text-white px-4 py-2 mt-2 font-semibold rounded-sm shadow-2xl ml-4">
          Back
        </button>
        </Link>
      </div>
      {error && <Message handleOkClick={handleOkClick} />}
    </div>
  );
};

export default CreateBlog;
