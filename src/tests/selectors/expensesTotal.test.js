import expensesTotal from '../../selectors/expensesTotal'
import expenses from '../fixtures/expenses'

test('should get correct data for empty array',()=>{
   const val=expensesTotal([]);
   expect(val).toBe(0);
});
test('should get correct data for  array with 1 element',()=>{
    const val=expensesTotal([expenses[0]]);
    expect(val).toBe(expenses[0].amount);
 });
 test('should get correct data for  array ',()=>{
    const val=expensesTotal(expenses);
    expect(val).toBe(165);
 });