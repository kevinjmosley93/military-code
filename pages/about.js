import React from 'react'
import Image from 'next/image'

const about = () => {
  return (
    <>
      <section className='py-5'>
        <div className='container px-5'>
          <div className='row align-items-center'>
            <div className='col-md-7'>
              <div className=' my-5'>
                <h1 className='fw-bolder text-center mb-3'>
                  We help veterans secure jobs before their separation date.
                </h1>
                <p
                  style={{ lineHeight: '2.5rem' }}
                  className='lead fw-normal text-justify text-muted mb-4'>
                  We were started in 2020 by a U.S. Navy veteran. The pandemic
                  made it hard for people of all walks of life to adjust to the
                  hard times but our veterans always end up with the short end
                  of the stick. This blog is dedicated to helping veterans make
                  a smooth transition from active duty into a second career
                  without the military. Our job is to give you all of the
                  resources and tools you need to find employment during
                  terminal leave or sooner. Some of our resources include:
                  Resume Writing Best Practices, Interview Tips and Job Board
                  Profile set-ups. We pride ourselves in having the most
                  up-to-date information on jobs and career resources.
                </p>
              </div>
            </div>
            <div className='col-md-5'>
              <Image
                className='rounded-circle'
                src='https://images.unsplash.com/photo-1509321954256-e03640ea1860?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=753&q=80'
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default about
