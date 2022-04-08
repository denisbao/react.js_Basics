import { ExpenseFilter } from './ExpenseFilter'
import { Card } from '../UI/Card'
import { ExpensesConditionalListing } from './ExpensesConditionalListing';
import { ExpensesChart } from './ExpensesChart';
import { useState } from 'react'

import './ExpenseList.css'

export function ExpenseList(props) {
  const [filteredYear, setFilteredYear] = useState('2022')

  const filteredList = props.expenses.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear
  })

  function filterChangeHandler(selectedYear) {
    setFilteredYear(selectedYear)
  }

  

  return (
    <>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredList}/>
        <ExpensesConditionalListing list={filteredList}/>
      </Card>
    </>
  )
}
