
import React from 'react'
import '../css/certificates.css'
function Certificates() {
  return (
   <>
<div className="ccertificates">
  <div className="cform">
<h1>Apply for Certificate</h1>
<form action="">
  Name <br />
  <input type="text" name="" id="" className='name' placeholder='Name'/>
  
  Age <br />
  <input type="text" name="" id="" className='name' placeholder='Age'/>
  
  City <br />
  <input type="text" name="" id="" className='name' placeholder='City'/>
  
  Phone 
  <input type="number" className='phone' placeholder='phone number'/>
  Email
  <input type="email" className='email'  placeholder='email' />
 
  Course Name <br />
  <input type="text " className='course' placeholder='course name' />
  Center <br />
<select name="center" id="" className='center' placeholder="enter center">
  <option value="" selected disabled>select center</option>
  <option value="" >noida sector 16</option>
  <option value="">noida sector 63</option>
  <option value="">pitampur</option>
  <option value="">gaziabad</option>
  <option value="">gurgoan</option>
</select>
faculty Name <br />
<input type="text" className='faculty' placeholder='faculty name' />
ducate id <br />
<input type="text" className='id' placeholder='enter id'/>
start date <br />
<input type="date" className='date' />
end data <br />
<input type="date" className='date' />
<button>submit</button>
</form>
</div>
</div>
   </>
  )
}

export default Certificates
