import React, { useContext } from 'react'
import { JobContext } from '../contexts/JobContext'

const JobSearch = () => {
  const { handleChange, handleForm, keyword, location } = useContext(JobContext)

  return (
    <>
      <div className='container h-100'>
        <div className='row m-2'>
          <div className='col-md-12'>
            <h4 className='text-center'>Find the job that fits your life</h4>
            <div className='content'>
              <form onSubmit={handleForm}>
                <div className='row justify-content-center'>
                  <div className='col-md-5'>
                    <div className='form-group'>
                      <input
                        name='keyword'
                        value={keyword}
                        onChange={handleChange}
                        className='form-control mb-2 w-100'
                        type='text'
                        placeholder='job title / keywords'
                      />
                    </div>
                  </div>
                  <div className='col-md-5'>
                    <div className='form-group'>
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
                      style={{ display: 'inline-block' }}
                      className='bg-gradient btn-primary btn-md px-3 py-1'>
                      Search Jobs
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

export default JobSearch
