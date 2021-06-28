import React, { useContext, useEffect } from 'react'
import JobSearch from '../../components/JobSearch'
import { JobContext } from '../../contexts/JobContext'

import Link from 'next/link'

const Index = () => {
  const { jobs, getJobs, keyword, location, radius, numOfRecords } =
    useContext(JobContext)

  useEffect(() => {
    getJobs(keyword, location, radius, numOfRecords)
  }, [])

  if (!jobs)
    return (
      <div className='pages__bg-overlay'>
        <div className='vertical-center'>
          <JobSearch />
        </div>
        <p>Loading.......</p>
      </div>
    )

  console.log({ jobs })

  return (
    <>
      <div className='pages__bg-overlay'>
        <div className='vertical-center'>
          <JobSearch />
        </div>
      </div>
      <div className='bg-light text-dark py-5'>
        <h1 className='text-center'>Jobs</h1>
        <div className=' container'>
          <div className='row my-5'>
            {jobs &&
              jobs.map(({ JvId, JobTitle, Company, AccquisitionDate }) => {
                return (
                  <div key={JvId} className='col-md-4'>
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
          <a
            style={{ margin: '0 auto' }}
            href='#'
            className='text-center d-block btn-lg p-2'>
            View More
          </a>
        </div>
      </div>
    </>
  )
}

export default Index
