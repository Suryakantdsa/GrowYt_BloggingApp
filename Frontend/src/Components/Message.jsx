import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMessage } from "../store/Slice/configSlice";

const Message = () => {
  const message = useSelector((store) => store.config);
  const dispatch = useDispatch();

  const handleOkClick = () => {
    dispatch(setMessage(null));
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-50 ">
      <div className="w-[300px] h-[150px] bg-white flex justify-center items-center flex-col rounded-lg">
        <p className="font-bold text-xl py-4">{message}</p>
        <button
          className="bg-green-600 text-white font-bold text-lg px-4 py-2"
          onClick={handleOkClick}>
          Ok
        </button>
      </div>
    </div>
  );
};

export default Message;