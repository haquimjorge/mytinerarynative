const authReducer = (
    state = { token: null, firstName: null, profilePhoto: null, _id: null, userLogged: null },
    action
  ) => {
    console.log("Actions", action)
    switch (action.type) {
      case "LOGGED":
        return {
          ...state,
          token: action.payload.token,
          firstName: action.payload.firstName,
          profilePhoto: action.payload.profilePhoto,
          _id: action.payload._id,
          userLogged: action.payload
        };
      case "LOG_OUT":
        return {
          token: null,
          firstName: null,
          profilePhoto: null,
          _id: null,
        };
      default:
        return state;
    }
  };
  
  export default authReducer;