import React from 'react';
import {shallow} from 'enzyme';
import {ExpenseForm} from '../../components/ExpenseForm'
import {EditExpensePage} from '../../components/EditExpensePage'
import expenses from '../fixtures/expenses';

let EditExpense, RemoveExpense, history, wrapper;
beforeEach(()=>{
     EditExpense=jest.fn();
     RemoveExpense=jest.fn();
     history={push:jest.fn()};
   
     
     wrapper=shallow(<EditExpensePage EditExpense={EditExpense} RemoveExpense={RemoveExpense}
        history={history} expense={expenses[0]} />);

});

test('should render EditExpencePage correctly', ()=>{
      expect(wrapper).toMatchSnapshot();
});

test('should check edit expense', (()=>{
    wrapper.find('ExpenseForm').prop('submit')(expenses[0]);
    expect(EditExpense).toHaveBeenLastCalledWith(expenses[0].id,expenses[0]);
    expect(history.push).toHaveBeenLastCalledWith('/');
}));

test('should check remove expense', (()=>{
    wrapper.find('button').at(0).simulate('click');
    expect(RemoveExpense).toHaveBeenLastCalledWith(expenses[0].id);
    expect(history.push).toHaveBeenLastCalledWith('/');
}));