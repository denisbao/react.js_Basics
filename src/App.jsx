import { ExpenseList } from './components/Expenses/ExpenseList'

import { data_expenses } from './data/expenses'

export function App() {
  return (
    <div>
      <h1>Let's get started!</h1>
      <ExpenseList expenses={data_expenses}/>
    </div>
  )
}
