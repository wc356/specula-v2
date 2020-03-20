import React, { useState } from "react";

const PhoneForm = props => {
  const [name, setName] = useState("");
  const [release, setRelease] = useState("");
  const [price, setPrice] = useState(0);
  const [brand, setBrand] = useState("");
  const [display, setDisplay] = useState("");
  const [screen, setScreen] = useState(0);
  const [dimensions, setDimensions] = useState("");
  const [error, setError] = useState("");

  // const onInputChange = e, val => `set${}Change`
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
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={name}
          onChange={onNameChange}
          placeholder="name"
          autoFocus
        />
        <input
          type="text"
          value={release}
          onChange={onReleaseChange}
          placeholder="release"
        />
        <input
          type="text"
          value={price}
          onChange={onPriceChange}
          placeholder="price"
        />
        <input
          type="text"
          value={brand}
          onChange={onBrandChange}
          placeholder="brand"
        />
        <input
          type="text"
          value={display}
          onChange={onDisplayChange}
          placeholder="display"
        />
        <input
          type="text"
          value={screen}
          onChange={onScreenChange}
          placeholder="screen"
        />
        <input
          type="text"
          value={dimensions}
          onChange={onDimensionsChange}
          placeholder="dimensions"
        />
        <button>Add Expense</button>
      </form>
    </div>
  );
};

export default PhoneForm;
