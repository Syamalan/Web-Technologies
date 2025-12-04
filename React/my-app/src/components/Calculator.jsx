import React,{useState} from 'react'
 
function Calculator() {
    // let counter =0
    let [counter,setCounter] = useState(0)//returns destructured array counter is initialised to zero then by using function in second arg we are incrementing the value
    let btnHandler = ()=>{
        // here it will not print the count even btn clicked due to state is not used
        // counter++
        // console.log("Btn clicked")
        setCounter(counter+1)
    }
  return (
    <div>
        <h2>The counter is :{counter}</h2>
        <button onClick={btnHandler}>Increment</button>
    </div>
  )
}

export default Calculator