import React from 'react';
import {connect} from 'react-redux';
import ExpenseListItem from './ExpenseListItem.js'
import VisibleExpenses from '../selectors/expenses.js'

export const ExpenseList=(props)=>
(
    <div className='content-container'>
        <div className='list-header'>
            <div className='show-for-mobile'> Expenses  </div>
            <div className='show-for-desktop'> Expense  </div>
            <div className='show-for-desktop'> Amount  </div>
        </div>
        <div className='list-body'>
        {
           ( props.expenses.length===0)?(
               <div className='list-item list-item__message'>No expenses </div>
           ):(
                    props.expenses.map((item,ident)=>{
                    
                        return <ExpenseListItem key={ident} {...item}/>;
                
                    })
            )
        }
        </div>
    </div>
);
// first variant
//const ConnectedExpenseList=connect((st)=>{
  //  return {
  //      expenses:st.expenses
  //  };
//})(ExpenseList);
//export default ConnectedExpenseList;

const mapStateToProps=(state)=>
{
    return{
        expenses:VisibleExpenses(state.expenses,state.filters)
    };
};

export default connect(mapStateToProps)(ExpenseList);