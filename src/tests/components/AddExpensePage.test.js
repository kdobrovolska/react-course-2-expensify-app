import React from 'react'
import {shallow} from 'enzyme';
import {AddExpensePage} from '../../components/AddExpensePage'
import {ExpenseForm} from '../../components/ExpenseForm'
import expenses from '../fixtures/expenses'
let AddExpense,history,wrapper;

beforeEach(()=>{
    AddExpense= jest.fn();
     history ={push: jest.fn()};
     wrapper =shallow(<AddExpensePage AddExpense={AddExpense} history={history}/>);
});

test('should render AddExenseForm correctly', ()=>{
    
    expect(wrapper).toMatchSnapshot();
});

test ('should test add data', ()=>{
    wrapper.find('ExpenseForm').prop('submit')(expenses[0]);
   expect(history.push).toHaveBeenLastCalledWith('/');
   expect(AddExpense).toHaveBeenLastCalledWith(expenses[0]);
});