import React from 'react'

const ProfileCard = ({ training }) => {
  const { SchoolName, ProgramName, Address, Phone, City, Zip, StateAbbr } =
    training
  // console.log({ SchoolName, ProgramName, Address, Phone, City, Zip })

  return (
    <div className='container'>
      <h5>
        You've saved {SchoolName}'s {ProgramName} program. Contact them at{' '}
        {Phone}
      </h5>
      <p>
        They are located at {Address}, {City}, {StateAbbr} {Zip}
      </p>
    </div>
  )
}

export default ProfileCard
