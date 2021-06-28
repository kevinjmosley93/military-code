import React, { useContext } from 'react'
import { JobContext } from '../../contexts/JobContext'
import { fetchJobs, fetchJobsById } from '../../lib/Jobs/fetchJobs'

const Id = ({ data }) => {
  const {
    JobTitle,
    Company,
    Description,
    Location,
    URL,
    MetaData: { CitationSuggested }
  } = data
  console.log(CitationSuggested)

  return (
    <>
      <div className='container  pb-3'>
        <h1 className='text-center py-3'>
          {Company} is looking for a {JobTitle} in {Location}
        </h1>
        <div dangerouslySetInnerHTML={{ __html: Description }} />
        <a
          target='_blank'
          rel='noreferrer'
          style={{ margin: '0 auto', fontWeight: '700', fontSize: '2rem' }}
          href={URL}
          className='text-center text-dark d-block btn-lg py-4'>
          Apply
        </a>
        <small className='text-center'>{CitationSuggested}</small>
      </div>
    </>
  )
}

export default Id

export async function getStaticPaths(context) {
  const data = await fetchJobs('service', 'new york, new york')
  const { Jobs } = data.data

  console.log({ context })
  console.log(Jobs)

  const paths = Jobs.map(({ JvId }) => ({
    params: { id: JvId }
  }))
  return { paths, fallback: true }
}

export async function getStaticProps({ params }) {
  const { data } = await fetchJobsById(params.id)

  return { props: { data } }
}
