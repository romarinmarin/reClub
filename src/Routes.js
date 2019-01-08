import React from "react";
import Layout from "./Components/Layout";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Components/Home/Home";

const Routes = () => {
  return (
    <Layout>
      <Header />
      <Home />
      <Footer />
    </Layout>
  );
};

export default Routes;
