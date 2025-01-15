import React, { use } from 'react'
import "./Login.css"
import { useState, useEffect } from 'react';
// import { data } from 'react-router-dom';
// import Login from '../Authentication/Login';
import axios from 'axios';

function Login() {

  const [username, setusername] = useState("mor_2314");
  const [password, setpassword] = useState("83r5^_");


  const handleSubmit = async () => {
    // event.preventDefault()

    const payload = {
      username: username,
      password: password,
    }

    try {
      // Send the POST request
      const response = await axios.post('https://fakestoreapi.com/auth/login', payload, {
        headers: {
          'Content-Type': 'application/json', // Specify JSON content
        },
      });

      // Log the response
      console.log('Response Data:', response.data);
    } catch (error) {
      console.log('Error:', error);
    }
  }

  useEffect(() => {
    handleSubmit()
  }, [])

  return (
    <div>
      <div className="form-container">
        <form className="centered-form" onSubmit={(e) => handleSubmit(e)}>
          <h2>Login</h2>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" placeholder="Enter your username" value={username} onChange={(e) => setusername(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn-submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login