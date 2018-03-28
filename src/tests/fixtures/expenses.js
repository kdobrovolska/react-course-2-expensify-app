import moment from 'moment'
export default [
    {
        id:'1',
        description:'d1',
        note:'n1',
        amount:10,
        createdAt:moment(0).valueOf()}
    ,
    {
        id:'2',
        description:'cd1',
        note:'n1',
        amount:105,
        createdAt:moment(0).subtract(4,'days').valueOf()}
    ,
    {
        id:'3',
        description:'ud1',
        note:'n1',
        amount:50,
        createdAt:moment(0).add(1,'days').valueOf()}
    
];