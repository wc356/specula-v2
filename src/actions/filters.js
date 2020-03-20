// SET_TEXT_FILTER
export const setTextFilter = (text = "") => ({
  type: "SET_TEXT_FILTER",
  text
});
// SORT_BY_AMOUNT
export const sortByPrice = () => ({
  type: "SORT_BY_PRICE"
});
// SORT_BY_RELEASED
export const sortByRelease = () => ({
  type: "SORT_BY_RELEASE"
});
// SORT_BY_BRAND
export const sortByBrand = () => ({
  type: "SORT_BY_BRAND"
});
