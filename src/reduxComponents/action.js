// GET ALL COUNTRIES DATA

export const getAllData = () => ({
    type: "GET_ALL_DATA",
});

// GET DATA BY REGION

export const getDataByRegion = (region) => ({
    type: "DATA_BY_REGION",
    region,
});

// FILTER COUTRY DATA 

export const getFilterData = (data) => ({
    type: "FILTER_COUNTRY",
    data
})

// GET SINGLE COUNTRY DATA

export const getData = (data) => ({
    type: "GET_DATA",
    data
})