const { createSlice } = require("@reduxjs/toolkit");

const activeImageSlice = createSlice({
    name:"activeImage",
    initialState:{},
    reducers:{
        addActiveImage:(store,action) => {
            return  action.payload;
        },
    }
})

export const activeImageActions = activeImageSlice.actions;
export default activeImageSlice;