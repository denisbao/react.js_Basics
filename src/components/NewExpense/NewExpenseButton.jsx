import './NewExpense.css'

export function NewExpenseButton(props) {
  return (
    <button onClick={props.onExpenseButtonClick}>
      New Expense
    </button>
  )
}