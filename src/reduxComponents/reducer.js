const initialState = {
    countriesData: [],
    filterCountriesData: [],
    singleCountry: [],
    region: '',
}

const reducer = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {

        case 'DATA_RECEIVED':
            return {
                ...state,
                countriesData: action.json
            }

        case 'DATA_RECEIVED_BY_REGION':
            return {
                ...state,
                countriesData: action.json.regionData,
                region: action.json.region
            }

        case 'FILTER_COUNTRY':
            return {
                ...state,
                filterCountriesData: action.data
            }
        default:
            return state;
    }
};

export default reducer;