import { ExpenseItem } from './ExpenseItem'

import './ExpensesConditionalListing.css'

export function ExpensesConditionalListing(props) {
  if (props.list.length === 0) {
    return <h4 className="expenses-list__fallback">No expenses found.</h4>
  }

  return (
    <ul className="expenses-list">
      {props.list.map(expense => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          date={expense.date}
          amount={expense.amount}
        />
      ))}
    </ul>
  )
}
