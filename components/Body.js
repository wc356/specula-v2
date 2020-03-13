import phones from "../database/index";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";

const Body = () => (
  <>
    <div className="body">
      <ul className="container">{renderBody()}</ul>
    </div>

    <style jsx>
      {`
        .container {
          display: flex;
          justify-content: space-evenly;
          flex-wrap: wrap;
          padding-top: 100px;
        }
      `}
    </style>
  </>
);

function renderBody() {
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
              border: 1px solid gray;
            }
            .img-container {
              display: block;
              margin: 0 auto;
              height: 250px;
              width: 200px;
              border-radius: 3px;
              background-color: #eee;
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
          `}
        </style>
      </li>
    );
  });
  return phoneList;
}

function phoneDescription(phone) {
  const keys = Object.keys(phone).map(key => {
    return (
      <p key={uuidv4()}>{capitalizeFirstLetter(key) + `: ${phone[key]}`}</p>
    );

    function capitalizeFirstLetter([first, ...rest]) {
      return [first.toUpperCase(), ...rest].join("");
    }
  });
  // Remove First Key - Name
  keys.shift();
  return keys;
}

export default Body;
