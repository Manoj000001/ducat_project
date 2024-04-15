import React, { useState, useEffect } from 'react'
import axios from "axios"
import { Link , useNavigate} from 'react-router-dom'


    function ShowUser() {
        let [data, setdata] = useState()
        let navi=useNavigate()
        useEffect(() => {
            // let getdata = axios.get("http://localhost:3000/user")
            let getdata = axios.get("https://github.com/Manoj000001/ducat_project/blob/main/database/ducate.json/user")
            getdata.then((totalget) => {
                // console.log(totalget.data)
                setdata(totalget.data)
            })
        })

      let  handleclick=(val)=>{
        
// axios.delete('http://localhost:3000/user/'+val).then(()=>{
//     navi('/ShowUser')
// })
axios.delete('https://github.com/Manoj000001/ducat_project/blob/main/database/ducate.json/user/'+val).then(()=>{
    navi('/ShowUser')
})

      }
    
        return (
            <> <div className="table-responsive">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">id</th>
                            <th scope="col">name</th>
                            <th scope="col">age</th>
                            <th scope="col">city</th>
                            <th scope="col">phone</th>
                            <th scope="col">email</th>
                            <th scope="col">delete</th>
                            <th scope="col">update</th>
                        </tr>
                    </thead>
                    {
                        data ? <tbody>
                            {
                                data.map((mapdata) => {
                                    return (
                                        <tr>
                                            <th scope="col">{mapdata.id}</th>
                                            <th scope="col">{mapdata.name}</th>
                                            <th scope="col">{mapdata.age}</th>
                                            <th scope="col">{mapdata.city}</th>
                                            <th scope="col">{mapdata.phone}</th>
                                            <th scope="col">{mapdata.email}</th>
                                            <th scope="col"><Link to={'/delete/'+ mapdata.id} onClick={()=>{handleclick(mapdata.id)}} ><i class="fa-solid fa-trash-can"></i></Link></th>
                                            <th scope="col"><Link to={'/updateuser/'+ mapdata.id}><i class="fa-solid fa-pen-to-square"></i></Link></th>
                                            
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

export default ShowUser
