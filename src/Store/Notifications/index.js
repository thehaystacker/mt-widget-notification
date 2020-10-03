import {
  FETCH_NOTIFICATONS_LOADING,
  FETCH_NOTIFICATONS_SUCCESS,
  FETCH_NOTIFICATONS_ERROR,
} from "./Types";

const initialState = {
  notificationsLoading: false,
  notificationsData: null,
  notificationsError: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NOTIFICATONS_LOADING:
      return {
        ...state,
        notificationsLoading: true,
      };
    case FETCH_NOTIFICATONS_SUCCESS:
      return {
        ...state,
        notificationsLoading: false,
        notificationsData: action.payload,
      };
    case FETCH_NOTIFICATONS_ERROR:
      return {
        ...state,
        notificationsLoading: false,
        notificationsError: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
