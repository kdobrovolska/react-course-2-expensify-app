import React from 'react'
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'
import moment from 'moment'
import numeral from 'numeral'

//import {Dispatch} from '../app.js'

export const ExpenseListItem=({dispatch ,id,description, createdAt,amount})=>
{
   // alert('createdAt'+createdAt);
    const mom=moment(createdAt).format('MMM Do, YYYY');
  //  alert('mom='+mom);
    return <div>
    <h3><Link to={'/edit/'+id}> {description}</Link></h3>
    <h1> Item ID={id}</h1>
    <h3> Created At:{mom}</h3>
    <h3> Amount:{numeral(amount/100).format('$0,0.00')}</h3>
    </div>
};


export default connect()(ExpenseListItem);