import React from 'react'
import { Link } from 'react-router-dom'

const Error404 = () => {
  return (
    <div>404 Error Page
                         <p>Sorry, this page does not exist</p>
                         <Link to="/">GO BACK</Link>
    </div>
  )
}

export default Error404