import axios from "axios";

const citiesActions = {
  getCities: () => {
    return async (dispatch) => {
      let response = await axios.get("https://mytinerary-haquim.herokuapp.com/api/cities");
      dispatch({ type: "GET_ALL_CITIES", payload: response.data.response });
    };
  },
  getOneCity: (id) => {
    return async (dispatch) => {
      let response = await axios.get("https://mytinerary-haquim.herokuapp.com/api/city/" + id);
      console.log(response)
      dispatch({ type: "GET_ONE_CITY", payload: response.data.response });
    };
  },
  getFiltered: (cities, e) => {
    return (dispatch) => {
      dispatch({ type: "GET_FILTERED_CITIES", payload: { cities, e } });
    };
  },
};

export default citiesActions;