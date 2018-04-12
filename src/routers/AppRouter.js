
import React from 'react';
//import ReactDOM from 'react-dom';
import { Router, Route, Switch,Link,NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage.js';
import AddExpensePage from '../components/AddExpensePage.js';
import EditExpensePage from '../components/EditExpensePage.js';
import HelpPage from '../components/HelpPage.js';
import NotFoundPage from '../components/NotFoundPage.js';
import LoginPage from '../components/LoginPage.js';
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

export const history=createHistory();

 
const AppRouter=()=>
(
  <Router history={history}>
  <div>
    <Switch>
      <PublicRoute path="/" component={LoginPage} exact={true} /> 
      <PrivateRoute path="/dashboard" component={ExpenseDashboardPage}  />
      <PrivateRoute path="/edit/:id" component={EditExpensePage} />
       <PrivateRoute path="/add" component={AddExpensePage} />
      <PrivateRoute path="/help" component={HelpPage} />
      <Route  component={NotFoundPage} />
    </Switch>
    </div>
  </Router>
);
export default AppRouter;
