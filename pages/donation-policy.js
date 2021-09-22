import React from 'react'
import { NextSeo } from 'next-seo'

const DonationPolicy = () => {
  return (
    <>
      <NextSeo
        title='Donate to ETV'
        description='We appreciate all donations to the community as they go back into building the platform and helping veterans across the country.'
      />
      <div className='px-2 py-3 my-2 text-center'>
        <h1 className='display-5 fw-bold'>Donation Policy</h1>
      </div>

      <div className='text-center my-3 container'>
        <p>
          <span>Donation &amp; Gift Acceptance Policy</span>
          <br />
          <br />
          <br />
          <span>
            1. ETV | Employ The V.E.T.S Veterans Equally Trying to Survive
            solicits and accepts gifts that are consistent with its mission.
          </span>
          <br />
          <br />
          <span>
            2. Donations will generally be accepted from individuals,
            partnerships, corporations,
          </span>
          <br />
          <span>
            foundations, government agencies, or other entities, without
            limitations.
          </span>
          <br />
          <br />
          <span>
            3. In the course of its regular fundraising activities, ETV | Employ
            The V.E.T.S Veterans Equally Trying to Survive will accept donations
            of money, real property, personal property, stock, and in-kind
            services.
          </span>
          <br />
          <br />
          <span>
            4. Certain types of gifts must be reviewed prior to acceptance due
            to the special liabilities they
          </span>
          <br />
          <span>
            may pose for ETV | Employ The V.E.T.S Veterans Equally Trying to
            Survive. Examples of gifts which will be subject to review
          </span>
          <br />
          <span>
            include gifts of real property, gifts of personal property, and
            gifts of securities.
            <br />
            <br />
          </span>
        </p>
        <p>
          YOUR CHARITABLE DONATION IS TAX DEDUCTIBLE, PLEASE KEEP YOUR DONATION
          RECEIPT FOR YOUR ACCOUNTANT TO REVIEW!
        </p>
        {/* <a
          class='btn d-block'
          target='_blank'
          href='https://www.paypal.com/donate?hosted_button_id=GE7NQ7TWYQETU'
          rel='noopener noreferrer'>
          Donate
        </a> */}
      </div>
    </>
  )
}

export default DonationPolicy
