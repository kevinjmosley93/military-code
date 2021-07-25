import React, { useState, useContext, useEffect } from 'react'
import Loading from '../components/Loading'
import { JobContext } from '../contexts/JobContext'
import Pagination from '../helpers/paginate'
import { useUser } from '../lib/hooks'
import saveTraining from '../lib/saveProfile'

const Training = () => {
  const user = useUser()
  const { getTraining, training } = useContext(JobContext)

  const [formInput, setFormInput] = useState({
    form: {
      keyword: 'computer science',
      location: 'Tx'
    }
  })
  const [done, setDone] = useState(null)

  const {
    form: { keyword, location }
  } = formInput

  const handleChange = e => {
    const updatedField = { [e.target.name]: e.target.value }
    setFormInput(currState => {
      const updatedForm = { ...currState.form, ...updatedField }
      return { form: updatedForm }
    })
  }
  const handleClick = async (id, training) => {
    const { success } = await saveTraining(id, training)

    if (!success) return

    setDone(success)

    // console.log({ id, training })
  }
  const handleForm = async e => {
    try {
      e.preventDefault()
      const { keyword, location } = formInput.form

      await getTraining(keyword, location)
    } catch (err) {
      console.error(err)
    }
  }

  const data = training || []

  const { filteredData, paginationJsx } = Pagination({
    data
  })

  // console.log({ filteredData })

  useEffect(() => {
    getTraining(keyword, location)
  }, [])

  if (!training)
    return (
      <div className='container py-5'>
        <Loading />
      </div>
    )

  // console.log({ training })

  return (
    <div id='top' className='container py-2 h-100'>
      <h1 className='text-center pt-4'>
        Training/Degree Programs near {location}
      </h1>
      <div className='row mx-auto'>
        <div className='col-md-12'>
          <div className='mt-4 content'>
            <form onSubmit={handleForm}>
              <div className='row justify-content-center'>
                <div className='col-md-5'>
                  <div className='form-group shadow'>
                    <input
                      name='keyword'
                      value={keyword}
                      onChange={handleChange}
                      className='form-control mb-2 w-100'
                      type='text'
                      placeholder='keyword..ex. pilot'
                    />
                  </div>
                </div>
                <div className='col-md-5'>
                  <div className='form-group shadow'>
                    <input
                      name='location'
                      value={location}
                      onChange={handleChange}
                      className='form-control mb-2 w-100'
                      type='text'
                      placeholder='city / state / zip code'
                    />
                  </div>
                </div>
                <div className='col-md-2'>
                  <button
                    type='submit'
                    className='bg-gradient btn-primary btn-md px-3 py-1 shadow'>
                    Search Programs
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div>
            <div style={{ lineHeight: '2rem' }} className='row my-5'>
              {training &&
                filteredData.map(
                  (
                    {
                      ID,
                      SchoolName,
                      ProgramName,
                      Address,
                      City,
                      StateAbbr,
                      Zip,
                      Phone
                    },
                    i
                  ) => {
                    return (
                      <div key={i} className='col-md-6'>
                        <div className='row g-0 border rounded flex-md-row my-4 shadow h-md-250 '>
                          <div
                            style={{
                              wordWrap: 'break-word',
                              height: '250px'
                            }}
                            id='scroll-white'
                            className='col p-4 d-flex flex-column text-center overflow-scroll p-2'>
                            <h3 className='mb-2' style={{ fontSize: '1.5rem' }}>
                              {SchoolName}
                            </h3>
                            <p>
                              {ProgramName} - {Phone}
                            </p>
                            <div className='d-flex flex-column justify-content-between'>
                              <p className='mb-0'>
                                We are located at {Address} {City}, {StateAbbr}{' '}
                                {Zip}
                              </p>
                            </div>
                          </div>
                          <a
                            style={{ display: 'none' }}
                            className='text-center'
                            onClick={async () => {
                              const trainingObj = {
                                SchoolName,
                                ProgramName,
                                Address,
                                City,
                                StateAbbr,
                                Zip,
                                Phone
                              }
                              await handleClick(user._id, trainingObj)
                              // console.log({ jobObj, ...user })
                            }}>
                            Save for Later
                          </a>
                        </div>
                      </div>
                    )
                  }
                )}
            </div>
            {paginationJsx()}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Training
