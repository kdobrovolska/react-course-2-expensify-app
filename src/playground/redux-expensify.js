import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

const expenseReducerDefaultState=[];

const ExpenseReducer=(state=expenseReducerDefaultState,action)=>{
    let ar;
    switch(action.type){
        case 'ADD_EXPENCE':
            return [...state,action.expense];
        case 'REMOVE_EXPENCE':
              return state.filter(({id})=>{return id!=action.expenseID});
        case 'EDIT_EXPENCE':
           return state.map((item)=>{
               if(item.id===action.expenseID)
               {
                   return {...item,...action.expense}
               }
               else
               {
                   return item;
               }
            })
        case 'SORT_BY_AMOUNT':
          ar=[...state];
          ar.sort((item1,item2)=>( item1.amount-item2.amount));
          return ar;
        case 'SORT_BY_DATE':
          ar=[...state];
          ar.sort((item1,item2)=>( item1.createdAt-item2.createdAt));
          return ar;
        default:
         return state;
    }
};
const filterDefaultState={
    text: '',
    sortBy: 'date', // date or amount
    startDate: undefined,
    endDate: undefined
};
const FilterReducer=(state=filterDefaultState,action)=>{
    switch(action.type){
        case 'EDIT_FILTER':
          return {...state,...action.filter};
        case 'UPDATE_TEXT_FILTER':
          return {...state  ,text:action.text};
        case 'SORT_BY_AMOUNT':
          return {...state  ,sortBy:'amount'};
        case 'SORT_BY_DATE':
          return {...state  ,sortBy:'date'};
        case 'START_DATE':
          return {...state  ,startDate: action.startDate};
        case 'END_DATE':
          return {...state  ,endDate: action.endDate};
        default:
         return state;
    }
};

const store=createStore(combineReducers(
    {
        expenses:ExpenseReducer,
        filters:FilterReducer
    }
));
store.subscribe(()=>{
    const state=store.getState();
    console.log(state);
})


//console.log(store.getState());
/*store.dispatch({
    expense:{id: 44,
description: 'January Rent',
note: 'This was the final payment for that address',
amount: 54500,
createdAt: 0},
type:'ADD_EXPENCE'
});
store.dispatch({
    expense:{id: 45,
description: 'uuu',
note: 'no',
amount: 1,
createdAt: 0},
type:'ADD_EXPENCE'
});*/


const AddExpense=({id,description='',note='',amount=1,createdAt=0}={})=>(
    {
        type:'ADD_EXPENCE',
        expense:{id,description,note,amount,createdAt}
    }
);
const RemoveExpense=(id)=>(
    {
        type:'REMOVE_EXPENCE',
        expenseID:id
    }
);
const EditExpense=(id, updates={})=>(
    {
        type:'EDIT_EXPENCE',
        expenseID:id,
        expense: updates
    }
);
const EditFilter=( filter={})=>(
    {
        type:'EDIT_FILTER',
        filter:filter
    }
);
const UpdateTextFilter=( text='')=>(
    {
        type:'UPDATE_TEXT_FILTER',
        text
    }
);

const SortByAmount=()=>(
    {
        type:'SORT_BY_AMOUNT'
    }
)
const SortByDate=()=>(
    {
        type:'SORT_BY_DATE'
    }
)
const SetStartDate=(startDate=0)=>(
    {
        type:'START_DATE',
        startDate
    }
)
const SetEndDate=(endDate=0)=>(
    {
        type:'END_DATE',
        endDate
    }
)
const SortByAmountExpense=()=>(
    {
        type:'SORT_BY_AMOUNT'
    }
)
const SortByDateExpense=()=>(
    {
        type:'SORT_BY_DATE'
    }
)

/*
const first=store.dispatch(AddExpense({id:uuid(),description:'jjj',amount:3,createdAt:0}));
const second=store.dispatch(AddExpense({id:uuid(),description:'jjj12',note:'note12',createdAt:1}));
console.log('log1');
console.log(first);

const delDispatch=store.dispatch(RemoveExpense(first.expense.id));
console.log('delDispatch=');
console.log(delDispatch);
const editDispatch=store.dispatch(EditExpense(second.expense.id,{amount:777}));
console.log('editDispatch=');
console.log(editDispatch);
const editFilter=store.dispatch(EditFilter({sortBy:'pig',text:'new'}));
console.log('editFilter=');
console.log(editFilter);

const three=store.dispatch(AddExpense({id:uuid(),description:'jjj',amount:2,createdAt:0}));
const four=store.dispatch(AddExpense({id:uuid(),description:'jjj',amount:30000,createdAt:0}));
store.dispatch(SortByAmountExpense());
store.dispatch(SortByDateExpense());*/
store.dispatch(SortByAmount());
//store.dispatch(SortByDate());
store.dispatch(SetStartDate(100));
store.dispatch(SetEndDate(500));
const updateTextFilter=store.dispatch(UpdateTextFilter('j'));
console.log('updateTextFilter=');
////console.log(updateTextFilter);
//console.log(store.getState());

const GetVisibleExpensions=(expenses,{startDate,endDate,text, sortBy})=>
{
  /*  const ar= [];
    expenses.map((item)=>{
        
        const isStartDate= (typeof startDate != 'number' ) || item.createdAt>=startDate;
        const isEndDate= (typeof endDate != 'number' ) || item.createdAt<=endDate;
        const isText = true; //(typeof endDate != 'string') || item.description.toLowerCase().indexOf(text.toLowerCase())>=0;
     //   alert(isStartDate+' , '+isEndDate+' , '+ isText );
      //  alert(startDate+' , '+endDate+' , '+ text +'=='+item.createdAt);
        if( isStartDate && isEndDate && isText)
        {
            ar.push(item);
        }
    });
   
    console.log('count='+expenses.length, ar.length);
   return ar;*/
   return expenses.filter((item)=>{
        const isStartDate= (typeof startDate != 'number' ) || item.createdAt>=startDate;
        const isEndDate= (typeof endDate != 'number' ) || item.createdAt<=endDate;
        const isText = (typeof text != 'string') || item.description.toLowerCase().includes(text.toLowerCase());
        return isStartDate && isEndDate && isText;
    }).sort((a,b)=>{
        if(sortBy.toLowerCase()==='date')
            return  (a.createdAt-b.createdAt);
        if(sortBy.toLowerCase()=='amount')
            return  (a.amount-b.amount);
  
    }); 
    
}
console.log('only visible');
store.subscribe(()=>{
    const state=store.getState();
    console.log(' all state');
    console.log(state);
    console.log('only visible');
    
    console.log(GetVisibleExpensions(state.expenses,state.filters));
})

store.dispatch(AddExpense({id:uuid(),description:'jjj1',amount:2,createdAt:125}));
store.dispatch(AddExpense({id:uuid(),description:'jjj2',amount:6,createdAt:505}));
store.dispatch(AddExpense({id:uuid(),description:'kkkju',amount:202,createdAt:105}));
store.dispatch(AddExpense({id:uuid(),description:'jjj3',amount:1022,createdAt:5}));
store.dispatch(AddExpense({id:uuid(),description:'kkk',amount:12,createdAt:125}));



const demoState = {
  expenses: [{
    id: 'poijasdfhwer',
    description: 'January Rent',
    note: 'This was the final payment for that address',
    amount: 54500,
    createdAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount', // date or amount
    startDate: undefined,
    endDate: undefined
  }
};


