import { ExpenseList } from './components/Expenses/ExpenseList'
import { NewExpense } from './components/NewExpese/NewExpense'

import { data_expenses } from './data/expenses'

export function App() {
  return (
    <div>
      <NewExpense />
      <ExpenseList expenses={data_expenses}/>
    </div>
  )
}
