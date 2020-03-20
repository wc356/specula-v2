import React from "react";
import configureStore from "../src/store/configureStore";
import Layout from "../src/components/Layout";
import PhoneDashboardPage from "../src/components/PhoneDashboardPage";
import { Provider } from "react-redux";
import { addPhone } from "../src/actions/phones";
import getVisiblePhones from "../src/selectors/phones";

const store = configureStore();
store.dispatch(
  addPhone({ name: "iPhone 8", release: "Sept 2018", price: 900 })
);
store.dispatch(
  addPhone({ name: "iPhone 11", release: "Jan 2018", price: 900 })
);
const state = store.getState();
const visiblePhones = getVisiblePhones(state.phones, state.filters);
console.log(visiblePhones);

const Index = () => (
  <Provider store={store}>
    <Layout>
      <PhoneDashboardPage />
    </Layout>
  </Provider>
);

export default Index;
