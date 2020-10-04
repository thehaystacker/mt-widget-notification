import React, { useState } from "react";
import PropTypes from "prop-types";
import { faBell, faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

import "./style.scss";
import Notifications from "../../Pages/Notifications";

function Notification(props) {
  // destructuring the props
  const { data, theme, variant, markAllRead } = props;
  // component local state
  const [open, setOpen] = useState(false);

  return (
    <div
      className={[`wrap-notif`, theme, variant, open ? `open` : ``].join(" ")}
    >
      <div className="wrap-ico" onClick={() => setOpen(true)}>
        <FontAwesomeIcon icon={faBell} className="ico" />
        <div className="wrap-badge">{data.unread_count}</div>
      </div>

      <div className="wrap-dropdown">
        <div className="list-box">
          <div className="header">
            <FontAwesomeIcon icon={faBell} className="ico-header bell" />
            <h5 className="txt-h5">Notifications</h5>
            <FontAwesomeIcon
              icon={faCheckCircle}
              className="ico-header read-all link-ico"
              onClick={markAllRead}
              data-testid="btn-markallread"
              title="Mark all as read"
            />
          </div>

          {data.data ? (
            <div className="list">
              {Object.keys(data.data).map((id) => (
                <a href={`/notifications/${id}`} target="_blank" rel="noopener noreferrer" key={id}>
                  <div
                    className={[
                      `item`,
                      data.data[id].is_read ? `` : `unread`,
                    ].join(" ")}
                  >
                    <div className="prof-ico">
                      <img src={data.data[id].prof_ico} alt="" />
                    </div>
                    <div className="content">
                      <p>
                        <span className="txt-b txt-name">
                          {data.data[id].username}
                        </span>
                        <span>commented {data.data[id].text}</span>
                      </p>
                      <p className="time">{data.data[id].created}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          ) : null}

          <div className="footer">
            <a href="/notifications" target="_blank" rel="noopener noreferrer">
              See all notifications
            </a>
          </div>
        </div>
        <div className="overlay" onClick={() => setOpen(false)}></div>
      </div>
    </div>
  );
}

// Defining the prop types for the component
Notifications.propTypes = {
  theme: PropTypes.oneOf(["light", "dark"]).isRequired,
  variant: PropTypes.oneOf(["primary", "success", "warning", "danger"]),
  markAllRead: PropTypes.func,
};

Notifications.defaultProps = {
  theme: "primary",
  variant: "light",
};

export default Notification;
