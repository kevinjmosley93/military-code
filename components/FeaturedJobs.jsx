import React, { useEffect, useContext, useState } from 'react'
import Link from 'next/link'
import { JobContext } from '../contexts/JobContext'
import JobSearch from './JobSearch'
import Pagination from '../helpers/paginate'

const FeaturedJobs = () => {
  const [expanded, setExpanded] = useState(false)
  const [uid, setUid] = useState(null)
  const { jobs, getJobs, getJobsById, keyword, location, setJobData, jobData } =
    useContext(JobContext)

  const data = jobs || []

  const { filteredData, paginationJsx } = Pagination({
    data
  })

  console.log({ filteredData })

  const handleClick = async id => {
    try {
      const data = await getJobsById(id)
      setJobData(data)
      // console.log(jobData)
    } catch (err) {
      console.error(err)
    }
  }

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

  // console.log({ jobs })

  return (
    <div className='bg-light  py-5'>
      <h1 className='text-center pb-2'>Featured Jobs</h1>
      <JobSearch />
      <div className='p-3 mt-3 container text-light bg-dark rounded'>
        <div className='row my-3'>
          {jobs &&
            filteredData.map(({ JvId, JobTitle, Company, Location }) => {
              return (
                <div key={JvId} className='col-md-12'>
                  <div
                    onClick={async () => {
                      try {
                        setUid(JvId)
                        await handleClick(JvId)
                        setExpanded(!expanded)
                        console.log({ uid })
                      } catch (err) {
                        console.error(err)
                      }
                    }}
                    style={{ cursor: 'pointer' }}
                    className='row g-0 border rounded flex-md-row mb-5 shadow h-md-250'>
                    <div className='col p-4 d-flex flex-column '>
                      <h3>{JobTitle}</h3>
                      <div className='d-flex flex-row justify-content-between'>
                        <p className='my-2'>
                          {Company} is hiring in {Location}
                        </p>
                        <div>
                          <a
                            className='btn-md btn-primary bg-gradient p-1 text-center'
                            style={{ cursor: 'pointer', float: 'right' }}>
                            View {expanded && JvId === uid ? 'Less' : 'More'}
                          </a>
                        </div>
                      </div>
                      <div className='container mt-2'>
                        {expanded && JvId === uid && jobData && (
                          <>
                            <div
                              style={{
                                wordWrap: 'break-word',
                                maxHeight: '410px'
                              }}
                              id='scroll-black'
                              className='text-center overflow-scroll p-2'
                              dangerouslySetInnerHTML={{
                                __html: jobData.Description
                              }}
                            />
                            <a
                              rel='noreferrer'
                              target='_blank'
                              href={jobData.URL}
                              style={{ margin: '0 auto' }}
                              className='text-center d-block btn-lg p-2'>
                              Apply for Job
                            </a>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
        </div>
        {paginationJsx()}
      </div>
    </div>
  )
}

export default FeaturedJobs
