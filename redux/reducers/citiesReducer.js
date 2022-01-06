const citiesReducer = (
    state = { allCities: [], filteredCities: [], newCity: {} },
    action
  ) => {
    switch (action.type) {
      case "GET_ALL_CITIES":
        return {
          ...state, // cambio estado, del estado inicial
          allCities: action.payload,
          filteredCities: action.payload,
        };
      case "GET_FILTERED_CITIES":
        let filtered = state.allCities.filter((city) =>
          city.cityName
            .toLowerCase()
            .startsWith(action.payload.e.trim().toLowerCase())
        );
        return {
          ...state,
          filteredCities: filtered,
        };
      case "GET_ONE_CITY":
        return {
          ...state,
          newCity: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default citiesReducer;