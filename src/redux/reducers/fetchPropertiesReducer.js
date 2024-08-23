const initialState = { isLoading: false, properties: [], error: null };

export const fetchPropertiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_PRODUCTS_PROGRESS":
      return { ...state, isLoading: true };

    case "FETCH_PRODUCTS_SUCCESS":
      console.log(action.payload);

      return { ...state, isLoading: false, properties: action.payload };

    case "FETCH_PRODUCTS_FAILURE":
      return { ...state, isLoading: false, error: action.payload };

    default:
      return state;
  }
};
