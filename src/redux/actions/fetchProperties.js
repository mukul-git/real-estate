import {
  FETCH_PRODUCTS_PROGRESS,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
} from "./actionTypes";
export const fetchProperties = () => async (dispatch) => {
  dispatch({ type: FETCH_PRODUCTS_PROGRESS });
  try {
    const result = await fetch(
      "https://66c5e8e4134eb8f434961543.mockapi.io/properties/list"
    );
    const data = await result.json();
    console.log(data);

    dispatch({ type: FETCH_PRODUCTS_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: FETCH_PRODUCTS_FAILURE, payload: err.message });
  }
};
