import React from 'react'
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import numeral  from 'numeral'
import visibleExpenses from '../selectors/expenses'
import expensesTotal from '../selectors/expensesTotal'


export const ExpensesSummary=({expensesCount,expensesTotal})=>
{
    const expenseWord=expensesCount ===1 ? 'expense' : 'expenses';
    const formattedExpenseTotal= numeral(expensesTotal/100).format('$0,0.00');
    return  <div className='page-header'>
            <div className='content-container'>
                <h1 className='page-header__title'>Viewing : <span>{expensesCount}</span> {expenseWord} totalling <span>{formattedExpenseTotal} </span></h1>
                <div className='page-header__actions'> 
                <Link className='button1' to ='/add'>Add Expense </Link>
                </div>
            </div>
        </div>;
    
}
const MapStoreToProps=(state)=>
{
    return { 
        expensesCount:visibleExpenses(state.expenses,state.filters).length,
        expensesTotal:expensesTotal(visibleExpenses(state.expenses,state.filters))
    };
}
export default connect(MapStoreToProps)(ExpensesSummary);