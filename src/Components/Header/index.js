import React from "react";
import { faGem, faBell, faUser, faCompass } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Notification from '../Notification'

import "./style.scss";

function Header() {
  return (
    <div className="wrap-header">
      <div className="left">
        <div className="brand">
          <FontAwesomeIcon icon={faGem} className="ico" />
        </div>
      </div>
      <div className="right">
        <ul className="nav">
          <li>
            <Notification />
          </li>
          <li>
            <FontAwesomeIcon icon={faCompass}  className="ico" />
          </li>
          <li>
            <FontAwesomeIcon icon={faUser}  className="ico" />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
