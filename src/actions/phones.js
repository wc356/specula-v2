import { v4 as uuidv4 } from "uuid";

// ADD_PHONE
export const addPhone = ({
  name = "",
  release = "",
  price = 0,
  brand = "",
  display = "",
  screen = 0,
  dimensions = ""
} = {}) => ({
  type: "ADD_PHONE",
  phone: {
    id: uuidv4(),
    name,
    release,
    price,
    brand,
    display,
    screen,
    dimensions
  }
});

// REMOVE_PHONE
export const removePhone = ({ id } = {}) => ({
  type: "REMOVE_PHONE",
  id
});

// EDIT_PHONE
export const editPhone = (id, updates) => ({
  type: "EDIT_PHONE",
  id,
  updates
});
