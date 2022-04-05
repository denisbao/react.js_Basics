import { ExpenseItem } from "./ExpenseItem"
import { Card } from '../UI/Card';

import './ExpenseList.css'

export function ExpenseList(props) {
  return (
    <Card className="expenses">
      {props.expenses.map(expense => (
        <div key={expense.id}>
          <ExpenseItem
            title={expense.title}
            date={expense.date}
            amount={expense.amount} 
          />
        </div>
      ))}
    </Card>
  )
}