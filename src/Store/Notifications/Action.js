import {
  fetchNotificationsError,
  fetchNotificationsLoading,
  fetchNotificationsSuccess,
} from "./ActonTypes";

import data from "../../Components/Header/data";

export const fetchNotificationsAction = () => async (dispatch) => {
  dispatch(fetchNotificationsLoading());

  // Async Request call will be done here, and the data will be
  // replaced with the actual response data
  if (data.success) {
    dispatch(fetchNotificationsSuccess(data));
  } else {
    dispatch(
      fetchNotificationsError({
        success: false,
        error: `An unexpected error occured`,
      })
    );
  }
};

export const markAllReadAction = () => (dispatch) => {
  const response = { ...data.data };
  const filtered = Object.keys(response)
    .filter((key) => {
      return response[key].is_read === false;
    })
    .reduce((acc, k) => {
      return {
        ...acc,
        [k]: { ...response[k], is_read: true },
      };
    }, {});
  // Updating actual data to API happens here
  dispatch(
    fetchNotificationsSuccess({
      ...data,
      data: { ...data.data, ...filtered },
      unread_count: 0
    })
  );
};
