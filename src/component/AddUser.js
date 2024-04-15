
import React,{useState} from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom';
function AddUser() {
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [city, setCity] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
// console.log(name,age,city,phone,email);
let navigate=useNavigate()
const handleSubmit = (e) => {
 e.preventDefault()
  axios.post("http://localhost:3000/user" , { name, age, city, phone, email })
    .then(() => {
      // console.log(res);
      navigate("/ShowUser")
    })
   

    
}

  return (
   <>

<div className="ccertificates">
        <div className="cform">
          <h1>Apply for Addmission in ducate</h1>
          <form onSubmit={handleSubmit}>
            Name <br />
            <input
              type="text"
              className='name'
              placeholder='Name'
              // value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <br />
            Age <br />
            <input
              type="text"
              className='age'
              placeholder='Age'
              // value={age}
              onChange={(e) => setAge(e.target.value)}
            />
            <br />
            City <br />
            <input
              type="text"
              className='city'
              placeholder='City'
              // value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <br />
            Phone <br />
            <input
              type="number"
              className='phone'
              placeholder='Phone number'
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <br />
            Email <br />
            <input
              type="email"
              className='email'
              placeholder='Email'
              // value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
   </>
  )
}
export default AddUser

