import { ExpenseItem } from './ExpenseItem'
import { ExpenseFilter } from './ExpenseFilter'
import { Card } from '../UI/Card'

import './ExpenseList.css'
import { useState } from 'react'

export function ExpenseList(props) {
  const [filteredYear, setFilteredYear] = useState('2022')

  const filteredList = props.expenses.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear
  })

  function filterChangeHandler(selectedYear) {
    setFilteredYear(selectedYear)
  }

  let listConditionalContent = <p>No expenses found.</p>
  
  if (filteredList.length > 0) {
    listConditionalContent = filteredList.map(expense => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        date={expense.date}
        amount={expense.amount}
      />
    ))
  }

  return (
    <>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {listConditionalContent}
      </Card>
    </>
  )
}
