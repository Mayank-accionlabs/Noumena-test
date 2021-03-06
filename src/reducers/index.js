import { combineReducers } from "redux";
import userDetails from "./getUserDetails";
import { connectRouter } from "connected-react-router";

export default history =>
  combineReducers({
    router: connectRouter(history),
    userDetails
  });
