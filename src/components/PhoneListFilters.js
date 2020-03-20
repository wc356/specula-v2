import React from "react";
import { connect } from "react-redux";
import {
  setTextFilter,
  sortByPrice,
  sortByRelease,
  sortByBrand
} from "../actions/filters";

const PhoneListFilters = props => (
  <div>
    <input
      type="text"
      value={props.filters.text}
      onChange={e => {
        props.dispatch(setTextFilter(e.target.value));
      }}
      placeholder="search phone"
    />
    <select
      value={props.filters.sortBy}
      onChange={e => {
        let sortBy;
        switch (e.target.value) {
          case "release":
            sortBy = sortByRelease();
            break;
          case "price":
            sortBy = sortByPrice();
            break;
          case "brand":
            sortBy = sortByBrand();
            break;
        }
        props.dispatch(sortBy);
      }}
    >
      <option value="release">Release</option>
      <option value="price">Price</option>
      <option value="brand">Brand</option>
    </select>
  </div>
);

const mapStateToProps = state => {
  return {
    filters: state.filters
  };
};

export default connect(mapStateToProps)(PhoneListFilters);
