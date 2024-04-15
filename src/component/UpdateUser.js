import axios from 'axios'
import React,{useState,useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
function UpdateUser() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [city, setCity] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
let {uid}=useParams()
// console.log(uid)
useEffect(()=>{
  // axios.get("http://localhost:3000/user/" + uid ,{ name, age, city, phone, email }).then((res)=>{
  axios.get("https://manoj000001.github.io/json-spi/ducate.json/" + uid ,{ name, age, city, phone, email }).then((res)=>{
    // console.log(res.data)
    setName(res.data.user.name || '')
    setAge(res.data.user.age || '')
    setCity(res.data.user.city || '')
    setPhone(res.data.user.phone || '')
    setEmail(res.data.user.email || '')
    
  })
  .catch(error => {
    console.error('Error fetching user data:', error);
  });
},[uid]) 

let handleupdate=(e)=>{
  e.preventDefault()
  axios.put("http://localhost:3000/user/" +uid,{ name, age, city, phone, email })
  .then(()=>{
    navigate("/ShowUser")
  })
  .catch(error => {
    console.error('Error fetching update user data:', error);
  });
}
  return (

   <>
   
<div className="ccertificates">
        <div className="cform">
          <h1>Update Data for Addmission in ducate</h1>
          <form onSubmit={handleupdate}>
            Name <br />
            <input
              type="text"
              className='name'
              placeholder='Name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <br />
            Age <br />
            <input
              type="text"
              className='age'
              placeholder='Age'
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
            <br />
            City <br />
            <input
              type="text"
              className='city'
              placeholder='City'
              value={city}
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <button type="submit">Update</button>
          </form>
        </div>
      </div>

   </>
  )
}

export default UpdateUser
