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

export default connect()(AddPhonePage);
