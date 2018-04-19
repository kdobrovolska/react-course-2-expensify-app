import React from 'react';
import {connect} from 'react-redux';
import {START_DATE , END_DATE} from 'react-dates/constants'
import {UpdateTextFilter,SortByAmount,SortByDate,SetStartDate,SetEndDate} from '../actions/filters.js';
import {DateRangePicker} from 'react-dates';
export class ExpenseListFilters extends React.Component
{
    state={
            calendarFocused:null,
            
            };
    onDatesChange=({startDate,endDate})=>{
         this.props.SetStartDate(startDate);
        this.props.SetEndDate(endDate);
    };
    onSortChange=(e)=>{
            if(e.target.value==='amount')
                this.props.SortByAmount();
            else
                this.props.SortByDate();
        };

    onTextChange=(e)=>{
            this.props.UpdateTextFilter(e.target.value);
        };

    onFocusChange=(calendarFocused)=>{
        this.setState(()=>({calendarFocused}));
    }
    render()
    {
       // alert('START_DATE='+START_DATE);
        return <div className='content-container'>
        <h1>Filter: </h1>
        <div className='input-group1'>
            <div className='input-group1__item'>
                 <input className='text-input' 
                        type='text'
                        placeholder='Search expense'
                        value={this.props.filter.text} 
                        onChange={this.onTextChange}  />
           </div>
            <div className='input-group1__item'>
                <select className='select1' 
                       value={this.props.filter.sortBy} 
                       onChange={this.onSortChange}>
                    <option>amount</option>
                    <option>date</option>
                </select>
            </div>
            <div className='input-group1__item'>
                <DateRangePicker
                startDate={this.props.filter.startDate}
                endDate={this.props.filter.endDate}
                onDatesChange={this.onDatesChange}
                focusedInput = {this.state.calendarFocused}
                onFocusChange ={this.onFocusChange}
                isOutsideRange={()=>{ return false;}}
                showClearDates={true}
                 />
            </div>
        </div>
        
       
        </div>
    }
};

const MapStoreToProps=(state)=>
{
    return { filter:state.filters};
}
const MapDispatchToProps =(dispatch)=>{
    return { 
        SetStartDate:(startDate)=>dispatch(SetStartDate(startDate)),
        SetEndDate:(endDate)=>dispatch(SetEndDate(endDate)),
        SortByAmount: ()=>dispatch(SortByAmount),
        SortByDate: ()=>dispatch(SortByDate),
        UpdateTextFilter: (text)=>dispatch(UpdateTextFilter(text))
     }
   } 

export default connect(MapStoreToProps,MapDispatchToProps)(ExpenseListFilters);
