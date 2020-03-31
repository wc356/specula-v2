import React from "react";
import Layout from "../src/components/Layout";

const AboutPage = () => {
  const bodyContent = `Specula is an intuitive application for quickly comparing the different phones available on the market.
  You can now quickly sort by phone names, brand or even display at an instant! If there are any Phone you would like to add
  for temporary addition, you can do so by accessing the AddPhone page.`;

  return (
    <div className="background">
      <Layout>
        <div className="body">
          <h1 className="title">What is specula ?</h1>
          <p className="content">{bodyContent}</p>
        </div>
      </Layout>

      <style jsx>
        {`
          .background {
            background: linear-gradient(to right, #5834db, #e60073);
            color: white;
            min-height: 100vh;
          }
          .body {
            text-align: center;
            padding: 0 200px;
          }
          .title {
            margin-bottom: 30px;
          }
          .content {
            text-align: left;
            line-height: 2;
          }
        `}
      </style>
    </div>
  );
};

export default AboutPage;
