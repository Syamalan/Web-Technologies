import React from 'react'

function ListComponent() {
    let arr= [10,20,30,40,50]

    var newarr = arr.map(ele=>
        {
            return <li>{ele*ele}</li>
        })
    //also gives same output
    var newarr1 = arr.map(ele=>(<li>{ele*ele}</li>))
        

    let items = [{iname:"aaa"},{iname:"bbb"},{iname:"bbb"}]
    let itemnames = items.map(name=>{
        return <p>{name.iname}</p>
    })
    let users=[
        {id:101,uname:"aaaa",phno:"12345"},
        {id:102,uname:"bbbb",phno:"123456"},
        {id:103,uname:"cccc",phno:"12345567"}
    ]
    let tusers=users.map(user =>(
        <tr key={user.id}>{/* we have to add key at the top level*/}
            <td>user.id</td><td>user.uname</td><td>user.phno</td>

        </tr>
    ))
  return (
    <div>
        {newarr}
        {newarr1}

        {itemnames}
    </div>
  )
}

export default ListComponent