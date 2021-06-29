import React, { useEffect, useContext, useState } from 'react'
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
                <div className='row'>
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
                      className='bg-gradient btn-primary btn-md px-3 py-1'>
                      <i className='fa fa-search' aria-hidden='true'></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className='popular-jobs'>
              <b>Popular Keywords: </b>
              <span className='badge bg-primary mx-2'>Web Design</span>
              <span className='badge bg-primary mx-2'>Manager</span>
              <span className='badge bg-primary mx-2'>Programming</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default JobSearch
