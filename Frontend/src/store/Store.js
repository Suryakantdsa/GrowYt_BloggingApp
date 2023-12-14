import { configureStore } from "@reduxjs/toolkit";
import BlogSlice from "./Slice/BlogSlice";
import configSlice from "./Slice/configSlice";

const store=configureStore({
    reducer:{
      blog:BlogSlice,
      config:configSlice
    }
})

export default store