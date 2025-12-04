import ExpenseDate from "./ExpenseDate"
import "./ExpenseItem.css"
import { useState } from "react"
let ExpenseItem = function (props) {

    // var expDate = new Date(2024,11,18)
    // var expTitle = "Groceries"
    // var expAmount = 200

    // return <h2>Expense Item</h2>
    let [title, setTitle] = useState(props.expTitle)
    // let title = props.expTitle

    let btnHandler = () => {
        // title = "updated title"
        // console.log(title)
        // console.log("button clicked")
        setTitle("Updated Title")
    }

    return (
        // <div>
        //     <div>12-oct-2025</div>
        //     <div>
        //         <div>Paid Carpenter</div>
        //         <div>1000</div>
        //         </div>
        // </div>

        <div className="expense-item">

            {/*            <div>{props.expDate.toLocaleString}</div> */}
            <ExpenseDate expDate={props.expDate} />
            <div className="expense-item__description">
                <h2>{title}</h2>
                <p className="expense-item__price">{props.expAmount}</p>
            </div>
            {/* <button onClick={btnHandler}>Change Title</button> */}
            <button onClick={()=>props.onDelete(props.id)} 
                    className="btn btn-danger">Delete</button>

        </div>
    )
}


export default ExpenseItem