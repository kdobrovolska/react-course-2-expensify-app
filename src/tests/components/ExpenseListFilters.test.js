import React from 'react';
import {shallow} from 'enzyme';
import {ExpenseListFilters } from '../../components/ExpenseListFilters'
import {filter,altFilter} from  '../fixtures/filters'
import {START_DATE , END_DATE} from 'react-dates/constants'

let SetStartDate,SetEndDate,SortByAmount,SortByDate,UpdateTextFilter, wrapper;

beforeEach(()=>{
    SetStartDate = jest.fn();
    SetEndDate= jest.fn();
    SortByAmount= jest.fn();
    SortByDate= jest.fn();
    UpdateTextFilter= jest.fn();
    wrapper=shallow(<ExpenseListFilters SetStartDate={SetStartDate} SetEndDate={SetEndDate} 
        SortByAmount ={SortByAmount} SortByDate={SortByDate} UpdateTextFilter={UpdateTextFilter}
        filter ={filter} />);
});

test('should render ExpenseListFilters correctly',()=>{
    expect(wrapper).toMatchSnapshot()
});

test('should render ExpenseListFilters correctly with altfilter',()=>{
    wrapper.setProps(()=>({filter:altFilter}));
    expect(wrapper).toMatchSnapshot()
});
test('should check update text in ExpenseListFilters ',()=>{
   // wrapper.setProps(()=>({filter:altFilter}));
   const val='new ttt';
   wrapper.find('input').at(0).simulate('change',
       {target:{value:val} }
    );
   expect(UpdateTextFilter).toHaveBeenLastCalledWith(val);
});

 test('should check sort change   in ExpenseListFilters ',()=>{
     wrapper.setProps(()=>({filter:filter}));
    wrapper.find('select').at(0).simulate('change',
        {target:{value:altFilter.sortBy}}
     );
    expect(SortByAmount).toHaveBeenCalled();
 });
 test('should check sort change  to date in ExpenseListFilters ',()=>{
     wrapper.setProps(()=>({filter:altFilter}));
    //const val='new ttt';
    wrapper.find('select').at(0).simulate('change',
        {target:{value:filter.sortBy}} 
     );
    expect(SortByDate).toHaveBeenCalled();
 });

 test('should check date change  in ExpenseListFilters ',()=>{
    // wrapper.setProps(()=>({filter:altFilter}));
    //const val='new ttt';
    wrapper.find('DateRangePicker').prop('onDatesChange')({
        startDate:altFilter.startDate,
        endDate: altFilter.endDate
    });
    
    expect(SetStartDate).toHaveBeenLastCalledWith(altFilter.startDate);
    expect(SetEndDate).toHaveBeenLastCalledWith(altFilter.endDate);
 });
 test('should check focus change  in ExpenseListFilters ',()=>{
    // wrapper.setProps(()=>({filter:altFilter}));
    const val=true;
    // wrapper.find('DateRangePicker').prop('onDatesChange')({
    //     startDate:altFilter.startDate,
    //     endDate: altFilter.endDate
    // });
    wrapper.find('DateRangePicker').prop('onFocusChange')(START_DATE);
     expect(wrapper.state('calendarFocused')).toBe(START_DATE);

     wrapper.find('DateRangePicker').prop('onFocusChange')(END_DATE);
     expect(wrapper.state('calendarFocused')).toBe(END_DATE); 

  });



