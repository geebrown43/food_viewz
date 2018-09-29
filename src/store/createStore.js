import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import reducer from "../reducers";

let middleware = [thunk];

if (__DEV__) {
  const reduxImmutableStateInvariant = require("redux-immutable-state-invariant").default();
  middleware = [...middleware, reduxImmutableStateInvariant, logger];
} else {
  middleware = [...middleware];
}

export default (configureStore = () => {
  return createStore(reducer, applyMiddleware(...middleware));
});
