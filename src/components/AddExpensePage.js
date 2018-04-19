import React from 'react';

import {connect} from 'react-redux';
import {startAddExpense} from '../actions/expenses.js';
import ExpenseForm from './ExpenseForm';

/* const AddExpensePage = (props) => (
  <div>
    <h1> Add Form:</h1>
        <ExpenseForm 
           submit={(obj)=>  {
            console.log(obj);
            props.dispatch(AddExpense(obj));
            props.history.push('/');
        } } 
      />
  </div>
);
export default connect()(AddExpensePage); */


export class  AddExpensePage extends React.Component {
  onSubmit=(expense)=>{
      this.props.startAddExpense(expense);
      this.props.history.push('/');
  }

  render()
  {  return   <div >
        <div className='page-header'>
          <div className='content-container'>
            <h1 className='page-header__title'> Add Form:</h1>
           </div >
        </div>
        <div className='content-container'>
          <ExpenseForm  submit={ this.onSubmit} />
        </div>
    </div>;
  }
}
const MapDispatchToProps =(dispatch)=>{
 return { startAddExpense:(expense)=>dispatch(startAddExpense(expense))}
}
export default connect(undefined,MapDispatchToProps)(AddExpensePage);