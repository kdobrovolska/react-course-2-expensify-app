import moment from 'moment'

const filter={
    text: '',
    sortBy: 'date', // date or amount
    startDate:undefined,
    endDate: undefined
};

const altFilter={
    text: 'new text',
    sortBy: 'amount', // date or amount
    startDate:moment(0),
    endDate: moment(0).add(3, 'days')
};
export {filter,altFilter}

