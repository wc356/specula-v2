import React from "react";
import { connect } from "react-redux";
import configureStore from "../src/store/configureStore";
import Layout from "../src/components/Layout";
import PhoneDashboardPage from "../src/components/PhoneDashboardPage";
import { addPhone } from "../src/actions/phones";
import { Provider } from "react-redux";
import getVisiblePhones from "../src/selectors/phones";

const Index = props => (
  <Layout>
    <PhoneDashboardPage />
    <div>Prop from Redux {props.name}</div>
  </Layout>
);

Index.getInitialProps = ({ store, isServer, pathname, query }) => {
  store.dispatch(
    addPhone({ name: "iPhone 8", release: "Sept 2018", price: 900 })
  );
  store.dispatch(
    addPhone({ name: "iPhone 11", release: "Jan 2018", price: 1600 })
  );
  const state = store.getState();
  getVisiblePhones(state.phones, state.filters);
};

export default connect(state => {
  return state;
})(Index);
