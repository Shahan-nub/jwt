import allImagesSlice from "./slices/allImagesSlice";

const { configureStore } = require("@reduxjs/toolkit");
const { default: activeImageSlice } = require("./slices/activeImageSlice");

const imageStore = configureStore({
  reducer: {
    activeImage: activeImageSlice.reducer,
    allImages:allImagesSlice.reducer,
  },
});

export default imageStore;
