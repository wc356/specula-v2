// Phones Reducer
const phonesReducerDefaultState = [];
const phonesReducer = (state = phonesReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_PHONE":
      return [...state, action.phone];
    case "REMOVE_PHONE":
      return state.filter(({ id }) => id !== action.id);
    case "EDIT_PHONE":
      return state.map(phone => {
        if (phone.id === action.id) {
          return {
            ...phone,
            ...action.updates
          };
        } else {
          return phone;
        }
      });
    case "POPULATE_PHONES":
      return action.phones;
    default:
      return state;
  }
};

export default phonesReducer;
