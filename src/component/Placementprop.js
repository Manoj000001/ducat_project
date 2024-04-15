import React from 'react'
import '../css/placement.css'

function Placementprop(props) {
  return (
    <>
    <div className="pstudents">
      <div className="img">
        <img src={props.src} alt="" width="250px" height="250px" />
        <div>name - {props.name}</div>
        <div>job profile - {props.jobprofile}</div>
        <div>package - {props.package}</div>
        <div>company - {props.company}</div>
      </div>
    </div>
    </>
  )
}

export default Placementprop
