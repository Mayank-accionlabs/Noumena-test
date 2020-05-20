import React, {useEffect} from "react";
import { Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { useDispatch } from "react-redux";
import Login from "./Login/Login";
import LoginPage from "./Login/LoginPage";
import Register from './register/Register'
const App = ({ history, getInitialState }) => {
  const dispatch= useDispatch();
  useEffect(() => {
    dispatch({type: 'SET_Users'});
  });
  return (
    <ConnectedRouter history={history}>
        <Route exact path="/" component={Login} />
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={Register} />
    </ConnectedRouter>
  );
}

export default App;