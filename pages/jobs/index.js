import React, { useContext, useEffect, useState } from 'react'
import { NextSeo } from 'next-seo'
import JobSearch from '../../components/JobSearch'
import Loading from '../../components/Loading'
import { JobContext } from '../../contexts/JobContext'
import Pagination from '../../helpers/paginate'

const Index = () => {
  const [expanded, setExpanded] = useState(false)
  const [uid, setUid] = useState(null)

  const { jobs, getJobs, getJobsById, keyword, location, setJobData, jobData } =
    useContext(JobContext)

  const data = jobs || []

  const { filteredData, paginationJsx } = Pagination({
    data
  })

  // console.log({ filteredData })

  const handleClick = async id => {
    try {
      const data = await getJobsById(id)
      await setJobData(data)
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
      <>
        <div className='pages__bg-overlay'>
          <div className='vertical-center'>
            <JobSearch />
          </div>
        </div>
        <br />
        <div className='conatiner py-5'>
          <Loading />
        </div>
      </>
    )

  // console.log({ jobs })

  return (
    <>
      <NextSeo
        title='ETV | Employ The Vets (V.E.T.S - Veterans Equally Trying to Survive) Featured Jobs'
        description='Search for any job near your separation location in order to secure employment before you get out of the military.'
      />
      <div className='pages__bg-overlay'>
        <div className='vertical-center'>
          <JobSearch />
        </div>
      </div>
      <div id='top' className='text-dark py-5'>
        <h1 className='text-center'>Jobs</h1>
        <div className=' container'>
          <div className='row my-5'>
            {jobs &&
              filteredData.map(({ JvId, JobTitle, Company, Location, URL }) => {
                return (
                  <div key={JvId} className='col-md-6'>
                    <div
                      onClick={async () => {
                        try {
                          setUid(JvId)
                          await handleClick(JvId)
                          setExpanded(!expanded)
                          // console.log({ uid })
                        } catch (err) {
                          console.error(err)
                        }
                      }}
                      style={{ cursor: 'pointer' }}
                      className='row g-0 border rounded flex-md-row mb-5 shadow h-md-250 '>
                      <div className='col p-4 d-flex flex-column '>
                        <h3>{JobTitle}</h3>
                        <div className='d-flex flex-row justify-content-between'>
                          <p className='my-2'>
                            {Company} is hiring in {Location}
                          </p>
                          <div>
                            <button
                              type='button'
                              className='btn-md btn-primary bg-gradient px-1 text-center shadow'
                              style={{ cursor: 'pointer', float: 'right' }}>
                              View {expanded && JvId === uid ? 'Less' : 'More'}
                            </button>
                          </div>
                        </div>
                        <div className='container mt-2'>
                          {expanded && JvId === uid && jobData && (
                            <>
                              <div
                                style={{
                                  wordWrap: 'break-word',
                                  maxHeight: '300px'
                                }}
                                id='scroll-white'
                                className='text-center container overflow-scroll p-2'
                                dangerouslySetInnerHTML={{
                                  __html: jobData.Description
                                }}
                              />
                              <a
                                rel='noreferrer'
                                target='_blank'
                                href={URL}
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
    </>
  )
}

export default Index
