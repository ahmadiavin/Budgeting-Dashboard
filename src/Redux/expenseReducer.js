import axios from "axios";
const initialState = {
  purchases: [],
  budgetLimit: [],
  loading: false
};
const GET_EXPENSES = "GET_EXPENSES";
const ADD_PURCHASE = "ADD_PURCHASE";
const REMOVE_PURCHASE = "REMOVE_PURCHASE";
const CLEAR_EXPENSES = "CLEAR_EXPENSES";
const GET_BUDGET = "GET_BUDGET";
const EDIT_BUDGET = "EDIT_BUDGET";

export function getExpenses() {
  return {
    type: GET_EXPENSES,
    payload: axios.get("/api/expense").then(res => res.data)
  };
}

export function addPurchase(price, description, category, date) {
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

export function getBudget() {
  return {
    type: GET_BUDGET,
    payload: axios.get("/api/expense/budget").then(res => res.data)
  };
}

export function editBudget(username, newBudget) {
  console.log(newBudget, "this is newBudget");
  return {
    type: EDIT_BUDGET,
    payload: axios
      .put(`/api/expense/budget/${username}`, { newBudget })
      .then(res => res.data)
  };
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
    case `${GET_EXPENSES}_PENDING`:
      return {
        ...state,
        loading: true
      };
    case `${GET_EXPENSES}_FULFILLED`:
      return {
        ...state,
        purchases: action.payload,
        loading: false
      };
    case `${ADD_PURCHASE}_PENDING`:
      return {
        ...state,
        loading: true
      };
    case `${ADD_PURCHASE}_FULFILLED`:
      return {
        ...state,
        purchases: action.payload,
        loading: false
      };
    case `${REMOVE_PURCHASE}_PENDING`:
      return {
        ...state,
        loading: true
      };
    case `${REMOVE_PURCHASE}_FULFILLED`:
      return {
        ...state,
        purchases: action.payload,
        loading: false
      };
    case `${GET_BUDGET}_PENDING`:
      return {
        ...state,
        loading: true
      };
    case `${GET_BUDGET}_FULFILLED`:
      return {
        ...state,
        budgetLimit: action.payload,
        loading: false
      };
    case `${EDIT_BUDGET}_PENDING`:
      return {
        ...state,
        loading: true
      };
    case `${EDIT_BUDGET}_FULFILLED`:
      return {
        ...state,
        budgetLimit: action.payload,
        loading: false
      };
    case CLEAR_EXPENSES:
      return {
        ...action.payload
      };
    default:
      return state;
  }
}
