import React from 'react'
import { Link } from 'react-router-dom'

function Homepage() {
  return (
    <>
    <Link to={'login/'}><button>Login</button></Link>
    <h2>It is homepage of my project orimitaskmanager</h2>
    </>
  )
}

export default Homepage