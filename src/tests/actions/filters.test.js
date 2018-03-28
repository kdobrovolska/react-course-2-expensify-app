import moment from 'moment'
import {SetStartDate, SetEndDate,UpdateTextFilter,SortByAmount, SortByDate,
    SortByAmountExpense,SortByDateExpense} from '../../actions/filters'

//start
test('should apply start date', ()=>{
  const action=SetStartDate(moment(0));
  expect(action).toEqual({
      type:'START_DATE',
      startDate: moment(0)
  })
});
//end
test('should apply end date', ()=>{
    const action=SetEndDate(moment(0));
    expect(action).toEqual({
        type:'END_DATE',
        endDate: moment(0)
    })
  });
//UpdateTextFilter
test ('should check UpdateTextFilter', ()=>{
 const action = UpdateTextFilter('abc');
 expect(action).toEqual( {
        type:'UPDATE_TEXT_FILTER',
        text:'abc'
    });
});
/*
  export const UpdateTextFilter=( text='')=>(
    {
        type:'UPDATE_TEXT_FILTER',
        text
    }
);*/
//SortByAmount
test ('should check SortByAmount', ()=>{
    const action = SortByAmount();
    expect(action).toEqual( {
           type:'SORT_BY_AMOUNT'
       });
   });


/*
export const SortByAmount=()=>(
    {
        type:'SORT_BY_AMOUNT'
    }
)*/

test ('should check SortByDate', ()=>{
    const action = SortByDate();
    expect(action).toEqual( {
           type:'SORT_BY_DATE'
       });
   });
/*
export const SortByDate=()=>(
    {
        type:'SORT_BY_DATE'
    }
)*/
test ('should check SortByDate', ()=>{
    const action = SortByDate();
    expect(action).toEqual( {
           type:'SORT_BY_DATE'
       });
   });
   test ('should check SortByAmountExpense', ()=>{
    const action = SortByAmountExpense();
    expect(action).toEqual( {
           type:'SORT_BY_AMOUNT'
       });
   });

   test ('should check SortByDateExpense', ()=>{
    const action = SortByDateExpense();
    expect(action).toEqual( {
           type:'SORT_BY_DATE'
       });
   });
/*

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
*/