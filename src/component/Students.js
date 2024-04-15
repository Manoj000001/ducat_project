import React from 'react'
import "../css/students.css"
function Students(props) {
  return (
   <>
   <div className="students">
   
    <div className="studentslist">
        <div>
<img src={props.src} alt=""  height="50px" width="50px"/>
</div>
<h2>{props.name}</h2>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis vero doloremque cupiditate libero impedit saepe non quasi ullam ea? Optio?</p>
   </div>
   </div>
   </>
  )
}

export default Students
