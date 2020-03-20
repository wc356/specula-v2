// Export stateless functional component
import React from "react";
import { removePhone } from "../actions/phones";
import { connect } from "react-redux";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";
// import phones from "../database/index";

const PhoneListItem = ({
  dispatch,
  id,
  name,
  release,
  price,
  brand,
  display,
  screen,
  dimensions
}) => (
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
    <button
      onClick={() => {
        dispatch(removePhone({ id }));
      }}
    >
      Remove
    </button>

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
          border: 1px solid lightgray;
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
      `}
    </style>
  </li>
);

// phones.map(phone => {
//   return (
//     <li key={uuidv4()} className="card">
//       <div className="img-container"></div>
//       <div className="title">
//         <Link href="/about">
//           <a>{phone.name}</a>
//         </Link>
//       </div>
//       <ul className="phone-spec">
//         <li>{phoneDescription(phone)}</li>
//       </ul>
//       <button onClick={removePhone({ id })}></button>

//       <style jsx>
//         {`
//           .card {
//             display: block;
//             min-height: 425px;
//             width: 240px;
//             border: 1px solid #eee;
//             font-size: 14px;
//             margin-bottom: 15px;
//             padding-top: 20px;
//             border-radius: 5px;
//             transition: all 0.15s;
//             box-shadow: 2px 2px 8px lightgray;
//           }
//           .card:hover {
//             transform: translateY(-13px);
//             border: 1px solid lightgray;
//           }
//           .img-container {
//             display: block;
//             margin: 0 auto;
//             height: 250px;
//             width: 200px;
//             border-radius: 3px;
//             background-color: lavender;
//           }
//           .phone-spec {
//             line-height: 1.5;
//             padding: 0 20px;
//           }
//           .title {
//             text-align: center;
//             margin: 10px 0;
//             font-weight: 600;
//           }
//         `}
//       </style>
//     </li>
//   );
// });

// function phoneDescription(phone) {
//   const keys = Object.keys(phone).map(key => {
//     return (
//       <p key={uuidv4()}>{capitalizeFirstLetter(key) + `: ${phone[key]}`}</p>
//     );

//     function capitalizeFirstLetter([first, ...rest]) {
//       return [first.toUpperCase(), ...rest].join("");
//     }
//   });
//   // Remove First Key - Name
//   keys.shift();
//   return keys;
// }

export default connect()(PhoneListItem);
