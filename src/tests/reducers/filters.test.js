import moment from 'moment'
import FilterReducer from '../../reducers/filters'
const filterDefaultState={
    text: '',
    sortBy: 'date', // date or amount
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
};
test('filterReducer default', ()=>{
   const result=FilterReducer(undefined,{type:'@@INT'});
   expect(result).toEqual(filterDefaultState);

});

test ('sort by amount',()=>{
    const result = FilterReducer(undefined,{type:'SORT_BY_AMOUNT'} );
    expect(result.sortBy).toBe('amount');
});
test ('sort by date',()=>{
    const result = FilterReducer(undefined,{type:'SORT_BY_DATE'} );
    expect(result.sortBy).toBe('date');
});
test ('sort by date',()=>{
    const current={
        text: '',
        sortBy: 'amount', // date or amount
        startDate:undefined,
        endDate: undefined
    };
    const result = FilterReducer(current,{type:'SORT_BY_DATE'} );
    expect(result.sortBy).toBe('date');
});
test ('sort by date',()=>{
    const current={
        text: '',
        sortBy: 'date', // date or amount
        startDate:undefined,
        endDate: undefined
    };
    const result = FilterReducer(current,{type:'SORT_BY_AMOUNT'} );
    expect(result.sortBy).toBe('amount');
});
test ('update text filter',()=>{
    const current={
        text: 'ggg',
        sortBy: 'date', // date or amount
        startDate:undefined,
        endDate: undefined
    };
    const result = FilterReducer(current,{type:'UPDATE_TEXT_FILTER',text:'new'} );
    expect(result.text).toBe('new');
});
test ('update text filter',()=>{
   
    const result = FilterReducer(undefined,{type:'UPDATE_TEXT_FILTER',text:'new'} );
    expect(result.text).toBe('new');
});
//START_DATE
test ('set start date  filter',()=>{
    const current={
        text: 'ggg',
        sortBy: 'date', // date or amount
        startDate:undefined,
        endDate: undefined
    };
    const result = FilterReducer(current,{type:'START_DATE',startDate:moment(0)} );
    expect(result.startDate).toEqual(moment(0));
});
test ('set start date  filter',()=>{
    const current={
        text: 'ggg',
        sortBy: 'date', // date or amount
        startDate:moment(4),
        endDate: undefined
    };
    const result = FilterReducer(current,{type:'START_DATE',startDate:moment(0)} );
    expect(result.startDate).toEqual(moment(0));
});
test ('set start date  filter',()=>{
   
    const result = FilterReducer(undefined,{type:'START_DATE',startDate:moment(0)} );
    expect(result.startDate).toEqual(moment(0));
});
//end-date

test ('set end date  filter',()=>{
    const current={
        text: 'ggg',
        sortBy: 'date', // date or amount
        startDate:undefined,
        endDate: undefined
    };
    const result = FilterReducer(current,{type:'END_DATE',endDate:moment(0)} );
    expect(result.endDate).toEqual(moment(0));
});
test ('set end date  filter',()=>{
    const current={
        text: 'ggg',
        sortBy: 'date', // date or amount
        startDate:moment(4),
        endDate: moment(4)
    };
    const result = FilterReducer(current,{type:'END_DATE',endDate:moment(0)} );
    expect(result.endDate).toEqual(moment(0));
});
test ('set end date  filter',()=>{
   
    const result = FilterReducer(undefined,{type:'END_DATE',endDate:moment(0)} );
    expect(result.endDate).toEqual(moment(0));
});