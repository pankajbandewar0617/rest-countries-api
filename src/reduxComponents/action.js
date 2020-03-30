// GET ALL COUNTRIES DATA

export const getAllData = () => ({
    type: "GET_ALL_DATA",
});

// GET DATA BY REGION

export const getDataByRegion = (region) => ({
    type: "DATA_BY_REGION",
    region,
});

export const getFilterData = (data) => ({
    type: "FILTER_COUNTRY",
    data
})