import React from "react";
import { faBell, faFileAlt } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './style.scss'
import { useState } from "react";

function Notification(props) {
const [open, setOpen] = useState(false)
  
  return (
    <div className={[`wrap-notif`, open? `open` : ``].join(' ')}>
      <div className="wrap-ico" onClick={() => setOpen(true)}>
        <FontAwesomeIcon icon={faBell} className="ico" />
        <div className="wrap-badge">125</div>
      </div>
      <div className="wrap-dropdown">
        <div className="list-box">
          <div className="header">
            <FontAwesomeIcon icon={faBell} className="ico-header bell" />
            <h5 className="txt-h5">Notifications</h5>
            <FontAwesomeIcon icon={faFileAlt} className="ico-header read-all" />
          </div>
          <div className="footer">
            <h5>See all notifications</h5>
          </div>
        </div>
        <div className="overlay" onClick={() => setOpen(false)}></div>
      </div>
    </div>
  );
}

export default Notification;
