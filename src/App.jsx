import { ExpenseList } from './components/Expenses/ExpenseList'
import { NewExpense } from './components/NewExpense/NewExpense'
import { useState } from 'react';

import { data_expenses } from './data/expenses'

export function App() {
  const [expenses, setExpenses] = useState(data_expenses)

  function addExpenseHandler(newExpense) {
    setExpenses(prevExpenses => {
      return [newExpense, ...prevExpenses]
    })
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <ExpenseList expenses={expenses}/>
    </div>
  )
}
