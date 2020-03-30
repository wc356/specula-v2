// Export stateless functional component
import React, { useContext } from "react";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";

import PhonesContext from "../context/phones-context";
import { removePhone } from "../actions/phones";

const PhoneListItem = ({
  id,
  name,
  release,
  price,
  brand,
  display,
  screen,
  dimensions
}) => {
  const { phonesDispatch } = useContext(PhonesContext);

  return (
    <li key={uuidv4()} className="card">
      <div className="img-container"></div>
      <div className="title">
        <Link href="/about">
          <a>{name}</a>
        </Link>
      </div>
      <ul className="phone-spec">
        <li>Released: {release}</li>
        <li>Price: ${price}</li>
        <li>Brand: {brand}</li>
        <li>Display: {display}</li>
        <li>Screen: {screen}</li>
        <li>Dimensions: {dimensions}</li>
      </ul>
      <div className="btn-container">
        <button
          className="btn"
          onClick={() => {
            phonesDispatch(removePhone({ id }));
          }}
        >
          Remove
        </button>
      </div>

      <style jsx>
        {`
          .card {
            display: block;
            min-height: 425px;
            width: 240px;
            border: 1px solid #eee;
            font-size: 14px;
            margin-bottom: 15px;
            padding-top: 20px;
            border-radius: 5px;
            transition: all 0.15s;
            box-shadow: 2px 2px 8px lightgray;
          }
          .card:hover {
            transform: translateY(-13px);
            border: 1px solid pink;
          }
          .img-container {
            display: block;
            margin: 0 auto;
            height: 250px;
            width: 200px;
            border-radius: 3px;
            background-color: lavender;
          }
          .phone-spec {
            line-height: 1.5;
            padding: 0 20px;
          }
          .title {
            text-align: center;
            margin: 10px 0;
            font-weight: 600;
          }
          .btn-container {
            display: flex;
            justify-content: center;
          }
          .btn {
            display: block;
            margin: 10px 0;
            width: 100px;
            height: 30px;
            border-radius: 10px;
            background-color: pink;
            border: none;
          }
        `}
      </style>
    </li>
  );
};

export default PhoneListItem;
