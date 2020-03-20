import React from "react";
import { connect } from "react-redux";
import PhoneListItem from "./PhoneListItem";
import selectPhones from "../selectors/phones";

const PhoneList = props => (
  <ul className="phone-list">
    {props.phones.map(phone => {
      return <PhoneListItem key={phone.id} {...phone} />;
    })}
    <style jsx>
      {`
        .phone-list {
          display: flex;
          justify-content: space-evenly;
          flex-wrap: wrap;
          padding-top: 100px;
        }
      `}
    </style>
  </ul>
);

const mapStateToProps = state => {
  return {
    phones: selectPhones(state.phones, state.filters)
  };
};

export default connect(mapStateToProps)(PhoneList);
