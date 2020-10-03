import React from "react";
import { faBell, faFileAlt } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

import "./style.scss";
import { useState } from "react";

function Notification(props) {
  const { data, theme, variant, markAllRead } = props;

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
              icon={faFileAlt}
              className="ico-header read-all link-ico"
              onClick={markAllRead}
            />
          </div>
          {data.data ? (
            <div className="list">
              {Object.keys(data.data).map((id) => (
                <Link to={`/notifications/${id}`} target="_blank" key={id}>
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
                </Link>
              ))}
            </div>
          ) : null}
          <div className="footer">
            <Link to="/notifications" target="_blank">
              See all notifications
            </Link>
          </div>
        </div>
        <div className="overlay" onClick={() => setOpen(false)}></div>
      </div>
    </div>
  );
}

export default Notification;
