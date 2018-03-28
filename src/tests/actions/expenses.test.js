import{ AddExpense,EditExpense,RemoveExpense} from '../../actions/expenses'
import moment from 'moment'

test('should setup remove expense action object', ()=>{
    const action=RemoveExpense('12345');
    expect(action).toEqual({
        type:'REMOVE_EXPENCE',
        expenseID:'12345'
    });
});
test('should setup edit expense action object', ()=>{
    const mom=moment();
    const action=EditExpense('12345',{description:'d1',
                                      note:'n1',
                                      amount:10,
                                      createdAt:mom});
    expect(action).toEqual({
        type:'EDIT_EXPENCE',
        expenseID:'12345',
        expense:{description:'d1',
                note:'n1',
                amount:10,
                createdAt:mom}
    });
});
//add
test('should setup add expense action object', ()=>{
    const obj={description:'d1',
    note:'n1',
    amount:10,
    createdAt:100.1};

    const action=AddExpense(obj);
    expect(action).toEqual({
        type:'ADD_EXPENCE',
        expense:
        {
            ...obj,id:expect.any(String)
         }
    });
});
//add defaults
test('should setup add expense action object', ()=>{
    const obj={};
    const def={description:'',note:'',amount:1,createdAt:0};

    const action=AddExpense(obj);
    expect(action).toEqual({
        type:'ADD_EXPENCE',
        expense:
        {
            ...def,id:expect.any(String)
         }
    });
});

