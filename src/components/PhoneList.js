import React, { useContext } from "react";
import PhonesContext from "../context/phones-context";

import getVisiblePhones from "../selectors/phones";
import PhoneListItem from "./PhoneListItem";

const PhoneList = () => {
  const { phones, filters } = useContext(PhonesContext);

  return (
    <ul className="phone-list">
      {getVisiblePhones(phones, filters).map(phone => (
        <PhoneListItem key={phone.id} {...phone} />
      ))}
      <style jsx>
        {`
          .phone-list {
            display: flex;
            justify-content: space-evenly;
            flex-wrap: wrap;
            padding-top: 100px;
          }
        `}
      </style>
    </ul>
  );
};

export default PhoneList;
