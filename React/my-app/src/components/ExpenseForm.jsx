import React, { useState } from 'react'
import "./ExpenseForm.css"

function ExpenseForm(props) {

    let [inputTitle, setInputTitle] = useState("")
    let [inputDate, setInputDate] = useState("")
    let [inputAmount, setInputAmount] = useState("")

    let titleHandler = (e) => {
        setInputTitle(e.target.value)
    }
    let dateHandler = (e) => {
        setInputDate(e.target.value)

    }
    let amountHandler = (e) => {
        setInputAmount(e.target.value)

    }
    let submitHandler = (e) => {
        e.preventDefault()
        console.log(inputAmount, inputDate, inputTitle)
        var expense = {
            expTitle: inputTitle,
            expDate: new Date(inputDate),//to convert string to date
            expAmount: inputAmount
        }
        console.log("In Expense form",expense)
        props.onSaveExpenseData(expense)
        setInputTitle("")
        setInputDate("")
        setInputAmount("")
    }



    return (
        <div className="new-expense">
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input onChange={titleHandler} value={inputTitle} /><br></br>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" onChange={amountHandler} value={inputAmount} /><br></br>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input onChange={dateHandler} type="date" value={inputDate} /><br></br>
                </div>
            </div>
            <div className="new-expense__actions">
                {/* <button type="button">Cancel</button> */}
                <button type="submit">Add Expense</button>
            </div>
        </form>
        </div>
    )
}

export default ExpenseForm