import React from "react";
import { faGem, faUser, faCompass } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Notification from "../Notification";
import { connect } from "react-redux";

import "./style.scss";
import { fetchNotificationsAction, markAllReadAction } from "../../Store/Notifications/Action";
import { useEffect } from "react";

function Header(props) {
  const { notificationsData } = props;

  useEffect(() => {
    props.fetchNotifications();
    // eslint-disable-next-line
  }, []);

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
            {notificationsData ? (
              /*
              @params
              @data: the API response data to be renedered (object)
              @theme: dark || light (string)
              @variant: primary || success || warning || danger (string)
              @markAllRead: mark all notifications as read CTA (function)
              */
              <Notification
                data={notificationsData}
                theme="light"
                variant="success"
                markAllRead={props.markAllRead}
              />
            ) : null}
          </li>
          <li>
            <FontAwesomeIcon icon={faCompass} className="ico" />
          </li>
          <li>
            <FontAwesomeIcon icon={faUser} className="ico" />
          </li>
        </ul>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    notificationsData: state.alerts.notificationsData,
  };
};

const mapDispatchToAction = (dispatch) => {
  return {
    fetchNotifications: () => dispatch(fetchNotificationsAction()),
    markAllRead: () => dispatch(markAllReadAction()),
  };
};

export default connect(mapStateToProps, mapDispatchToAction)(Header);
