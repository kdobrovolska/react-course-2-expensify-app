import React from 'react';
import ExpenseList from './ExpenseList.js'
import ExpenseListFilters from './ExpenseListFilters.js'
import ExpensesSummary from './ExpensesSummary'

const ExpenseDashboardPage = () => (
  <div>
    <ExpenseListFilters />
    <ExpenseList type='new'/>
    <ExpensesSummary />
  </div>
);
export default ExpenseDashboardPage;