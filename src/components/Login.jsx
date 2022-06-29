import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';

function Login() {
    const {loginWithRedirect, isAuthenticated} = useAuth0();
  return (
    !isAuthenticated && (
    <div align = "center">
      <h1>React Authentication</h1>
      <button className="logins" onClick={()=>loginWithRedirect()}>Login</button>
    
    </div>

    )
  )
}

export default Login