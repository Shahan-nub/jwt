const { configureStore } = require("@reduxjs/toolkit");
const { default: activeImageSlice } = require("./slices/activeImageSlice");

const imageStore = configureStore({
    reducer:{
        activeImage:activeImageSlice.reducer,
    }
})

export default imageStore;