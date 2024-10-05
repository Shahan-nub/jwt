const { createSlice } = require("@reduxjs/toolkit");

const allImagesSlice = createSlice({
  name: "allImages",
  initialState: [
        {
            "id": "jw02731001001_02105_00004_nrca1_cal.jpg",
            "observation_id": "jw02731001001-02105-00004-nrca1",
            "program": 2731,
            "details": {
                "mission": "JWST",
                "instruments": [
                    {
                        "instrument": "FGS"
                    },
                    {
                        "instrument": "NIRCam"
                    },
                    {
                        "instrument": "NIRISS"
                    },
                    {
                        "instrument": "NIRSpec"
                    },
                    {
                        "instrument": "MIRI"
                    }
                ],
                "suffix": "_cal",
                "description": "exposure (L2b): 2D calibrated exposure average over integrations"
            },
            "file_type": "jpg",
            "thumbnail": "https://jwst-api-cdn.nyc3.cdn.digitaloceanspaces.com/thumb--jw02731001001_02105_00004_nrca1_cal_thumb.jpg",
            "location": "https://jwst-api-cdn.nyc3.cdn.digitaloceanspaces.com/jwst--jw02731001001_02105_00004_nrca1_cal.jpg"
        },
        {
            "id": "jw02731001001_02103_00001_nrcblong_cal.jpg",
            "observation_id": "jw02731001001-02103-00001-nrcblong",
            "program": 2731,
            "details": {
                "mission": "JWST",
                "instruments": [
                    {
                        "instrument": "FGS"
                    },
                    {
                        "instrument": "NIRCam"
                    },
                    {
                        "instrument": "NIRISS"
                    },
                    {
                        "instrument": "NIRSpec"
                    },
                    {
                        "instrument": "MIRI"
                    }
                ],
                "suffix": "_cal",
                "description": "exposure (L2b): 2D calibrated exposure average over integrations"
            },
            "file_type": "jpg",
            "thumbnail": "https://jwst-api-cdn.nyc3.cdn.digitaloceanspaces.com/thumb--jw02731001001_02103_00001_nrcblong_cal_thumb.jpg",
            "location": "https://jwst-api-cdn.nyc3.cdn.digitaloceanspaces.com/jwst--jw02731001001_02103_00001_nrcblong_cal.jpg"
        },
        {
            "id": "jw02731001002_02103_00001_nrca2_cal.jpg",
            "observation_id": "jw02731001002-02103-00001-nrca2",
            "program": 2731,
            "details": {
                "mission": "JWST",
                "instruments": [
                    {
                        "instrument": "FGS"
                    },
                    {
                        "instrument": "NIRCam"
                    },
                    {
                        "instrument": "NIRISS"
                    },
                    {
                        "instrument": "NIRSpec"
                    },
                    {
                        "instrument": "MIRI"
                    }
                ],
                "suffix": "_cal",
                "description": "exposure (L2b): 2D calibrated exposure average over integrations"
            },
            "file_type": "jpg",
            "thumbnail": "https://jwst-api-cdn.nyc3.cdn.digitaloceanspaces.com/thumb--jw02731001002_02103_00001_nrca2_cal_thumb.jpg",
            "location": "https://jwst-api-cdn.nyc3.cdn.digitaloceanspaces.com/jwst--jw02731001002_02103_00001_nrca2_cal.jpg"
        },
        {
            "id": "jw02731002005_02107_00005_mirimage_o002_crf.jpg",
            "observation_id": "jw02731002005-02107-00005-mirimage-o002",
            "program": 2731,
            "details": {
                "mission": "JWST",
                "instruments": [
                    {
                        "instrument": "NIRCam"
                    }
                ],
                "suffix": "_crf",
                "description": "exposure (L2c): 2D Calibrated data averaged over integrations"
            },
            "file_type": "jpg",
            "thumbnail": "",
            "location": "https://jwst-api-cdn.nyc3.cdn.digitaloceanspaces.com/jwst--jw02731002005_02107_00005_mirimage_o002_crf.jpg"
        },
  ],
  reducers: {
    addAllImages: (store, action) => {
      return action.payload;
    },
  },
});

export const allImagesActions = allImagesSlice.actions;
export default allImagesSlice;
