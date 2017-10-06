import {createStore, combineReducers} from 'redux'

//Add expenses
//Remove
//Edit expenses
//Filter text
//Sort by Date
//Sort by amount
//Set start Date
//Set end Date

//Expenses Reducer
const expensesReducerDefaultState = []

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

//Filter Reducer
const filteReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
}

const filtersReducer = (state = filteReducerDefaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

//Store Creation
const store = createStore(combineReducers({expenses: expensesReducer, filters: filtersReducer}))

console.log(store.getState());

const demoState = {
  expenses: [
    {
      id: 'sdjsjdjsd',
      description: 'October Rent',
      note: 'This was a payment for the rent',
      amount: 54500,
      createdAt: 0
    }
  ],
  filters: {
    text: 'rent',
    sortBy: 'amount', //Date or amount
    startDate: undefined,
    endDate: undefined
  }
};
