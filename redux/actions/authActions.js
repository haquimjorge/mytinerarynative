import axios from "axios";

const authActions = {
  signUp: (newUser) => {
    return async (dispatch, getState) => {
      let response = await axios.post("https://mytinerary-haquim.herokuapp.com/api/auth/signUp", {
        ...newUser,
      });
      console.log(response);
      if (response.data.succes) {
        dispatch({ type: "LOGGED", payload: response.data.response });
      }
      return response;
    };
  },

  signIn: (signUser) => {
    return async (dispatch, getState) => {
      let response = await axios.post("https://mytinerary-haquim.herokuapp.com/api/auth/signIn", {
        ...signUser,
      });
      console.log(response)
      if (response.data.succes) {
        
        dispatch({ type: "LOGGED", payload: response.data.response });
      }
      return response;
    };
  },

  logOut: () => {
    return async (dispatch, getState) => {
      dispatch({ type: "LOG_OUT" });
    };
  },

  logInLS: (token) => {
    return async (dispatch, getState) => {
      try {
        let response = await axios.get(
          "https://mytinerary-haquim.herokuapp.com/api/tokenVerification",
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        );
        dispatch({
          type: "LOGGED",
          payload: {
            token,
            firstName: response.data.firstName,
            profilePhoto: response.data.profilePhoto,
            _id: response.data._id,
          },
        });
      } catch (error) {
        return dispatch({ type: "LOG_OUT" });
      }
    };
  },
};

export default authActions;