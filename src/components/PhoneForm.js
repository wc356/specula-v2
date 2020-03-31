import React, { useState } from "react";

const PhoneForm = props => {
  const [name, setName] = useState("");
  const [release, setRelease] = useState("");
  const [price, setPrice] = useState("");
  const [brand, setBrand] = useState("");
  const [display, setDisplay] = useState("");
  const [screen, setScreen] = useState("");
  const [dimensions, setDimensions] = useState("");
  const [error, setError] = useState("");

  const onNameChange = e => setName(e.target.value);
  const onReleaseChange = e => setRelease(e.target.value);
  const onBrandChange = e => setBrand(e.target.value);
  const onDisplayChange = e => setDisplay(e.target.value);
  const onScreenChange = e => setScreen(e.target.value);
  const onDimensionsChange = e => setDimensions(e.target.value);
  const onPriceChange = e => {
    // Regex to constrain currency input to two decimal places
    const val = e.target.val;
    if (!val || val.match(/^\d{1,}(\.\d{0,2})?$/)) {
      setPrice(val);
    }
  };

  const onSubmit = e => {
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
        dimensions
      });
    }
  };

  return (
    <div>
      {error && <p>{error}</p>}
      <form className="container" onSubmit={onSubmit}>
        <input
          className="flex-item"
          type="text"
          value={name}
          onChange={onNameChange}
          placeholder="phone name"
          autoFocus
        />
        <input
          className="flex-item"
          type="text"
          value={release}
          onChange={onReleaseChange}
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
          value={brand}
          onChange={onBrandChange}
          placeholder="brand"
        />
        <input
          className="flex-item"
          type="text"
          value={display}
          onChange={onDisplayChange}
          placeholder="display"
        />
        <input
          className="flex-item"
          type="text"
          value={screen}
          onChange={onScreenChange}
          placeholder="screen"
        />
        <input
          className="flex-item"
          type="text"
          value={dimensions}
          onChange={onDimensionsChange}
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
