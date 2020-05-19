import React from "react";
import App from "./App";
import { shallow } from "enzyme";
import { Provider } from "react-redux";
import configureStore, { history } from "../configureStore";

const store = configureStore();
describe("App tests", () => {
  test("renders without crashing", () => {
    const wrapper = shallow(
      <Provider store={store}>
        <App history={history} />
      </Provider>
    );
    expect(wrapper.contains(<App history={history} />)).toBe(true);
  });
});
