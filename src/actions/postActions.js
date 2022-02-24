import axios from 'axios';
import {
  POST_LIST_FAIL,
  POST_LIST_SUCCESS,
  POST_LIST_REQUEST,
  POST_FAIL,
  POST_REQUEST,
  POST_SUCCESS,
} from '../constants/templateConstants';

export const postList = () => async (dispatch) => {
  try {
    dispatch({ type: SOME_NEW_POST_REQUEST });

    const { data } = await axios.get(``);
    dispatch({ type: SOME_NEW_POST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: SOME_NEW_POST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const specificPost = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: POST_REQUEST });

    const { data } = await axios.get(`https://jsonplaceholder.ir/posts/${id}`);
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
