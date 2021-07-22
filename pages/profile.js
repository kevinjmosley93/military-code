import React from 'react'
import { useUser } from '../lib/hooks'

const Profile = () => {
  const user = useUser()
  // console.log(user)
  if (!user)
    return (
      <div className='container'>
        <h1 className='text-center'>Unauthorized Access</h1>
      </div>
    )
  return (
    <div className='container'>
      <h1 className='text-center'>Profile for {user.email}</h1>
    </div>
  )
}

export default Profile
