import React, { useContext } from "react";
import PhonesContext from "../context/phones-context";

import {
  setTextFilter,
  sortByPrice,
  sortByRelease,
  sortByBrand
} from "../actions/filters";

const PhoneListFilters = () => {
  const { filters, filtersDispatch } = useContext(PhonesContext);

  return (
    <div>
      <input
        type="text"
        value={filters.text}
        onChange={e => {
          filtersDispatch(setTextFilter(e.target.value));
        }}
        placeholder="search by phone, brand or display..."
      />

      <select
        value={filters.sortBy}
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
          filtersDispatch(sortBy);
        }}
      >
        <option value="release">Release</option>
        <option value="price">Price</option>
        <option value="brand">Brand</option>
      </select>
      <style jsx>
        {`
          input {
            width: 220px;
          }
        `}
      </style>
    </div>
  );
};

export default PhoneListFilters;
