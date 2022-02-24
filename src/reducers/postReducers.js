import {
  POST_LIST_FAIL,
  POST_LIST_SUCCESS,
  POST_LIST_REQUEST,
  POST_FAIL,
  POST_REQUEST,
  POST_SUCCESS,
} from '../constants/postConstants';

export const postListReducer = (state = {}, action) => {
  switch (action.type) {
    case POST_LIST_REQUEST:
      return { loading: true };
    case POST_LIST_SUCCESS:
      return { loading: false, success: true, posts: action.payload };
    case POST_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const thePostReducer = (state = {}, action) => {
  switch (action.type) {
    case POST_REQUEST:
      return { loading: true };
    case POST_SUCCESS:
      return { loading: false, success: true, thePost: action.payload };
    case POST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
