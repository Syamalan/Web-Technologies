import React, { useState } from 'react'

function SimpleForm() {

    let [uname,setUname]=useState("")//state makes variable global
    let [pass,setPass]=useState("")
    let unameHandler = (event)=>{
        setUname(event.target.value)
        // console.log("Hello",uname)
    }
    let passHandler = (event)=>{
        setPass(event.target.value)
        // console.log("Hello",uname)
    }
    let submitHandler =(event)=>{
        event.preventDefault()//if not form will be submitted to server which inturn refreshes the page but react is SPA that particular element only to be refreshed not entire page
        var user = {
            username:uname,
            password:pass
        }
        console.log(user)

        setUname("")//will not reset the form, for this we have to do two way binding in input value as uname. due to that everytime uname is becoming empty as this line making it as empty
        setPass("")
    }
  return (
    <div>
        <form onSubmit={submitHandler}>
            {/* <div class="mb-3"></div>
            UserName:
            <input onChange={unameHandler} value = {uname} class="form-control"/><br/>
            <input class = "btn btn-primary" type="submit" value="Click here"></input> */}
            UserName:
            <input onChange={unameHandler} value={uname}/><br/>
            Password:
            <input onChange={passHandler} value={pass} type="password"/><br/>

            <input type="submit" value="Click here"/>

        </form>
    </div>
  )
}

export default SimpleForm