import React from "react";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./style.scss";

function Notifications() {
  return (
    <div className="wrap-page-notifications">
      <FontAwesomeIcon icon={faBell} className="ico" />
      <h3>Notification page</h3>
    </div>
  );
}

export default Notifications;
