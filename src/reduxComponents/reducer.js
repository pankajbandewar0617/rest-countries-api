const initialState = {
    countriesData: [],
    filterCountriesData: [],
    singleCountry: [],
    region: '',
}

const reducer = (state = initialState, action) => {

    switch (action.type) {

        case 'DATA_RECEIVED':
            return {
                ...state,
                countriesData: action.json,
                filterCountriesData: action.json
            }

        case 'DATA_RECEIVED_BY_REGION':
            return {
                ...state,
                filterCountriesData: action.json.regionData,
                region: action.json.region
            }

        case 'FILTER_COUNTRY':
            return {
                ...state,
                filterCountriesData: action.data
            }

        case 'GET_DATA':
            return {
                ...state,
                singleCountry: action.data
            }

        default:
            return state;
    }
};

export default reducer;