import { createSlice } from "@reduxjs/toolkit";

const BlogSlice = createSlice({
    name: "blog",
    initialState: null,
    reducers: {
        addBolgfromDb: (state, action) => {
            return action.payload;
        }
    }
});

export const { addBolgfromDb } = BlogSlice.actions;
export default BlogSlice.reducer;