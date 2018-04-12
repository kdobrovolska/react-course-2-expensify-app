import uuid from 'uuid';
import database from '../firebase/firebase'

/* export const AddExpense=({description='',note='',amount=1,createdAt=0}={})=>(
    {
        type:'ADD_EXPENCE',
        expense:{id:uuid(),description,note,amount,createdAt}
    }
); */
export const AddExpense=(expense)=>(
{
    type:'ADD_EXPENCE',
    expense
});

export const startAddExpense=(expenseData={})=>{
    return  (dispatch, getState) => {
        const {
            description=0,
            note='',
            amount=0,
            createdAt=0
        } = expenseData;
        const uid=getState().auth.uid;
        const expense={description, note, amount, createdAt};
        return database.ref('users/'+uid+'/expenses').push(expense).then((ref) => { 
            const pp='expenses'+'/'+ref.key;
            console.log('push.then::'+database.ref(pp));
            dispatch(AddExpense({
                id: ref.key,
                ...expense
            }));
        });
    }
}
export const RemoveExpense=(id)=>(
    {
        type:'REMOVE_EXPENCE',
        expenseID:id
    }
);

export const startRemoveExpense=(id)=>{
    return  (dispatch, getState) => {
        const uid=getState().auth.uid;
        return database.ref('users/'+uid+'/expenses/'+id).remove().then(() => { 
            dispatch(RemoveExpense(id));
        });
    }
}  

export const EditExpense=(id, updates={})=>(
    {
        type:'EDIT_EXPENCE',
        expenseID:id,
        expense: updates
    }
);

export const startEditExpense=(id, updates={})=>{
    return  (dispatch, getState) => {
        const {
            description=0,
            note='',
            amount=0,
            createdAt=0
        } = updates;
        const uid=getState().auth.uid;
        return  database.ref('users/'+uid+'/expenses/'+id).update({description,
            note, amount, createdAt}).then(() => { 
            dispatch(EditExpense(id,updates));
        });
    }
}  

export const SetExpenses=(expenses)=>(
    {
        type:'SET_EXPENSES',
        expenses
    });

 
export const startSetExpenses=()=>{
    return  (dispatch,getState) => {
        const expensesNew=[];
        const uid=getState().auth.uid;
        
        return database.ref('users/'+uid+'/expenses').once('value').then((snapshot) => { 
            snapshot.forEach((snapshotChild)=>{
                expensesNew.push({id:snapshotChild.key,...snapshotChild.val()});
            });
            dispatch(SetExpenses(expensesNew));
        });
    }
}   

 