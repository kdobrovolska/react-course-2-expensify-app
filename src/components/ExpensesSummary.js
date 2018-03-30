import React from 'react'
import {connect} from 'react-redux';
import numeral  from 'numeral'
import visibleExpenses from '../selectors/expenses'
import expensesTotal from '../selectors/expensesTotal'


export class ExpensesSummary extends React.Component
{
    render()
    {
       return <div>
        <h2>Expenses Count : {this.props.expensesCount} </h2>
        <h2>Expenses Total : {numeral(this.props.expensesTotal/100).format('$0,0.00')} </h2>
        </div>
    }
}
const MapStoreToProps=(state)=>
{
    return { 
        expensesCount:visibleExpenses(state.expenses,state.filters).length,
        expensesTotal:expensesTotal(visibleExpenses(state.expenses,state.filters))
    };
}
export default connect(MapStoreToProps)(ExpensesSummary);