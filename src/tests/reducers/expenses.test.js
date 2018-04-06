import expenses from '../fixtures/expenses.js'
import ExpenseReduser from '../../reducers/expenses.js'

test('expenses reducer default', ()=>{
  const result =ExpenseReduser(undefined,{type:'@@INIT'});
  expect(result).toEqual([]);
});

test('expenses reducer add expenses to empty', ()=>{
    const result =ExpenseReduser([],{type:'ADD_EXPENCE',
    expense:expenses[0]});
    expect(result).toEqual([expenses[0]]);
  }); 
test('expenses reducer add expenses ', ()=>{
    const result =ExpenseReduser([expenses[0],expenses[1]],{type:'ADD_EXPENCE',
    expense:expenses[2]});
    expect(result).toEqual(expenses);
  }); 

  test('expenses reducer remove expense existing', ()=>{
    const result =ExpenseReduser(expenses,{type:'REMOVE_EXPENCE',
    expenseID:expenses[0].id});
    expect(result).toEqual([expenses[1], expenses[2]]);
  }); 
  test('expenses reducer remove expense not existing', ()=>{
    const result =ExpenseReduser(expenses,{type:'REMOVE_EXPENCE',
    expenseID:-1});
    expect(result).toEqual(expenses);
  }); 

  test('expenses reducer update expense existing', ()=>{
    const result =ExpenseReduser(expenses,{type:'EDIT_EXPENCE',
    expenseID:expenses[0].id, expense:expenses[2]});
    expect(result).toEqual([{...expenses[2],id:expenses[0].id},expenses[1], expenses[2]]);
  }); 

  test('expenses reducer set expenses ', ()=>{
    const result =ExpenseReduser([expenses[0],expenses[1]],{type:'SET_EXPENSES',
    expenses});
    expect(result).toEqual(expenses);
  }); 