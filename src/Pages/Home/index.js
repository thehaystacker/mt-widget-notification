import React from "react";
import Header from "../../Components/Header";
import Content from "./Content";

import "./style.scss";

function index(props) {
  return (
    <div className="wrap-home">
      <div className="container card">
        <Header />
        <Content />
      </div>
    </div>
  );
}

export default index;
