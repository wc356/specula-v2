import React, { useContext } from "react";
import Link from "next/link";

import Layout from "../src/components/Layout";
import PhonesContext from "../src/context/phones-context";
import PhoneForm from "../src/components/PhoneForm";
import { addPhone } from "../src/actions/phones";

const AddPhonePage = () => {
  const { phonesDispatch } = useContext(PhonesContext);

  return (
    <div className="background">
      <Layout>
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
      </Layout>

      <style jsx>
        {`
          .background {
            background: linear-gradient(to right, #5834db, #e60073);
            min-height: 100vh;
            color: white;
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
            border: 3px gray solid;
          }
          .btn:visited {
            color: white;
          }
        `}
      </style>
    </div>
  );
};

export default AddPhonePage;
