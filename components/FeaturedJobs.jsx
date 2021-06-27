import React from 'react'
import moment from 'moment'

const FeaturedJobs = ({ jobs, loading }) => {
  console.log({ data: jobs })
  return loading ? (
    <p className='bg-dark text-light py-5'>Loading...</p>
  ) : (
    <div className='bg-dark text-light py-5'>
      <h1 className='text-center'>Featured Jobs</h1>
      <div className=' container'>
        <div className='row my-5'>
          {jobs.map(({ JvId, JobTitle, Company, AccquisitionDate }) => {
            return (
              <div key={JvId} className='col-md-4'>
                <div className='row g-0 border rounded overflow-hidden flex-md-row mb-2 shadow-sm h-md-250 '>
                  <div className='col p-4 d-flex flex-column '>
                    <div className='mb-1 text-muted'>
                      Posted <span>{moment(AccquisitionDate).fromNow()}</span>
                    </div>
                    <h3 className=''>{JobTitle}</h3>
                    <p className='my-2'>{Company}</p>
                    <a href='#' className='stretched-link mx-auto'>
                      View Job
                    </a>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        <a
          style={{ margin: '0 auto' }}
          href='#'
          className='text-center d-block btn-lg p-2'>
          View More
        </a>
      </div>
    </div>
  )
}

export default FeaturedJobs
