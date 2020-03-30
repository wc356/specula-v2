// Filters Reducer
const filtersReducer = (state, action) => {
  switch (action.type) {
    case "SET_TEXT_FILTER":
      return {
        ...state,
        text: action.text
      };
    case "SORT_BY_PRICE":
      return {
        ...state,
        sortBy: "price"
      };
    case "SORT_BY_RELEASE":
      return {
        ...state,
        sortBy: "release"
      };
    case "SORT_BY_BRAND":
      return {
        ...state,
        sortBy: "brand"
      };
    default:
      return state;
  }
};

export default filtersReducer;
