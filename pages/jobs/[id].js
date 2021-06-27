import React from 'react'
import { fetchJobs, fetchJobsById } from '../../lib/Jobs/fetchJobs'

export async function getStaticPaths() {
  const data = await fetchJobs()
  const { Jobs } = data.data
  console.log(Jobs)

  const paths = Jobs.map(({ JvId }) => ({
    params: { id: JvId }
  }))
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const { data } = await fetchJobsById(params.id)

  return { props: { data } }
}

const Id = ({ data }) => {
  const { JobTitle, Company, Description, Location, URL } = data
  console.log(data)

  return (
    <>
      <p>
        {Company} is hiring {JobTitle} in {Location}
      </p>
      <div dangerouslySetInnerHTML={{ __html: Description }} />
      <a target='_blank' rel='noreferrer' className='text-dark' href={URL}>
        Apply
      </a>
    </>
  )
}

export default Id
