import React,{useState} from 'react'
import '../css/search.css'
import axios from 'axios'
function SearchData() {
    let[key,setkey]=useState()
    let[total,setTotal]=useState()

         const SearchData = (val) => {
        axios.get("http://localhost:3000/user?id=" + val).then((res)=>{
            // console.log(res.data)
            setTotal(res.data)
        })
      

    }
    let handlesearch=(e)=>{
        e.preventDefault()
    }
  return ( <>

<div className="table-responsive">
<div className="container">
    <form action="" onSubmit={handlesearch}>
        <input type="text" placeholder="Search user by ID" onChange={(e)=>{setkey(e.target.value)}}/>
        <button type="submit" onClick={()=>{SearchData(key)}}>Search</button>
    </form>
</div>

<table className="table">
                    <thead>
                        <tr>
                            <th scope="col">id</th>
                            <th scope="col">name</th>
                            <th scope="col">age</th>
                            <th scope="col">city</th>
                            <th scope="col">phone</th>
                            <th scope="col">email</th>
                          
                        </tr>
                    </thead>
                    {
                        total ? <tbody>
                            {
                                total.map((pro) => {
                                    return (
                                        <tr>
                                            <th scope="col">{pro.id}</th>
                                            <th scope="col">{pro.name}</th>
                                            <th scope="col">{pro.age}</th>
                                            <th scope="col">{pro.city}</th>
                                            <th scope="col">{pro.phone}</th>
                                            <th scope="col">{pro.email}</th>
                                           
                                        </tr>
                                    )
                                })
                            }
                        </tbody> : <p>no data</p>
                    }
                </table>
                </div>
   </>
  )
}

export default SearchData
