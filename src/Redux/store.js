//redux and middleware
import {createStore, combineReducers, applyMiddleware} from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
//reducers
import authReducer from './auth/authReducer'
import expenseReducer from './expenseReducer'

//root reducer
const rootReducer = combineReducers({
    auth: authReducer,
    expense: expenseReducer
})
//export
export default createStore(rootReducer, applyMiddleware(promiseMiddleware));