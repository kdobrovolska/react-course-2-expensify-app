import React from 'react'
import {shallow} from 'enzyme'
import {ExpensesSummary} from '../../components/ExpensesSummary'
import expenses from '../fixtures/expenses'

test('should render ExpensesSummary correctly wehis two items', ()=>{

    const wrapper=shallow(<ExpensesSummary expensesCount={2} expensesTotal={9434}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpensesSummary correctly wehis one item', ()=>{

    const wrapper=shallow(<ExpensesSummary expensesCount={1} expensesTotal={9434}/>);
    expect(wrapper).toMatchSnapshot();
});