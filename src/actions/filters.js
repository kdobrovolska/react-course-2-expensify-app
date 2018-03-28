/*const EditFilter=( filter={})=>(
    {
        type:'EDIT_FILTER',
        filter:filter
    }
);*/ 
export const UpdateTextFilter=( text='')=>(
    {
        type:'UPDATE_TEXT_FILTER',
        text
    }
);

export const SortByAmount=()=>(
    {
        type:'SORT_BY_AMOUNT'
    }
)
export const SortByDate=()=>(
    {
        type:'SORT_BY_DATE'
    }
)
export const SetStartDate=(startDate=0)=>(
    {
        type:'START_DATE',
        startDate
    }
)
export const SetEndDate=(endDate=0)=>(
    {
        type:'END_DATE',
        endDate
    }
)
export const SortByAmountExpense=()=>(
    {
        type:'SORT_BY_AMOUNT'
    }
)
export const SortByDateExpense=()=>(
    {
        type:'SORT_BY_DATE'
    }
)
