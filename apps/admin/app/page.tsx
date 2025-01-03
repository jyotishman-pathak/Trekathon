"use client"

import React from 'react'

const Home = () => {
  const login = () => {
    // Redirecting the user to the sign-in page
    window.location.href = "http://localhost:3000/api/auth/signin";
  }

  return (
    <div>
      <h1>This is the admin dashboard</h1>
      <button onClick={login}>Login</button> {/* Button to trigger login */}
    </div>
  )
}

export default Home
