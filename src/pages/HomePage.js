import React from 'react'
import {useEffect,useState} from 'react'
import axios  from 'axios'
import { Link } from 'react-router-dom';
function HomePage() {
 const [advocates,setAdvocates]=useState([])
 useEffect(() => {
   getData()
 }, [])

 let getData = async()=>{
    let response = await axios.get('http://127.0.0.1:8000/advocates/')
    console.log(response)
    setAdvocates(response.data)
 }
 
  return (
    <div>HomePage
    <div>
      {
        advocates.map((advocate,index) => (
          <div key={index}>
            <strong>{advocate.username}</strong>
            <Link to={`/advocate/${advocate.username}`}>View</Link>
          </div>
            
        ))
      }
    </div>
    </div>
  )
}

export default HomePage