import {
  POST_LIST_FAIL,
  POST_LIST_SUCCESS,
  POST_LIST_REQUEST,
  POST_FAIL,
  POST_REQUEST,
  POST_SUCCESS,
  COMMENTS_REQUEST,
  COMMENTS_SUCCESS,
  COMMENTS_FAIL,
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
      return { loading: false, success: true, post: action.payload };
    case POST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const commentListReducer = (state = {}, action) => {
  switch (action.type) {
    case COMMENTS_REQUEST:
      return { loading: true };
    case COMMENTS_SUCCESS:
      return { loading: false, success: true, comments: action.payload };
    case COMMENTS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
