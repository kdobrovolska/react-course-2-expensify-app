import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import{ AddExpense,startAddExpense,
    EditExpense, startEditExpense,
    RemoveExpense, startRemoveExpense,
    SetExpenses, startSetExpenses } from '../../actions/expenses';
import moment from 'moment';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase'

const createMockStore = configureMockStore([thunk]); 
beforeEach((done)=>{
    const expensesData={};
    expenses.forEach(({id,description,amount,note,createdAt})=>{
        expensesData[id]={description,amount,note,createdAt};
    });
    database.ref('expenses').set(expensesData).then(()=>{
        done();
    })
   
});

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
 test('should add expense to database and store',(doneFun)=>{
    const store= createMockStore({});
    const expenseData={
        description:'mmm',
        amount: 3000,
        note:'this is one is better',
        createdAt :1000
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
           // doneFun();
        return database.ref('expenses/'+actions[0].expense.id).once('value');

    }).then((snapshot)=>{
            expect(snapshot.val()).toEqual(expenseData);
           doneFun();
    }); 
   
}); 

test('should add expense to database and store with empty data',(doneFun)=>{
    const store= createMockStore({});
    const expenseData={
        description:0,
        note:'',
        amount:0,
        createdAt:0
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
            expect(snapshot.val()).toEqual(expenseData);
            doneFun();
    }); 
   
});

//add
test('should setup set expenses ', ()=>{
    const action=SetExpenses(expenses);
    expect(action).toEqual({
        type:'SET_EXPENSES',
        expenses 
    });
});

test('should read expenses from database ',(doneFun)=>{
    const store= createMockStore({});
    store.dispatch(startSetExpenses()).then(()=>{
      const actions=store.getActions();
      expect(actions[0]).toEqual({
             type:'SET_EXPENSES',
             expenses
        });
        doneFun(); 

    });
});
//startRemoveExpense
test('should remove expense from database ',(doneFun)=>{
    const store= createMockStore({});
         store.dispatch(startRemoveExpense(expenses[0].id)).then(()=>{
             const actions=store.getActions();
             expect(actions[0]).toEqual({
                 type:'REMOVE_EXPENCE',
                 expenseID:expenses[0].id
           }) ;
           return database.ref('expenses/'+expenses[0].id).once('value');
       }).then((snapshot)=>{
           expect(snapshot.val()).toBeFalsy();
           doneFun();
       }); 
 });


 test('should setup async edit expense action object', (done)=>{
    const mom=5; //moment();
    const store= createMockStore({});
    const expenseData={
    amount:11111
    };
    store.dispatch(startEditExpense(expenses[1].id,expenseData)).then(()=>{
            const actions=store.getActions();
            expect(actions[0]).toEqual({
                type:'EDIT_EXPENCE',
                expenseID:expenses[1].id,
                expense:expenseData
            });
            return database.ref('expenses/'+expenses[1].id).once('value');
        }). then((snapshot)=>{
            expect (snapshot.val().amount).toBe(expenseData.amount);
            done(); 
        });

});