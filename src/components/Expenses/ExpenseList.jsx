import { ExpenseItem } from "./ExpenseItem"
import { ExpenseFilter } from './ExpenseFilter';
import { Card } from '../UI/Card';

import './ExpenseList.css'
import { useState } from 'react';

export function ExpenseList(props) {
  const [filteredYear, setFilteredYear] = useState('2022')

  function filterChangeHandler(selectedYear) {
    setFilteredYear(selectedYear)
  }

  return (
    <>
      <Card className="expenses">
        <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
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
    </>
    
  )
}