import axios from "axios";

const initialState = {
  purchases: []
};

const ADD_PURCHASE = "ADD PURCHASE";

export function addPurchase(price, description, category, date) {
  return {
    type: ADD_PURCHASE,
    payload: axios
      .post("/api/expense/purchase", { price, description, category, date })
      .then(res => res.data)
  };
}

export default function expenseReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_PURCHASE:
      return {
        ...state,
        purchases: action.payload
      };
    default:
      return state;
  }
}
