import React from 'react'
import ChildComponent from './ChildComponent'

function ParentComponent() {
  return (
    <div>
        <h2>This is Parent </h2>
        <ChildComponent cname="Syamala"/>{/*attr can be any name */}
    </div>
  )
}

export default ParentComponent