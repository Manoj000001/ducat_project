import React from 'react'
import '../css/contact.css'
function Contactprop(props) {
  return (
   <>
   <div className="cinfo">
    <h1>{props.add}</h1>
    <p>{props.ph}</p>
    <p>{props.email}</p>
    <p>{props.address}</p>
   </div>
   </>
  )
}

export default Contactprop
