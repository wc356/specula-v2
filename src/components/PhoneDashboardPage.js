import React from "react";

import Layout from "../components/Layout";
import PhoneList from "./PhoneList";

const PhoneDashboardPage = () => (
  <div className="background">
    <Layout>
      <PhoneList />
    </Layout>
    <style jsx>
      {`
        .background {
          background: linear-gradient(to right, #5834db, #e60073);
          min-height: 100vh;
        }
      `}
    </style>
  </div>
);

export default PhoneDashboardPage;
