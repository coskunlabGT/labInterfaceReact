import React, { useState } from 'react'
import GoogleBtn from './GoogleBtn.js'

function LoginPage() {
  const [isLogined, setIsLogined] = useState(false);
  const [token, setToken] = useState(null);
  const setLoggedIn = () => {
    console.log(isLogined)
    setIsLogined(true)
    setToken()
  }
  const setLoggedOut = () => {
    console.log(isLogined)
    setIsLogined(false)
  }
  return (
    <GoogleBtn isLogined={isLogined} setLoggedIn={setLoggedIn} setLoggedOut={setLoggedOut}/>
  )
}
export default LoginPage;
