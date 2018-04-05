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
    return  (dispatch) => {
        const {
            description=0,
            note='',
            amount=0,
            createAt=0
        } = expenseData;
        const expense={description, note, amount, createAt};
        return database.ref('expenses').push(expense).then((ref) => { 
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
export const EditExpense=(id, updates={})=>(
    {
        type:'EDIT_EXPENCE',
        expenseID:id,
        expense: updates
    }
);