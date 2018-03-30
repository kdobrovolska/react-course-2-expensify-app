
export default (expenses)=>{
    if(expenses===0)
        return 0;
   return expenses.map((item)=>(item.amount)).reduce((sum,a)=>(sum+a),0);
}