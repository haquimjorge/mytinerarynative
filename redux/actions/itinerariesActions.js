import axios from "axios";

const itinerariesActions = {
  allItinerariesByCity: (id) => {
    return async (dispatch) => {
      let response = await axios.get(
        "https://mytinerary-haquim.herokuapp.com/api/itineraries/city/" + id
      );
      console.log(response.data.response);
      dispatch({ type: "ONE_ITINERARY", payload: response.data.response });
    };
  },

  getActivities: (id) => {
    return async () => {
      try {
        let response = await axios.get(
          "https://mytinerary-haquim.herokuapp.com/api/activities/" + id
        );
        let activities = response.data.response;
        if (activities) {
          return { success: true, response: activities };
        } else {
          throw new Error("Database Error");
        }
      } catch (err) {
        return { success: false, error: err };
      }
    };
  },
  sendComment: (commentInfo) => { 
    
    return async () => {
      const response = await axios.post(
        "https://mytinerary-haquim.herokuapp.com/api/itinerary/comments", 
        commentInfo 
      );
      return response;
    };
  },
  deleteComment: (IDs) => {
    return async () => {
      const response = await axios.delete( 
        "https://mytinerary-haquim.herokuapp.com/api/itinerary/comments",
        { data: IDs }  
      );
      return response.data.response;
    };
  },
  editComment: (itineraryId, commentInfo) => {
    return async () => {
      const response = await axios.put(
        "https://mytinerary-haquim.herokuapp.com/api/itinerary/comments/" + itineraryId,
        commentInfo
      );
      return response.data.response;
    };
  },
  likeItinerary: (id, token) =>{
    return async () => {
            try{
                const response = await axios.put(`https://mytinerary-haquim.herokuapp.com/api/itineraries/like/${id}`, {},{
                    headers:{
                        Authorization: `Bearer ${token}`
                    }
                })
                console.log("response", response)
                return response
            } catch(error) {
                console.error(error)
            }
    }
}
};

export default itinerariesActions;