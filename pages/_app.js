import React, { useEffect, useReducer } from "react";
import PhonesContext from "../src/context/phones-context";

import filtersReducer from "../src/reducers/filters";
import phonesReducer from "../src/reducers/phones";

import { addPhone } from "../src/actions/phones";

const App = ({ Component, pageProps }) => {
  const [phones, phonesDispatch] = useReducer(phonesReducer, []);
  const [filters, filtersDispatch] = useReducer(filtersReducer, {
    text: "",
    sortBy: "release"
  });

  // componentDidMount() - Initial Render Phones
  useEffect(() => {
    console.log("Successfully Mounted");
    phonesDispatch(
      addPhone({ name: "iPhone 8", release: "Sept 2018", price: 900 })
    );
    phonesDispatch(
      addPhone({ name: "iPhone 11", release: "Oct 2019", price: 1800 })
    );
    phonesDispatch(
      addPhone({ name: "iPhone 12", release: "Jan 2020", price: 3200 })
    );
    phonesDispatch(
      addPhone({
        name: "iPhone 13",
        release: "Jan 2020",
        price: 4000,
        brand: "Apple"
      })
    );
    phonesDispatch(
      addPhone({
        name: "Galaxy Note 8",
        release: "Sept 2018",
        price: 3300,
        brand: "Samsung"
      })
    );
  }, []);

  // Load data from localStorage
  useEffect(() => {
    const phones = JSON.parse(localStorage.getItem("phones"));
    if (phones) {
      phonesDispatch({ type: "POPULATE_PHONES", phones });
    }
  }, []);

  // Save item 'phones' to localStorage
  useEffect(() => {
    localStorage.setItem("phones", JSON.stringify(phones));
  }, [phones]);

  return (
    <PhonesContext.Provider
      value={{ phones, phonesDispatch, filters, filtersDispatch }}
    >
      <Component {...pageProps} />
    </PhonesContext.Provider>
  );
};

export default App;
