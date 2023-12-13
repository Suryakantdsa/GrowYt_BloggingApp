import { configureStore } from "@reduxjs/toolkit";
import BlogSlice from "./Slice/BlogSlice";

const store=configureStore({
    reducer:{
      blog:BlogSlice
    }
})

export default store