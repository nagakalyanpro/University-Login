import React from 'react'

import { useAuth0 } from '@auth0/auth0-react';

function Logout() {
    const { logout, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
    <div className='logins' align='center'>
       <button onClick={()=>logout()}> Logout</button>
        </div>
    )
  )
}

export default Logout