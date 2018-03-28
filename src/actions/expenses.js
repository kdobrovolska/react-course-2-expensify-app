import uuid from 'uuid';

export const AddExpense=({description='',note='',amount=1,createdAt=0}={})=>(
    {
        type:'ADD_EXPENCE',
        expense:{id:uuid(),description,note,amount,createdAt}
    }
);
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