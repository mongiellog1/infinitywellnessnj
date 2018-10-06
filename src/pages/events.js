import React from "react";
import Layout from "../components/layout/index";
import Events from "../components/events";

const EventsPage = () => (
  <Layout>
    <h1>Come check out an event!</h1>
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <Events />
    </div>
  </Layout>
);

export default EventsPage;
