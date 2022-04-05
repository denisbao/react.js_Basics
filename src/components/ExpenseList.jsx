import { ExpenseItem } from "./ExpenseItem"

import './ExpenseList.css'

export function ExpenseList(props) {
  return (
    <div className="expenses">
      {props.expenses.map(expense => (
        <div key={expense.id}>
          <ExpenseItem
            title={expense.title}
            date={expense.date}
            amount={expense.amount} 
          />
        </div>
      ))}
    </div>
  )
}