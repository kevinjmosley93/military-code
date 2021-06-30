import React, { useState, useContext, useEffect } from 'react'
import { JobContext } from '../contexts/JobContext'
import Pagination from '../helpers/paginate'

const Resources = () => {
  const [expanded, setExpanded] = useState(false)
  const [uid, setUid] = useState(null)
  const { jobCenters, getJobCenters, location } = useContext(JobContext)

  const data = jobCenters || []

  const { filteredData, paginationJsx } = Pagination({
    data
  })

  console.log({ filteredData })

  useEffect(() => {
    getJobCenters(location)
  }, [])

  if (!jobCenters)
    return (
      <div>
        <h1 className='text-center'>Job Conters Near {location}</h1>
        <p>Loading.......</p>
      </div>
    )

  // console.log({ jobCenters })

  return (
    <>
      <div className='mb-3 container'>
        <div className='row g-5 mt-3'>
          <h1 className='text-center'>Job Centers Near {location}</h1>
          <div className='col-md-4'>
            <div className='position-sticky pt-2' style={{ top: '2rem' }}>
              <div className='p-4 mb-3 bg-light rounded shadow-lg'>
                <h4 className='fst-italic'>Resources</h4>
                <div className='mb-0'>jhugdjkjhfdk</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Resources
