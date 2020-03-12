import Layout from "../components/Layout";
import phones from "../database/index";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";

const Index = () => {
  return (
    <Layout>
      <div className="body">
        <ul className="container">{renderPhones()}</ul>
      </div>
      <style jsx>
        {`
          .container {
            display: flex;
            justify-content: space-evenly;
          }
        `}
      </style>
    </Layout>
  );
};

const renderPhones = () => {
  const phoneList = phones.map(phone => {
    return (
      <li key={uuidv4()} className="card">
        <div className="img-container"></div>
        <div className="title">
          <Link href="/about">
            <a>{phone.name}</a>
          </Link>
        </div>
        <ul className="phone-spec">
          <li>{phoneDescription(phone)}</li>
        </ul>
        <style jsx>
          {`
            .card {
              display: block;
              border: 1px solid black;
              font-size: 14px;
            }
            .img-container {
              display: block;
              height: 280px;
              width: 100%;
              background-color: lightgray;
            }
            .phone-spec {
              line-height: 1.5;
              padding: 0 10px;
            }
            .title {
              text-align: center;
              margin: 10px 0;
              font-weight: 600;
            }
          `}
        </style>
      </li>
    );
  });
  return phoneList;
};

const phoneDescription = phone => {
  const keys = Object.keys(phone).map(key => {
    return (
      <p key={uuidv4()}>{capitalizeFirstLetter(key) + `: ${phone[key]}`}</p>
    );

    function capitalizeFirstLetter([first, ...rest]) {
      return [first.toUpperCase(), ...rest].join("");
    }
  });
  keys.shift();
  return keys;
};

export default Index;
