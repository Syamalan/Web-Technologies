import React from 'react'

function ChildComponent(props) {{/*props is used to interact with parent.In parent attributes are defined and to access them in child we use props */}
  return (
    <div>
        <h4>Child Component,Welcome {props.cname}</h4>
    </div>
  )
}

export default ChildComponent