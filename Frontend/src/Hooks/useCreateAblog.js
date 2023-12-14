import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setMessage } from "../store/Slice/configSlice";

const useCreateAblog = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const message = useSelector((store) => store.config);

  const createBlog = async (title, content) => {
    try {
      const response = await fetch("http://localhost:8000/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: title,
          body: content,
        }),
      });

      if (!response.ok) {
        throw new Error("⚠️ Failed to create blog");
      }

      dispatch(setMessage("Blog created successfully👍!"));
    } catch (err) {
      dispatch(setMessage(err.message));
    }
  };


  return { createBlog };
};

export default useCreateAblog;
