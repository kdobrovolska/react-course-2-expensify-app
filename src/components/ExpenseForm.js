import React from 'react';
import moment from 'moment';
const now =moment();
console.log(now);
import {SingleDatePicker} from 'react-dates';
//import 'react-dates/lib/css/_datepicker.css'; //go to app.js

export default class ExpenseForm extends React.Component
{
    
    constructor(props)
    {
        
      //  alert('conzstructor');
        super(props);
        this.state={description:'',
            note:'', 
            amount:'',
            createdAt:moment(),
            calendarFocused:false,
            error:''
            };
        
        if(!!props.expense)
        {
          this.state =  {...this.state,...props.expense,createdAt:moment(props.expense.CreateAt)};
           
        }
    }
    
    DescriptionChanged=(e)=>
    {
        
        const description=e.target.value;
      //  alert(description);
        this.setState(()=>({description}));
    }
    NoteChanged=(e)=>
    {
        e.persist();
         this.setState(()=>({note:e.target.value}));
    }
    AmountChanged=(e)=>
    {
        
        const amount=e.target.value;
        if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)){
            this.setState(()=>({amount}));
        }
    }
    onDateChange=(createdAt) =>{
        if(createdAt)
            this.setState(()=>({createdAt}));
    }
    onFocusChange1=({focused})=>
    {
       this.setState(()=>({calendarFocused:focused}));
    }
    onSubmit=(e)=>{
        e.preventDefault();
        if(!this.state.description || !this.state.amount)
        {
            this.setState(()=>({error:'Please provide description and amount'}));
       
        }else{
            this.setState(()=>({error:''}));
            this.props.submit({
                description:this.state.description,
                amount:parseFloat(this.state.amount,10),
                note:this.state.note,
                createdAt:this.state.createdAt.valueOf()
            });
        }
    };
    render()
    {
        let obj=this.state;
     /*   if(!!this.props.expense)
        {
           obj=  {...obj,...this.props.expense,createdAt:moment(this.props.expense.CreateAt)};
        }*/

     //   alert('render');
      return <form className='form' onSubmit={ this.onSubmit}>
       {this.state.error && <p className='form__error'>{this.state.error}</p>}
        <input type='text' 
            className='text-input' 
            placeholder='Description' 
            autoFocus
            value={obj.description}
            onChange={this.DescriptionChanged}
            />
        <label id='errDescription' className='err'></label>
        <input type='text' 
            className='text-input' 
            placeholder='Amount' 
            value={obj.amount}
            onChange={this.AmountChanged}
            />
            
         <SingleDatePicker 
            date={obj.createdAt}
            onDateChange={this.onDateChange}
            focused ={this.state.calendarFocused}
            onFocusChange ={this.onFocusChange1}
            numberOfMonths={1}
            isOutsideRange={()=>{ return false;}}
            />
        <p></p>
        <textarea placeholder='Add note' 
            className='textarea'
            value={obj.note}
            onChange={this.NoteChanged}
        ></textarea>
        <div>
            <button className='button1'>Save Expense</button>
        </div>
  
        </form> ;
    }
}