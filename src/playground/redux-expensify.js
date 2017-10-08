import {createStore, combineReducers} from 'redux'
import uuid from 'uuid'
//Add expenses

const addExpense = ({
  description = '',
  note = '',
  amount = 0,
  createdAt = 0
} = {}) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});
//Remove
const removeExpense = ({id} = {}) = ({type: "REMOVE_EXPENSE", id: id})
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
    case 'ADD_EXPENSE':
      return [
        ...state,
        action.expense
      ];
    case 'REMOVE_EXPENSE':
      return state.filter(({id}) => id !== action.id)
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

//Store Creation and combines reducers
const store = createStore(combineReducers({expenses: expensesReducer, filters: filtersReducer}));

store.subscribe(() => {
  console.log(store.getState());
})

const expenseOne = store.dispatch(addExpense({description: 'Rent', amount: 100}));
const expenseTwo = store.dispatch(addExpense({description: 'Coffee', amount: 300}));

store.dispatch(removeExpense({id: expenseOne.expense.id}));

console.log(expenseOne);

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
