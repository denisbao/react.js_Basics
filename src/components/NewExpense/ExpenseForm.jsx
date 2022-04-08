import { useState } from 'react'

import './ExpenseForm.css'

// Using separate states for each input:
export function ExpenseForm(props) {
  const [enteredTitle, setEnteredTitle] = useState('')
  const [enteredAmount, setEnteredAmount] = useState('')
  const [enteredDate, setEnteredDate] = useState('')

  function titleChangeHandler(event) {
    setEnteredTitle(event.target.value)
  }

  function amountChangeHandler(event) {
    setEnteredAmount(event.target.value)
  }

  function dateChangeHandler(event) {
    setEnteredDate(event.target.value)
  }

  function submitHandler(event) {
    event.preventDefault()
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    }
    props.onSaveExpenseData(expenseData) //passing data to NewExpense Component
    setEnteredAmount('')
    setEnteredDate('')
    setEnteredTitle('')
    props.onCancelExpense()
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>

        <div className="new-expense__actions">
          <button type='button' onClick={props.onCancelExpense}>Cancel</button>
          <button type="submit">Save Expense</button>
        </div>
      </div>
    </form>
  )
}

// Using just one state to handle all inputs:
// export function ExpenseForm() {
//   const [userInput, setUserInput] = useState({
//     enteredTitle: '',
//     enteredAmount: '',
//     enteredDate: ''
//   })

//   function titleChangeHandler(event) {
//     setUserInput((prevState) => {
//       return {
//         ...prevState,
//         enteredTitle: event.target.value
//       }
//     })
//   }

//   function amountChangeHandler(event) {
//     setUserInput((prevState) => {
//       return {
//         ...prevState,
//         enteredAmount: event.target.value
//       }
//     })
//   }

//   function dateChangeHandler(event) {
//     setUserInput((prevState) => {
//       return {
//         ...prevState,
//         enteredDate: event.target.value
//       }
//     })
//   }

//   return (
//     <form>
//       <div className="new-expense__controls">
//         <div className="new-expense__control">
//           <label>Title</label>
//           <input type="text" onChange={titleChangeHandler} />
//         </div>

//         <div className="new-expense__control">
//           <label>Amount</label>
//           <input
//             type="number"
//             min="0.01"
//             step="0.01"
//             onChange={amountChangeHandler}
//           />
//         </div>

//         <div className="new-expense__control">
//           <label>Date</label>
//           <input
//             type="date"
//             min="2019-01-01"
//             max="2022-12-31"
//             onChange={dateChangeHandler}
//           />
//         </div>

//         <div className="new-expense__actions">
//           <button type="submit">Add Expense</button>
//         </div>

//       </div>
//     </form>
//   )
// }
