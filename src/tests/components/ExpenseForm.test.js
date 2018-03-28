import React from 'react'
import {shallow} from 'enzyme';
import  moment from 'moment'
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses'

test('should render ExpenseForm correctly ', ()=>{
    const wrapper=shallow(<ExpenseForm/>);
    expect(wrapper).toMatchSnapshot(); 
});
test('should render ExpenseForm correctly with data', ()=>{
    const wrapper=shallow(<ExpenseForm expense={expenses[0]} />);
    expect(wrapper).toMatchSnapshot();
});
test ('should render error for invalid form submission', ()=>{
    const wrapper=shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('form').simulate('submit', {
        preventDefault: ()=>{}
    });
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot(); 
});

test('should change description state when input was changed',()=>{
    const value='new description';
    const wrapper=shallow(<ExpenseForm expense={expenses[1]}/>); 
    wrapper.find('input').at(0).simulate('change', {target:{value}});
    expect(wrapper.state('description')).toBe(value);
});

test('should change note state when input was changed',()=>{
    const value='new note';
    const wrapper=shallow(<ExpenseForm expense={expenses[1]}/>); 
    wrapper.find('textarea').at(0).simulate('change', 
    {target:{value},
     persist: ()=>{}
    });
    expect(wrapper.state('note')).toBe(value);
});

test('should change amount state when input was correct',()=>{
    const value='23.50';
    const wrapper=shallow(<ExpenseForm expense={expenses[1]}/>); 
    wrapper.find('input').at(1).simulate('change', 
    {target:{value} });
    expect(wrapper.state('amount')).toBe(value);
});

test('should change amount state when input was correct',()=>{
    const value='ll';
    const wrapper=shallow(<ExpenseForm expense={expenses[1]}/>); 
    const valueOld=expenses[1].amount;
    wrapper.find('input').at(1).simulate('change', 
    {target:{value} });
    expect(wrapper.state('amount')).toBe(valueOld);
});

test('should call onSubmit prop for valid form submission',()=>{
    const onSubmitSpy=jest.fn();
    const wrapper=shallow(<ExpenseForm expense={
        expenses[0] } submit={onSubmitSpy}  />);
    wrapper.find('form').simulate('submit', {
        preventDefault: ()=>{}
    }) ; 
    expect(wrapper.state('error')).toBe('');
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description:expenses[0].description,
        amount:expenses[0].amount,
        note:expenses[0].note,
        createdAt: expenses[0].createdAt
    });
});


test('should set new date on date change',()=>{
    const now=moment();
    const wrapper=shallow(<ExpenseForm/>);
    wrapper.find('SingleDatePicker').prop('onDateChange')(now);
    expect(wrapper.state('createdAt')).toEqual(now);
});

test('should set focuse change ',()=>{
    const val=true;
    const wrapper=shallow(<ExpenseForm/>);
    wrapper.find('SingleDatePicker').prop('onFocusChange')({focused:val});
    expect(wrapper.state('calendarFocused')).toBe(val);
});

//onFocusChange