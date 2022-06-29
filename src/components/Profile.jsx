import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import College from './College';

function Profile() {
    const {user, isAuthenticated} = useAuth0();
  return (
    isAuthenticated && (
    <div>
       <College />
    </div>
    )
  )
}

export default Profile