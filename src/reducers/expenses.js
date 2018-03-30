const expenseReducerDefaultState=[];

export default (state=expenseReducerDefaultState,action)=>{
    let ar;
    switch(action.type){
        case 'ADD_EXPENCE':
            return [...state,action.expense];
        case 'REMOVE_EXPENCE':
              return state.filter(({id})=>{return id!=action.expenseID});
        case 'EDIT_EXPENCE':
     //   alert('id='+action.expenseID);
           return state.map((item)=>{
               if(item.id===action.expenseID)
               {
                  // alert(action.expense.description);
                   return {...item,...action.expense, id:action.expenseID}
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