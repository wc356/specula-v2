import Layout from "../components/Layout";
import phones from "../database/index";
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
        <div className="title">
          <a>{phone.name}</a>
        </div>
        <ul>
          <li>{phoneDescription(phone)}</li>
        </ul>
        <style jsx>
          {`
            li {
              list-style: none;
            }
            ul {
              padding-left: 0;
            }
            .card {
              border: 1px solid black;
            }
            .title {
              text-align: center;
            }
            .phone-name {
              text-transform: capitalize;
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
  return keys;
};

export default Index;
