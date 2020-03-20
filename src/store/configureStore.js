import { createStore, combineReducers } from "redux";
import phonesReducer from "../reducers/phones";
import filtersReducer from "../reducers/filters";

export default () => {
  // Store creation
  const store = createStore(
    combineReducers({
      phones: phonesReducer,
      filters: filtersReducer
    })
  );
  return store;
};
