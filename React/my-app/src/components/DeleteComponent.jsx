import React, { useState } from 'react'

function DeleteComponent() {

    let usersList=[
        {id:101,uname:"aaaa",phno:"12345"},
        {id:102,uname:"bbbb",phno:"123456"},
        {id:103,uname:"cccc",phno:"12345567"}
    ]
    let [users,setUsers] = useState(usersList)

    let deleteHandler = (id)=>{
        setUsers(prev=>{return prev.filter(user=> user.id!=id)})
        //or we can use round brackets
        setUsers(prev=>prev.filter(user=> user.id!=id))


    }

  return (
    <div>
        <table className='table table-bordered'>
        {
            
            users.map(user=>(
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.uname}</td>
                    <td>{user.phno}</td>
                    <td>
                        <button 
                        className='btn btn-danger' 
                        onClick={()=>deleteHandler(user.id)}>{/*based on id we have to delete so it should be function*/}
                            Delete
                            </button>
                            </td>
                </tr>

            ))
        }
        </table>
    </div>
  )
}

export default DeleteComponent