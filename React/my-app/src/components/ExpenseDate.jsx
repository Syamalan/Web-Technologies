import React from 'react'
import "./ExpenseDate.css"
function ExpenseDate(props) {
  const month = props.expDate.toLocaleString('en-US', { month: 'long' });
  const day = props.expDate.toLocaleString('en-US', { day: '2-digit' });
  const year = props.expDate.getFullYear();
  return (
    <div>

      {/* <div>
               <div>{month}</div>
                <div>{day}</div>
                <div>{year}</div>
            </div> */}
      <div className="expense-date">
        <div className="expense-date__month">{month}</div>
        <div className="expense-date__day">{day}</div>
        <div className="expense-date__year">{year}</div>
      </div>
    </div>

  )
}

export default ExpenseDate