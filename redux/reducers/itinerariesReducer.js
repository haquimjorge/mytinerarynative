const itinerariesReducer = (state = { itinerariesByCity: [] }, action) => {
    switch (action.type) {
      case "ONE_ITINERARY":
        return {
          ...state,
          itinerariesByCity: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default itinerariesReducer;