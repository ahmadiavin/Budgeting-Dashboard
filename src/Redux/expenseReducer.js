import axios from "axios";
const initialState = {
  purchases: [],
  budgetLimit:1000
};
const GET_EXPENSES = "GET_EXPENSES";
const ADD_PURCHASE = "ADD_PURCHASE";
const REMOVE_PURCHASE = "REMOVE_PURCHASE";
const CLEAR_EXPENSES = "CLEAR_EXPENSES";
const EDIT_BUDGET = "EDIT_BUDGET"

export function getExpenses() {
  return {
    type: GET_EXPENSES,
    payload: axios.get("/api/expense").then(res => res.data)
  };
}

export function addPurchase(price, description, category, date) {
  // console.log(price, description, category, date)
  return {
    type: ADD_PURCHASE,
    payload: axios
      .post("/api/expense/purchase", { price, description, category, date })
      .then(res => res.data)
  };
}
export function removePurchase(id) {
  return {
    type: REMOVE_PURCHASE,
    payload: axios.delete(`/api/expense/purchase/${id}`).then(res => res.data)
  };
}

export function editBudget(id) {
  return {
    type: EDIT_BUDGET,
    payload: axios.put(`/api/expense/purchase/${id}`).then(res => res.data)
  }
}
export function clearExpenses() {
  return {
    type: CLEAR_EXPENSES,
    payload: {
      purchases: []
    }
  };
}

export default function expenseReducer(state = initialState, action) {
  switch (action.type) {
    case `${GET_EXPENSES}_FULFILLED`:
      return {
        ...state,
        purchases: action.payload
      };
    case `${ADD_PURCHASE}_FULFILLED`:
      // console.log(action.payload, "where is this action")
      return {
        ...state,
        purchases: action.payload
      };
    case `${REMOVE_PURCHASE}_FULFILLED`:
      return {
        ...state,
        purchases: action.payload
      };
      case `${EDIT_BUDGET}_FULFILLED`:
        return {
          ...state,
          budgetLimit: action.payload
        }
    case CLEAR_EXPENSES:
      return {
        ...action.payload
      };
    default:
      return state;
  }
}
