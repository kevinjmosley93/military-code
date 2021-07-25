import React from 'react'
import ProfileCard from '../components/ProfileCard'
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
    <div className='container my-5'>
      <h1 className='text-center'>Profile for {user.email}</h1>
      {user.training.map(training => (
        <ProfileCard key={training.id} training={training} />
      ))}
    </div>
  )
}

export default Profile
