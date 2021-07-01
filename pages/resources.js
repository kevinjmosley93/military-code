import React, { useState, useContext, useEffect } from 'react'
import Link from 'next/link'
import { JobContext } from '../contexts/JobContext'
import Pagination from '../helpers/paginate'
import JobCenterSearch from '../components/JobCenterSearch'

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
          <div className='col-md-3'>
            <div className='position-sticky pt-2' style={{ top: '2rem' }}>
              <div className='p-4 mb-3 bg-light rounded shadow-lg'>
                <h4 className='fst-italic'>Resources</h4>
                <ul style={{ listStyle: 'none' }} className='m-0 p-0'>
                  <li className='pb-2'>
                    <Link href='apprenticeships'>
                      <a>Apprenticeships by Location</a>
                    </Link>
                  </li>
                  <li className='pb-2'>
                    <Link href='licenses'>
                      <a>Licenses by Location</a>
                    </Link>
                  </li>
                  <li className='pb-2'>
                    <Link href='training'>
                      <a>Training by Location</a>
                    </Link>
                  </li>
                  <li className=''>
                    <Link href='unemployment'>
                      <a>Unemployment Rates by Location</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='col-md-9 text-dark py-2'>
            <div className=' container'>
              <JobCenterSearch />
              <div style={{ lineHeight: '2rem' }} className='row my-5'>
                {jobCenters &&
                  filteredData.map(
                    ({
                      ID,
                      Name,
                      OpenHour,
                      Phone,
                      WebSiteUrl,
                      VetRepEmail,
                      VeteranRep,
                      WorkersServices,
                      YouthServices,
                      YSContact,
                      YSContactEmail,
                      BusinessServices,
                      LastUpdated,
                      BusinessRep,
                      BusRepEmail,
                      Address1,
                      Address2,
                      City,
                      StateAbbr
                    }) => {
                      return (
                        <div key={ID} className='col-md-6'>
                          <div
                            onClick={async () => {
                              try {
                                setUid(ID)
                                // await handleClick(JvId)
                                setExpanded(!expanded)
                                console.log({ uid })
                              } catch (err) {
                                console.error(err)
                              }
                            }}
                            className='row g-0 border rounded flex-md-row mb-5 shadow h-md-250 '>
                            <div className='col p-4 d-flex flex-column '>
                              <small
                                className='mb-2'
                                style={{ fontSize: '.7rem' }}>
                                Last Updated {LastUpdated}
                              </small>
                              <h5>
                                {Name}, {StateAbbr} - {Phone}
                              </h5>
                              <div className='d-flex flex-column justify-content-between'>
                                <p className='my-2'>
                                  We are located at {Address1}{' '}
                                  {Address2 !== '' ? Address2 : ''} {City},
                                  {StateAbbr}
                                </p>
                                <p className='my-2'>
                                  ‣ Our hours are {OpenHour}
                                </p>
                                {VeteranRep === 'Yes' ? (
                                  <p className='container'>
                                    ‣ Our{' '}
                                    <span className='fw-bolder'>
                                      Veterans Rep
                                    </span>{' '}
                                    can be contacted at{' '}
                                    <span
                                      style={{ wordWrap: 'break-word' }}
                                      className='text-wrap'>
                                      {VetRepEmail}
                                    </span>
                                  </p>
                                ) : (
                                  ''
                                )}
                                {BusinessRep === 'Yes' ? (
                                  <p className='container'>
                                    ‣ Our{' '}
                                    <span className='fw-bolder'>
                                      Business Rep
                                    </span>{' '}
                                    can be contacted at{' '}
                                    <span
                                      style={{ wordWrap: 'break-word' }}
                                      className='text-wrap'>
                                      {BusRepEmail}
                                    </span>
                                  </p>
                                ) : (
                                  ''
                                )}
                                {YSContact === 'Yes' ? (
                                  <p className='container'>
                                    ‣ Our{' '}
                                    <span className='fw-bolder'>
                                      Youth Services Rep
                                    </span>{' '}
                                    can be contacted at{' '}
                                    <span
                                      style={{ wordWrap: 'break-word' }}
                                      className='text-wrap'>
                                      {YSContactEmail}
                                    </span>
                                  </p>
                                ) : (
                                  ''
                                )}
                              </div>
                              <div
                                style={{ wordWrap: 'break-word' }}
                                className='row'>
                                {WorkersServices.length > 0 && (
                                  <div className='col-4'>
                                    <h5>Worker Services</h5>
                                    {WorkersServices.map(
                                      ({ ServiceName }, i) => (
                                        <span key={i}>
                                          {ServiceName}
                                          {i === WorkersServices.length - 1
                                            ? '.'
                                            : ','}{' '}
                                        </span>
                                      )
                                    )}
                                  </div>
                                )}
                                {BusinessServices.length > 0 && (
                                  <div className='col-4'>
                                    <h5>Business Services</h5>
                                    {BusinessServices.map(
                                      ({ ServiceName }, i) => (
                                        <span key={i}>
                                          {ServiceName}
                                          {i === BusinessServices.length - 1
                                            ? '.'
                                            : ','}{' '}
                                        </span>
                                      )
                                    )}
                                  </div>
                                )}
                                {YouthServices.length > 0 && (
                                  <div className='col-4'>
                                    <h5>Youth Services</h5>
                                    {YouthServices.map(({ ServiceName }, i) => (
                                      <span key={i}>
                                        {ServiceName}
                                        {i === YouthServices.length - 1
                                          ? '.'
                                          : ','}{' '}
                                      </span>
                                    ))}
                                  </div>
                                )}
                              </div>
                              <div className='container mt-2 '>
                                <>
                                  <a
                                    rel='noreferrer'
                                    target='_blank'
                                    href={WebSiteUrl}
                                    style={{ margin: '0 auto' }}
                                    className='text-center d-block btn-lg p-2'>
                                    View Website
                                  </a>
                                </>
                              </div>
                            </div>
                          </div>
                        </div>
                      )
                    }
                  )}
              </div>
            </div>
          </div>
          {paginationJsx()}
        </div>
      </div>
    </>
  )
}

export default Resources
