import { ExpenseForm } from './ExpenseForm'

import './NewExpense.css'

export function NewExpense(props) {

  function saveExpenseDataHandler(enteredExpenseData) {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }
    props.onAddExpense(expenseData) //passing data to App Component
  }

  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
    </div>
  )
}