import React from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

function NewExpense(props) {

    const saveExpenseDataHandler = (inputExpenseData)=>{//inputexpdata is from expense from the line props.onSaveExpenseData(expense)
        //to add new object like id
        let expense = {
            ...inputExpenseData,
            id:Math.random().toString()
        }
        // console.log("In NewExpense form",inputExpenseData)
        console.log("In NewExpense form",expense)
        props.onAddExpense(expense)



    }
  return (
    <div>
        <div className="new-expense"></div>
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
    </div>
  )
}

export default NewExpense