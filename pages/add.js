import React from "react";
import { connect } from "react-redux";
import PhoneForm from "../src/components/PhoneForm";
import { addPhone } from "../src/actions/phones";

const AddPhonePage = props => (
  <div>
    <h1>Add Phones</h1>
    <PhoneForm
      onSubmit={phone => {
        props.dispatch(addPhone(phone));
      }}
    />
  </div>
);

AddPhonePage.getInitialProps = ({ store, isServer, pathname, query }) => {
  store.dispatch(addPhone(phone)); // The component can read from the store's state when rendered
  return { custom: "custom" }; // You can pass some custom props to the component from here
};

export default connect(state => state)(AddPhonePage);
