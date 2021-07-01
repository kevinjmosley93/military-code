import React, { useContext } from 'react'
import { JobContext } from '../contexts/JobContext'

const JobCenterSearch = () => {
  const { handleChange, handleForm, location } = useContext(JobContext)

  return (
    <>
      <div className='container h-100'>
        <div className='row mx-auto'>
          <div className='col-md-12'>
            <h4 className='text-center'>Enter a city /state /zip code</h4>
            <div className='content'>
              <form onSubmit={handleForm}>
                <div className='row justify-content-center'>
                  <div className='col-md-8'>
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
                  <div className='col-md-4'>
                    <button
                      type='submit'
                      className='bg-gradient btn-primary btn-md px-3 py-1 shadow'>
                      Search Centers
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default JobCenterSearch
