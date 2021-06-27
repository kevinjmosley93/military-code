import React, { useContext, useEffect } from 'react'
import Link from 'next/link'
import { JobContext } from '../contexts/JobContext'

const FeaturedJobs = () => {
  const { jobs, getJobs } = useContext(JobContext)

  useEffect(() => {
    getJobs()
  }, [])

  if (!jobs) return <p>Loading.......</p>

  console.log({ jobs })

  return (
    <div className='bg-dark text-light py-5'>
      <h1 className='text-center'>Featured Jobs</h1>
      <div className=' container'>
        <div className='row my-5'>
          {jobs &&
            jobs.map(({ JvId, JobTitle, Company, AccquisitionDate }) => {
              return (
                <div key={JvId} className='col-md-4'>
                  <div className='row g-0 border rounded flex-md-row mb-5 shadow h-md-250 '>
                    <div className='col p-4 d-flex flex-column '>
                      <div className='mb-1 '>
                        Posted <span>{AccquisitionDate}</span>
                      </div>
                      <h3 className=''>{JobTitle}</h3>
                      <p className='my-2'>{Company}</p>
                      <Link href={`/jobs/${JvId}`}>
                        <a className='stretched-link mx-auto'>View Job</a>
                      </Link>
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
