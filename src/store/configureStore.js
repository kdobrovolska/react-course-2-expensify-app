import { createStore, combineReducers } from 'redux';
import ExpenseReducer from '../reducers/expenses.js';
import FilterReducer from '../reducers/filters.js';

export const ConfigureStore = ()=>{
    const store=createStore(combineReducers(
        {
            expenses:ExpenseReducer,
            filters:FilterReducer
        }
    )
    ,
     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
       //  window.__REDUX_DEVTOOLS_EXTENSION__ / window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
);
    return store;
};
