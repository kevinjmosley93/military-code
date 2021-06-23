import React from 'react'

const Services = () => {
  return (
    <div className='bg-dark text-light container-fluid'>
      <div className="container  px-4 py-5" id="featured-3">
    <h2 className="pb-2 text-center">How We Can Help</h2>
    <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
      <div className="feature col">
        <div className="feature-icon"><i className="fa fa-briefcase" aria-hidden="true"></i>
        </div>
        <h2>Access to Featured Jobs</h2>
        <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
        <a href="#" className="icon-link">
          Call to action
        </a>
      </div>
      <div className="feature col">
        <div className="feature-icon">
      <i className="fa fa-file-pdf-o" aria-hidden="true"></i>
        </div>
        <h2>One on One Resume writing</h2>
        <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
        <a href="#" className="icon-link">
          Call to action
          
        </a>
      </div>
      <div className="feature col">
        <div className="feature-icon ">
        <i className="fa fa-users" aria-hidden="true"></i>

        </div>
        <h2>Access to Network of Recruiters</h2>
        <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
        <a href="#" className="icon-link">
          Call to action
          
        </a>
      </div>
    </div>
  </div>
    </div>
  )
}

export default Services

