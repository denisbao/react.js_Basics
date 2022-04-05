import { ExpenseList } from './components/Expenses/ExpenseList'
import { NewExpense } from './components/NewExpese/NewExpense'

import { data_expenses } from './data/expenses'

export function App() {

  function addExpenseHandler(expenses) {
    console.log('InAPP')
    console.log(expenses)
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <ExpenseList expenses={data_expenses}/>
    </div>
  )
}
