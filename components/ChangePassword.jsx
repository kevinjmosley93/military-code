import React, { useState } from 'react'
import { toast } from 'react-toastify'

const ChangePassword = ({ user }) => {
  const [formInput, setFormInput] = useState({
    form: {
      oldPassword: '',
      newPassword: ''
    }
  })

  const showToast = () =>
    toast.success('Password Changed Successfully', {
      position: 'bottom-center'
    })

  const handleChange = e => {
    const updatedField = { [e.target.name]: e.target.value }
    setFormInput(currState => {
      const updatedForm = { ...currState.form, ...updatedField }
      // console.log({ updatedForm })
      return { form: updatedForm }
    })
  }
  const handleForm = async e => {
    e.preventDefault()
    try {
      const { oldPassword, newPassword } = formInput.form

      const body = {
        oldPassword,
        newPassword,
        userId: user._id
      }

      const url = `${window.location.origin}/api/auth/change-password`
      const params = {
        method: 'POST',
        body: JSON.stringify(body)
      }
      const res = await fetch(url, params)
      const { success } = await res.json()
      // console.log(data)
      if (success) {
        setFormInput({
          form: {
            oldPassword: '',
            newPassword: ''
          }
        })
        showToast()
      }
    } catch (err) {
      console.error(err)
    }
  }

  const {
    form: { oldPassword, newPassword }
  } = formInput
  return (
    <section className='py-5'>
      <div className='container px-5'>
        <div className='rounded-3 py-5 px-4 px-md-5 mb-5'>
          <div className='text-center mb-5'>
            <h1 className='fw-bolder text-center'>
              {user.firstName !== '' ? user.firstName : user.email}'s Profile
            </h1>
          </div>
          <div className='row gx-5 justify-content-center'>
            <div className='col-lg-8 col-xl-6'>
              <form onSubmit={handleForm}>
                <div className='form-floating mb-3'>
                  <input
                    onChange={handleChange}
                    name='oldPassword'
                    value={oldPassword}
                    className='form-control'
                    id='inputEmail'
                    type='password'
                    placeholder='Old Password'
                  />
                  <label htmlFor='inputEmail'>Old Password</label>
                </div>
                <div className='form-floating mb-3'>
                  <input
                    onChange={handleChange}
                    name='newPassword'
                    value={newPassword}
                    className='form-control'
                    id='inputName'
                    type='password'
                    placeholder='New Password'
                  />
                  <label htmlFor='inputName'>New Password</label>
                </div>
                <div>
                  <button
                    className='btn-primary btn-lg bg-gradient'
                    type='submit'>
                    Change Password
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ChangePassword
