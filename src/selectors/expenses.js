import moment from 'moment'
export default (expenses,{startDate,endDate,text, sortBy})=>
{
  /*  const ar= [];
    expenses.map((item)=>{
        
        const isStartDate= (typeof startDate != 'number' ) || item.createdAt>=startDate;
        const isEndDate= (typeof endDate != 'number' ) || item.createdAt<=endDate;
        const isText = true; //(typeof endDate != 'string') || item.description.toLowerCase().indexOf(text.toLowerCase())>=0;
     //   alert(isStartDate+' , '+isEndDate+' , '+ isText );
      //  alert(startDate+' , '+endDate+' , '+ text +'=='+item.createdAt);
        if( isStartDate && isEndDate && isText)
        {
            ar.push(item);
        }
    });
   
    console.log('count='+expenses.length, ar.length);
   return ar;*/
   return expenses.filter((item)=>{
        const createdAtMoment=moment(item.createdAt);
        const isStartDate=  startDate? startDate.isSameOrBefore(createdAtMoment, 'day'):true;
        const isEndDate= endDate? endDate.isSameOrAfter(createdAtMoment, 'day'):true;
        const isText = (typeof text != 'string') || item.description.toLowerCase().includes(text.toLowerCase());
        return isStartDate && isEndDate && isText;
    }).sort((a,b)=>{
        if(sortBy.toLowerCase()==='date')
            return  (a.createdAt-b.createdAt);
        if(sortBy.toLowerCase()==='amount')
            return  (a.amount-b.amount);
  
    }); 
    
}