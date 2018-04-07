import React from 'react';
import {connect} from 'react-redux';
import moment from 'moment';
import ExpenseForm from './ExpenseForm';
import {startEditExpense, RemoveExpense,startRemoveExpense} from '../actions/expenses.js';

export class EditExpensePage extends React.Component{

   submit=(obj)=>  {
          this.props.startEditExpense(this.props.expense.id,obj);
          this.props.history.push('/');
        }

   onClick=()=>{
          this.props.startRemoveExpense(this.props.expense.id);
          this.props.history.push('/');
        }

    render()
    {
        return <div>
            <ExpenseForm expense={this.props.expense}
              submit={this.submit } />
          <button onClick={ this.onClick}>Remove </button>
          Privet
        </div>;
    }
};

const MapStoreToProps=(state,props)=>
{
     return { expense:state.expenses.filter(
       (item)=>(item.id===props.match.params.id))[0]
     }
}

 const MapDispatchToProps =(dispatch)=>{
  return { 
    startEditExpense:(id,expense)=>dispatch(startEditExpense(id,expense)),
    startRemoveExpense: (id)=>dispatch(startRemoveExpense(id))
   }
 } 

export default connect(MapStoreToProps, MapDispatchToProps)(EditExpensePage);
//export default connect(MapStoreToProps)(EditExpensePage);