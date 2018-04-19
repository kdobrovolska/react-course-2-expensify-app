import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter, {history} from './routers/AppRouter.js'
import {ConfigureStore} from './store/configureStore.js'
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import {startSetExpenses} from  './actions/expenses.js'
import {login, logout} from './actions/auth.js'
import getVisibleExpenses from './selectors/expenses.js'
import {firebase} from './firebase/firebase'; 
import LoadingPage from './components/LoadingPage'; 
//import'./playground/promises'; 

console.log('test');
const store=ConfigureStore();
console.log(store.getState());
export const Dispatch =(action)=>
{
   // alert('dispatch');
    store.dispatch(action);
}


const state=store.getState();
console.log(getVisibleExpenses(state.expenses,state.filters));

const jsx=(
    <Provider store={store}>
    <AppRouter/>
    </Provider>
);
let hasRendered = false;
const renderApp=()=>{
    if(!hasRendered){
        ReactDOM.render(jsx, document.getElementById('app'));
        hasRendered=true;
    }
};
ReactDOM.render(<LoadingPage />, document.getElementById('app'));


firebase.auth().onAuthStateChanged((user)=>{
    if(user){
        console.log('log in',user.uid);
        store.dispatch(login(user.uid));
        store.dispatch(startSetExpenses()).then(()=>{
            renderApp();
            if(history.location.pathname=== '/')
            {
              //  alert('to dashboard');
                history.push('/dashboard');
            }
       });
    }else{
        console.log('log out');
        store.dispatch(logout());
        renderApp();
        history.push('/');
    }
});


