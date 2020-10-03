import {
  FETCH_NOTIFICATONS_LOADING,
  FETCH_NOTIFICATONS_SUCCESS,
  FETCH_NOTIFICATONS_ERROR,
} from "./Types";

export const fetchNotificationsLoading = () => {
  return {
    type: FETCH_NOTIFICATONS_LOADING,
  };
};

export const fetchNotificationsSuccess = (payload) => {
  return {
    type: FETCH_NOTIFICATONS_SUCCESS,
    payload,
  };
};

export const fetchNotificationsError = (payload) => {
  return {
    type: FETCH_NOTIFICATONS_ERROR,
    payload,
  };
};
