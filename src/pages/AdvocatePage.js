import React from 'react'
import { useParams } from 'react-router-dom'
function AdvocatePage() {
 const params = useParams()
 const username = params.username

  return (
    <div><h1>{username}  </h1></div>
  )
}

export default AdvocatePage