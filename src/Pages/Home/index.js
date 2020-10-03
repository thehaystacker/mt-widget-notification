import React from "react";
import { connect } from "react-redux";
import Header from "../../Components/Header";
import Content from "./Content";

import './style.scss'

function index(props) {
  const { name } = props;

  return (
    <div className="wrap-home">
      <div className="container card">
        <Header />
        <Content />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    name: state.alerts.name,
  };
};

export default connect(mapStateToProps)(index);
