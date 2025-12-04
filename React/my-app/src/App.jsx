// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useState } from 'react'
import './App.css'
import Calculator from './components/Calculator'
import ExpenseItem from './components/Expenseitem'
import ListComponent from './components/ListComponent'
import NewExpense from './components/NewExpense'
import ParentComponent from './components/ParentComponent'
import Person from './components/person'
import SimpleForm from './components/SimpleForm'
import DeleteComponent from './components/DeleteComponent'
var dummy_expenses =[

      {id:100,expTitle:"Myntra-Shopping", expDate: new Date(2024,11,6), expAmount:"10000"},
      {id:101,expTitle:"Amazon-Shopping", expDate: new Date(2024,4,5), expAmount:"7000"},
      {id:103,expTitle:"Flipcart-Shopping",expDate: new Date(2025,8,30), expAmount:"9000"},
      {id:104,expTitle:"Window-Shopping",expDate: new Date(2025,10,30), expAmount:"1000"}

  ]
function App() {
  // const [count, setCount] = useState(0)
  // whatever we write here it is going to be pure js code
  // var expenses =[

  //     {id:100,expTitle:"Myntra-Shopping", expDate: new Date(2024,11,6), expAmount:"10000"},
  //     {id:101,expTitle:"Amazon-Shopping", expDate: new Date(2024,4,5), expAmount:"7000"},
  //     {id:103,expTitle:"Flipcart-Shopping",expDate: new Date(2025,8,30), expAmount:"9000"},
  //     {id:104,expTitle:"Window-Shopping",expDate: new Date(2025,10,30), expAmount:"1000"}

  // ]


  let [expenses,setExpenses] = useState(dummy_expenses)//initial value is set to dummy expenses

  // let [expense,setExpense] = useState()


  const addExpenseHandler = (expenseData)=>{
    console.log("In App",expenseData)
    setExpenses(prev_exp=>[expenseData,...prev_exp])//we are spreading the array to get added in the list
  }
  const deleteHandler = (id)=>{
    console.log(id)
    setExpenses(prev=>{return prev.filter(exp=>(exp.id!=id))})

  }

  return (
    
      <div className='App'>
        <h1>Lets get started</h1>
        {/* <ParentComponent /> */}
        {/* <Calculator /> */}
        {/* <SimpleForm /> */}
        {/* <ListComponent /> */}
        {/* <DeleteComponent /> */}
        <NewExpense onAddExpense={addExpenseHandler}/>
        <hr></hr>
        {/* <ExpenseItem expTitle="Myntra-Shopping" expDate="12-08-2025" expAmount="5000"/>
        <ExpenseItem expTitle="Amazon-Shopping" expDate="12-10-2025" expAmount="3000"/>
        <ExpenseItem expTitle="Flipcart-Shopping" expDate="12-01-2025" expAmount="1000"/> */}
        {/* <ExpenseItem expTitle={expenes[0].expTitle} expDate={expenes[0].expDate} expAmount={expenes[0].expAmount}/>
        <ExpenseItem expTitle={expenes[1].expTitle} expDate={expenes[1].expDate} expAmount={expenes[1].expAmount}/>        
        <ExpenseItem expTitle={expenes[2].expTitle} expDate={expenes[2].expDate} expAmount={expenes[2].expAmount}/>        <Person pname="Syamala" age="27"/> */}
        {
          expenses.map(expense=>(
            <ExpenseItem key={expense.id}
            id={expense.id}
            expTitle={expense.expTitle}
            expDate={expense.expDate}
            expAmount={expense.expAmount}
            onDelete={deleteHandler}
            />
          ))
        }
        
        {/* <Person pname="Harika" age="22"/>
        <Person pname="Saranya" age="28"/> */}


      </div>
      
    
  )
}

export default App
