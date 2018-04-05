import { createStore, combineReducers ,applyMiddleware, compose} from 'redux';
import ExpenseReducer from '../reducers/expenses.js';
import FilterReducer from '../reducers/filters.js';
import thunk  from 'redux-thunk';

const composeEnhancers=window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose;

export const ConfigureStore = ()=>{
    const store=createStore(combineReducers(
        {
            expenses:ExpenseReducer,
            filters:FilterReducer
        }
    )
    ,
    composeEnhancers(applyMiddleware(thunk))
     //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
       //  window.__REDUX_DEVTOOLS_EXTENSION__ / window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
);
    return store;
};
