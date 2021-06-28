import React, { useEffect } from 'react'
import Link from 'next/link'

const FeaturedJobs = ({ jobs, getJobs, keyword, location }) => {
  useEffect(() => {
    getJobs(keyword, location)
  }, [])

  if (!jobs)
    return (
      <div>
        <h1 className='text-center'>Featured Jobs</h1>
        <p>Loading.......</p>
      </div>
    )

  console.log({ jobs })

  return (
    <div className='bg-light  py-5'>
      <h1 className='text-center'>Featured Jobs</h1>
      <div className='p-3 container text-light bg-dark rounded'>
        <div className='row my-5'>
          {jobs &&
            jobs.map(({ JvId, JobTitle, Company, AccquisitionDate }) => {
              return (
                <div key={JvId} className='col-md-12'>
                  <div className='row g-0 border rounded flex-md-row mb-5 shadow h-md-250 '>
                    <div className='col p-4 d-flex flex-column '>
                      <h3 className=''>{JobTitle}</h3>
                      <p className='my-2'>{Company}</p>
                      <Link href={`/jobs/${JvId}`}>
                        <a className='mx-auto'>View Job</a>
                      </Link>
                    </div>
                  </div>
                </div>
              )
            })}
        </div>
        <Link href={'/jobs'}>
          <a
            style={{ margin: '0 auto' }}
            className='text-center d-block btn-lg p-2'>
            View More
          </a>
        </Link>
      </div>
    </div>
  )
}

export default FeaturedJobs
