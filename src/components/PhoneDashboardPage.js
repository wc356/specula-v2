import React from "react";
import { connect } from "react-redux";
import PhoneList from "./PhoneList";

const PhoneDashboardPage = () => (
  <div>
    <PhoneList />
  </div>
);

export default connect()(PhoneDashboardPage);
