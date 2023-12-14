import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
    name: "config",
    initialState: null,
    reducers: {
        setMessage: (state, action) => {
            return action.payload;
        },
        
    }
});

export const { setMessage } = configSlice.actions;
export default configSlice.reducer;