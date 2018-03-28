import React from 'react';
import {connect} from 'react-redux';
import moment from 'moment';
import ExpenseForm from './ExpenseForm';
import {EditExpense, RemoveExpense} from '../actions/expenses.js';

export class EditExpensePage extends React.Component{

   submit=(obj)=>  {
          this.props.EditExpense(this.props.expense.id,obj);
          this.props.history.push('/');
        }

   onClick=()=>{
          this.props.RemoveExpense(this.props.expense.id);
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
    EditExpense:(id,expense)=>dispatch(EditExpense(id,expense)),
    RemoveExpense: (id)=>dispatch(RemoveExpense(id))
   }
 } 

export default connect(MapStoreToProps, MapDispatchToProps)(EditExpensePage);
//export default connect(MapStoreToProps)(EditExpensePage);