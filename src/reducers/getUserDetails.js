const initialState = {
  userDetails: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case "GET_ALL_Users":
      return {
        ...state,
        userDetails: state.userDetails,
      };
    case "SET_Users":
      console.log('hi', action.payload);
      return {
        ...state,
        userDetails: {userDetails : action.payload},
      };
    default:
      return state;
  }
}
