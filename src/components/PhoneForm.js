import React, { useState } from "react";
import useInput from "../hooks/useInput";

const PhoneForm = (props) => {
  const [name, bindName, resetName] = useInput("");
  const [release, bindRelease, resetRelease] = useInput("");
  const [price, setPrice] = useState("");
  const [brand, bindBrand, resetBrand] = useInput("");
  const [display, bindDisplay, resetDisplay] = useInput("");
  const [screen, bindScreen, resetScreen] = useInput("");
  const [dimensions, bindDimensions, resetDimensions] = useInput("");
  const [error, setError] = useState("");

  const resetPrice = () => {
    setPrice("");
  };

  const onPriceChange = (e) => {
    // Regex to constrain currency input to two decimal places
    const val = e.target.val;
    if (!val || val.match(/^\d{1,}(\.\d{0,2})?$/)) {
      setPrice(val);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!name || !brand) {
      setError("Please provide Name and Brand");
    } else {
      setError("");

      props.onSubmit({
        name,
        release,
        price,
        brand,
        display,
        screen,
        dimensions,
      });

      resetName();
      resetRelease();
      resetPrice();
      resetBrand();
      resetDisplay();
      resetScreen();
      resetDimensions();
    }
  };

  return (
    <div>
      {error && <p>{error}</p>}
      <form className="container" onSubmit={onSubmit}>
        <input
          className="flex-item"
          type="text"
          {...bindName}
          placeholder="phone name"
          autoFocus
        />
        <input
          className="flex-item"
          type="text"
          {...bindRelease}
          placeholder="release year"
        />
        <input
          className="flex-item"
          type="text"
          value={price}
          onChange={onPriceChange}
          placeholder="phone price"
        />
        <input
          className="flex-item"
          type="text"
          {...bindBrand}
          placeholder="brand"
        />
        <input
          className="flex-item"
          type="text"
          {...bindDisplay}
          placeholder="display"
        />
        <input
          className="flex-item"
          type="text"
          {...bindScreen}
          placeholder="screen"
        />
        <input
          className="flex-item"
          type="text"
          {...bindDimensions}
          placeholder="dimensions"
        />
        <button className="btn">ADD EXPENSE</button>
      </form>
      <style jsx>
        {`
          .container {
            display: flex;
            flex-direction: column;
            padding: 0 100px;
          }
          .flex-item {
            margin-bottom: 20px;
            border-radius: 8px;
            border: solid 0.5px lightgray;
          }
          .btn {
            background-color: gray;
            font-size: 15px;
            height: 30px;
            border-radius: 15px;
            color: white;
          }
        `}
      </style>
    </div>
  );
};

export default PhoneForm;
