import React, { useContext } from "react";
import Link from "next/link";

import PhonesContext from "../src/context/phones-context";
import PhoneForm from "../src/components/PhoneForm";
import { addPhone } from "../src/actions/phones";

const AddPhonePage = () => {
  const { phonesDispatch } = useContext(PhonesContext);

  return (
    <div>
      <div className="title-container">
        <h1 className="title">Add Phones</h1>
      </div>
      <PhoneForm
        onSubmit={phone => {
          console.log(phone);
          phonesDispatch(addPhone(phone));
        }}
      />
      <div className="btn-container">
        <Link href="/">
          <a className="btn">Back</a>
        </Link>
      </div>

      <style jsx>
        {`
          @import url("https://fonts.googleapis.com/css?family=Poppins&display=swap");
          *,
          *::before,
          *::after {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            font-family: "Poppins", sans-serif;
          }
          li {
            list-style: none;
          }
          a {
            text-decoration: none;
            transition: all 0.15s;
            color: darkblue;
          }
          a:visited {
            color: none;
          }
          a:hover {
            transform: translateY(-5px);
          }
          .title-container {
            display: flex;
            justify-content: center;
          }
          .title {
            display: block;
            margin: 15px;
          }
          .btn-container {
            display: flex;
            justify-content: center;
          }
          .btn {
            display: inline-block;
            text-align: center;
            margin-top: 30px;
            width: 300px;
            border-radius: 10px;
            border: 1px gray solid;
            color: black;
          }
        `}
      </style>
    </div>
  );
};

export default AddPhonePage;
