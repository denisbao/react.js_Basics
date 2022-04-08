import { ExpenseForm } from './ExpenseForm'

import './NewExpense.css'
import { NewExpenseButton } from './NewExpenseButton'
import { useState } from 'react'

export function NewExpense(props) {
  const [showForm, setShowForm] = useState(false)

  function saveExpenseDataHandler(enteredExpenseData) {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    }
    props.onAddExpense(expenseData) //passing data to App Component
  }

  function showFormOnHandler() {
    setShowForm(true)
  }

  function showFormOffHandler() {
    setShowForm(false)
  }

  return (
    <div className="new-expense">
      {!showForm && (
        <NewExpenseButton onExpenseButtonClick={showFormOnHandler} />
      )}
      {showForm && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancelExpense={showFormOffHandler}
        />
      )}
    </div>
  )
}
