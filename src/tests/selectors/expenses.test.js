import moment from 'moment'
import GetVisibleExpenses from '../../selectors/expenses'
import expenses from '../fixtures/expenses'

test('check GetVisibleExpenses by amount',()=>{
    const filter={startDate:null,endDate:null,text:'d', sortBy:'amount'};
    const data=GetVisibleExpenses([expenses[1],expenses[2]],filter);
    expect(data).toEqual([expenses[2],expenses[1]]);
});

test('check GetVisibleExpenses for dates by start date',()=>{
    const filter={startDate:moment(0),endDate:null,text:'', sortBy:'date'};
    const data=GetVisibleExpenses(expenses,filter);
    expect(data).toEqual([expenses[0],expenses[2]]);
});

test('check GetVisibleExpenses for dates by end date',()=>{
    const filter={startDate:null,endDate:moment(0),text:'', sortBy:'date'};
    const data=GetVisibleExpenses(expenses,filter);
    expect(data).toEqual([expenses[1],expenses[0]]);
})

