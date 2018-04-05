import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import{startAddExpense, AddExpense,EditExpense,RemoveExpense} from '../../actions/expenses';
import moment from 'moment';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase'

const createMockStore = configureMockStore([thunk]);

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
    const action=AddExpense(expenses[2]);
    expect(action).toEqual({
        type:'ADD_EXPENCE',
        expense: expenses[2]
    });
});
//add defaults
/* test('should setup add expense action object', ()=>{
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
}) */;
/*
test('should add expense to database and store',(doneFun)=>{
    const store= createMockStore({});
    const expenseData={
        description:'mmm',
        amount: 3000,
        note:'this is one is better',
        createAt :1000
    };
    store.dispatch(startAddExpense(expenseData)).then(()=>{
        const actions=store.getActions();
        //expect(1).toBe(2);
        expect(actions[0]).toEqual({
             type:'ADD_EXPENCE',
             expense:{
                 id: expect.any(String),
                 ...expenseData
             }
        });
        doneFun();
        database.ref('expenses/'+actions[0].expense.id).once('value').then((snapshot)=>{
            expect(snapshot.val()).equalTo(expenseData);
            doneFun();
        }); 
       
    });
});*/

 test('should add expense to database and store',(doneFun)=>{
    const store= createMockStore({});
    const expenseData={
        description:'mmm',
        amount: 3000,
        note:'this is one is better',
        createAt :1000
    };
    store.dispatch(startAddExpense(expenseData)).then(()=>{
        const actions=store.getActions();
        //expect(1).toBe(2);
        expect(actions[0]).toEqual({
             type:'ADD_EXPENCE',
             expense:{
                 id: expect.any(String),
                 ...expenseData
             }
            });
            doneFun();
        return database.ref('expenses/'+actions[0].expense.id).once('value');

    }).then((snapshot)=>{
            expect(snapshot.val()).equalTo(expenseData);
            doneFun();
    }); 
   
}); 

test('should add expense to database and store with empty data',(doneFun)=>{
    const store= createMockStore({});
    const expenseData={
        description:0,
        note:'',
        amount:0,
        createAt:0
    } 
   
    store.dispatch(startAddExpense(expenseData)).then(()=>{
        const actions=store.getActions();
        //expect(1).toBe(2);
        expect(actions[0]).toEqual({
             type:'ADD_EXPENCE',
             expense:{
                 id: expect.any(String),
                 ...expenseData
             }
            });
        return database.ref('expenses/'+actions[0].expense.id).once('value');

    }).then((snapshot)=>{
            expect(snapshot.val()).equalTo(expenseData);
           
            doneFun();
    }); 
    doneFun();
});


