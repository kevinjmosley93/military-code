import React from 'react'

const Services = () => {
  return (
    <div className='bg-dark text-light'>
      <div className='container  px-4 py-5' id='featured-3'>
        <h2 className='pb-2 text-center'>How We Can Help</h2>
        <div className='row g-4 py-5 row-cols-1 row-cols-lg-3'>
          <div className='feature col-md-4 shadow py-3 border rounded'>
            <div className='feature-icon text-center mb-2'>
              <i className='fa fa-briefcase' aria-hidden='true'></i>
            </div>
            <h2>Find Featured Jobs</h2>
            <p>
              Your first step to finding a job is looking at what there is a
              demand for. Search Jobs in industries that best match your skills.
            </p>
            <a style={{ margin: '0 auto' }} href='#' className='icon-link'>
              View Jobs
            </a>
          </div>
          <div className='feature col-md-4 shadow border rounded py-3'>
            <div className='feature-icon text-center mb-2'>
              <i className='fa fa-cogs' aria-hidden='true'></i>
            </div>
            <h2>Find Local Apprenticeships</h2>
            <p>
              Apprenticeships are a great way for veterans to get paid while
              using learning a valuable trade. Most programs allow you to use
              your G.I. Bill as well.
            </p>
            <a style={{ margin: '0 auto' }} href='#' className='icon-link'>
              View Apprenticeships
            </a>
          </div>
          <div className='feature col-md-4 shadow py-3 border rounded'>
            <div className='feature-icon text-center mb-2'>
              <i className='fa fa-users' aria-hidden='true'></i>
            </div>
            <h2>Find Local Job Centers</h2>
            <p>
              There are 100s of Job Center right in your neighborhood.
              Contacting the centers closest to where you will be getting out is
              the first step to landing a job.
            </p>
            <a style={{ margin: '0 auto' }} href='#' className='icon-link'>
              View Centers
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
