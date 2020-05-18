export const getUserData = () => async (dispatch) => {
  return dispatch({
    type: "GET_ALL_Users"
  });
};

export const setUserData = (data) => (dispatch) => {
  console.log('yyyyyyyyyyyyyyyyyyyyyyy');
  return dispatch({
    type: "SET_Users",
    payload: data
  });
};
