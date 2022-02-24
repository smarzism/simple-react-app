import axios from 'axios';
import {
  POST_LIST_FAIL,
  POST_LIST_SUCCESS,
  POST_LIST_REQUEST,
  POST_FAIL,
  POST_REQUEST,
  POST_SUCCESS,
} from '../constants/postConstants';

export const userPostList = (userid) => async (dispatch) => {
  try {
    dispatch({ type: POST_LIST_REQUEST });

    const { data } = await axios.get(
      `https://jsonplaceholder.ir/posts?userId=${userid}`
    );
    dispatch({ type: POST_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: POST_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const thePost = (postid) => async (dispatch, getState) => {
  try {
    dispatch({ type: POST_REQUEST });

    const { data } = await axios.get(
      `https://jsonplaceholder.ir/posts/${postid}`
    );
    dispatch({ type: POST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: POST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
