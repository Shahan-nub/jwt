const { createSlice } = require("@reduxjs/toolkit");

const activeImageSlice = createSlice({
  name: "activeImage",
  initialState: [
    {
      id: "jw02731001001_02103_00001_nrcblong_cal.jpg",
      observation_id: "jw02731001001_02103_00001_nrcblong",
      program: 2731,
      details: {
        mission: "JWST",
        instruments: [
          {
            instrument: "FGS",
          },
          {
            instrument: "NIRCam",
          },
          {
            instrument: "NIRISS",
          },
          {
            instrument: "NIRSpec",
          },
          {
            instrument: "MIRI",
          },
        ],
        suffix: "_cal",
        description:
          "exposure (L2b): 2D calibrated exposure average over integrations",
      },
      file_type: "jpg",
      thumbnail:
        "https://jwst-api-cdn.nyc3.cdn.digitaloceanspaces.com/thumb--jw02731001001_02103_00001_nrcblong_cal_thumb.jpg",
      location:
        "https://jwst-api-cdn.nyc3.cdn.digitaloceanspaces.com/jwst--jw02731001001_02103_00001_nrcblong_cal.jpg",
    },
  ],
  reducers: {
    addActiveImage: (store, action) => {
      return action.payload;
    },
  },
});

export const activeImageActions = activeImageSlice.actions;
export default activeImageSlice;
