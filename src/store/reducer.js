export const initialState = {
  loading: true,
  movies: [],
  errorMessage: null,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "API_REQUEST_INITIATED":
      return {
        ...state,
        loading: true,
        errorMessage: null,
      };
    case "API_REQUEST_SUCCESS":
      return {
        ...state,
        loading: false,
        movies: action.payload,
      };
    case "API_REQUEST_FAILURE":
      return {
        ...state,
        loading: false,
        errorMessage: action.error,
      };
    default:
      return state;
  }
};
