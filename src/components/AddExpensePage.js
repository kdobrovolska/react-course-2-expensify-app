import React from 'react';

import {connect} from 'react-redux';
import {AddExpense} from '../actions/expenses.js';
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
      this.props.AddExpense(expense);
      this.props.history.push('/');
  }

  render()
  {  return   <div>
    <h1> Add Form:</h1>
        <ExpenseForm  submit={ this.onSubmit} />
    </div>;
  }
}
const MapDispatchToProps =(dispatch)=>{
 return { AddExpense:(expense)=>dispatch(AddExpense(expense))}
}
export default connect(undefined,MapDispatchToProps)(AddExpensePage);