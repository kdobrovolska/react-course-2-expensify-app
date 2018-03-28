import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter from './routers/AppRouter.js'
import {ConfigureStore} from './store/configureStore.js'
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import {AddExpense} from  './actions/expenses.js'
import {UpdateTextFilter} from './actions/filters.js'
import getVisibleExpenses from './selectors/expenses.js'

const store=ConfigureStore();
console.log(store.getState());
export const Dispatch =(action)=>
{
    alert('dispatch');
    store.dispatch(action);
}

////const expenses=AddExpense({description:'water bill', createdAt:2007, amount:600});
//store.dispatch(expenses);

//store.dispatch(AddExpense({description:'coffe bill', createdAt:9007, amount:6}));
//store.dispatch(AddExpense({description:'gas bill', createdAt:207, amount:99}));
//store.dispatch(UpdateTextFilter('coffe'));
const state=store.getState();
console.log(getVisibleExpenses(state.expenses,state.filters));
setTimeout(()=>{
    store.dispatch(UpdateTextFilter('water'));
},3000);
const jsx=(
    <Provider store={store}>
    <AppRouter/>
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
