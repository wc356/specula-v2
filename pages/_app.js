import React, { useEffect, useReducer } from "react";
import PhonesContext from "../src/context/phones-context";

import phoneDB from "../src/database/index";
import filtersReducer from "../src/reducers/filters";
import phonesReducer from "../src/reducers/phones";

const App = ({ Component, pageProps }) => {
  const [phones, phonesDispatch] = useReducer(phonesReducer, phoneDB);
  const [filters, filtersDispatch] = useReducer(filtersReducer, {
    text: "",
    sortBy: "release"
  });

  useEffect(() => {
    console.log("Successfully Mounted");
    // Load data from localStorage
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
