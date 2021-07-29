import React from 'react'
import ChangePassword from '../components/ChangePassword'
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
      {user.training.map(training => (
        <ProfileCard key={training.id} training={training} />
      ))}

      <ChangePassword user={user} />
    </div>
  )
}

export default Profile
