// import React from 'react'
// import "./EmpComponent.css"
// function EmpComponent() {
//     const emps = [
//   {ename: "Anita", desig: "Manager", dept: "Trg", email: "Anita@abc.com"},
//   {ename: "Kavita", desig: "SSE", dept: "FSBU", email:"Kavita@abc.com"},
//   {ename: "Sunita", desig: "Associate", dept: "Legal", email:"Sunita@abc.com"},
// ]

//   return (
//     <>
//     <div className='emp-component'>
//         <div>
//         {emps.map((emp,idx)=>(
//         <div className="emp-card"key = {idx}>
//             <h3>Name:{emp.ename}</h3>
//             <h3>Designation : {emp.desig}</h3>
//             <h3>Department: {emp.dept}</h3>
//             <h3>Email :{emp.email}</h3>
            
//             </div>
//         ))}
    
//         </div>
//     </div>
//     </>
//   )
// }

// export default EmpComponent

import React, { useState, useEffect } from "react";
import "./EmpComponent.css";

function EmpComponent() {
  const [emps, setEmps] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/emps')
      .then(res => res.json())
      .then(data => setEmps(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="emp-component">
      <div>
        {emps.map((emp, idx) => (
          <div className="emp-card" key={emp._id || idx}>
            <h3>Name: {emp.ename}</h3>
            <h3>Designation: {emp.desig}</h3>
            <h3>Department: {emp.dept}</h3>
            <h3>Email: {emp.email}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EmpComponent;
