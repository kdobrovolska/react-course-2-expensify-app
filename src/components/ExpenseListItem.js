import React from 'react'
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'
import moment from 'moment'
import numeral from 'numeral'

//import {Dispatch} from '../app.js'

export const ExpenseListItem=({dispatch ,id,description, createdAt,amount})=>
(
   // alert('createdAt'+createdAt);
   // const mom=moment(createdAt).format('MMM Do, YYYY');
  //  alert('mom='+mom);
  <Link className='list-item' to={'/edit/'+id}>

      <div className='list-item__title'>
          <h3> {description}</h3>
          <span className='list-item__sub-title'>{moment(createdAt).format('MMM Do, YYYY')} </span>
      </div>
    
    
    <h3 className='list-item__data'> {numeral(amount/100).format('$0,0.00')}  </h3>
  
  </Link> 
);


export default connect()(ExpenseListItem);