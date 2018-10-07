import React from "react";
import Layout from "../components/layout/index";
import Banner from "../components/banner";

const PackagesPage = () => (
  <Layout>
    <Banner flag="packages" />
    <div className="container container--pad-top">
      <h1 className="purple">Packages</h1>
    </div>
  </Layout>
);

export default PackagesPage;
