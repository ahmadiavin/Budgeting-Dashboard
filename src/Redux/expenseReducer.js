import axios from "axios";
const initialState = {
  purchases: []
};
const GET_EXPENSES = "GET_EXPENSES"
const ADD_PURCHASE = "ADD_PURCHASE";


export function getExpenses() {
  return {
    type: GET_EXPENSES,
    payload: axios.get("/api/expense").then(res => res.data)
  }
}

export function addPurchase(price, description, category, date) {
  console.log(price, description, category, date)
  return {
    type: ADD_PURCHASE,
    payload: axios
      .post("/api/expense/purchase", { price, description, category, date })
      .then(res => res.data)
  };
}

export default function expenseReducer(state = initialState, action) {
  switch (action.type) {
    case GET_EXPENSES: 
    return {
      ...state,
      ...action.payload
    }
    case `${ADD_PURCHASE}_FULFILLED`:
      console.log(action.payload, "this is action")
      return {
        ...state,
        purchases: action.payload
      };
    default:
      return state;
  }
}
