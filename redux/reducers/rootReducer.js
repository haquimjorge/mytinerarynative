import { combineReducers } from "redux";
import citiesReducer from "./citiesReducer";
import itinerariesReducer from './itinerariesReducer'
import authReducer from './authReducer'


const rootReducer = combineReducers({

  cities: citiesReducer,
  itineraries: itinerariesReducer,
  users: authReducer
});

export default rootReducer;