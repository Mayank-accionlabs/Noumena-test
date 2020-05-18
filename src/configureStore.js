import { createMemoryHistory } from "history";
import { applyMiddleware, createStore } from "redux";
import { routerMiddleware } from "connected-react-router";
import createRootReducer from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import thunk from "redux-thunk";

export const history = createMemoryHistory();

export default function configureStore(preloadedState) {
  const store = createStore(
    createRootReducer(history),
    preloadedState,
    composeWithDevTools(applyMiddleware(routerMiddleware(history), thunk))
  );

  return store;
}
